'use strict';
// sources:
// https://digitransit.fi/en/developers/apis/1-routing-api/itinerary-planning/
// route points are in Google polyline encoded format, so you need to add support for Leafletiin:
// https://github.com/jieter/Leaflet.encoded


// show the map
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


function getCoord(address) {

  const address_pars = address.split('%');
  const url = 'https://api.digitransit.fi/geocoding/v1/autocomplete?text=' + address_pars;

  const fetchOptions = {
    method: 'GET',
    // Request headers
    headers: {
      'Cache-Control': 'no-cache',
      'digitransit-subscription-key': 'ee36f515bc2d426fa25325dd51734266',
    }
  }

  fetch(url, fetchOptions).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result.features[0].geometry.coordinates);
    const resultCoordinates = {latitude: result.features[0].geometry.coordinates[1],longitude: result.features[0].geometry.coordinates[1]};
    getRoute(resultCoordinates,{latitude: 24.758061, longitude: 60.22})
    })

}

function getRoute(origin, target) {

  const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    // GraphQL query
  const GQLQuery = `{
   plan(
     from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
     to: {lat: ${target.latitude}, lon: ${target.longitude}}
     numItineraries: 1
   ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
      'digitransit-subscription-key': 'ee36f515bc2d426fa25325dd51734266',
        },
        body: JSON.stringify({query: GQLQuery}),
    };
    console.log(fetchOptions);
    fetch(apiAddress, fetchOptions).then(function (response) {
        return response.json();
    }).then(function (result) {
        console.log(result.data.plan.itineraries[0].legs);
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
    }).catch(function (e) {
        console.error(e.message);
    });
}

//main

  const address_form = document.querySelector('#address_form');
  address_form.addEventListener('submit', async function (evt) {

    evt.preventDefault();
    getCoord(address_form.textContent);


 })



