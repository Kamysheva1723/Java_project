'use strict';

function getTime(unix_time){

  const date = new Date(unix_time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

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
    try {
      console.log("string 33" + result);
      console.log(result.features[0].geometry.coordinates);
      const resultCoordinates = {
        latitude: result.features[0].geometry.coordinates[1],
        longitude: result.features[0].geometry.coordinates[0]
      };
      getRoute(resultCoordinates, {latitude: 60.22, longitude: 24.75})
    }
    catch {
          const next_route = document.createElement("h5")
          next_route.textContent = "Can't find location...";
          document.getElementById("result").appendChild(next_route);
        }

    })

}

function getRoute(origin, target) {

  console.log(origin, target);
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
        if (result.data.plan.itineraries.length != 0) {
          console.log("string 89 result.data.plan.itineraries.length" + result.data.plan.itineraries.length);
          console.log(result.data.plan.itineraries[0].legs);
          const googleEncodedRoute = result.data.plan.itineraries[0].legs;

          const startTime = googleEncodedRoute[0].startTime;
          const endTime = googleEncodedRoute[googleEncodedRoute.length -
          1].endTime;
          const next_route = document.createElement("h5")
          next_route.textContent = "Start time: "
              + getTime(startTime) + "; end time: " + getTime(endTime);
          document.getElementById("result").appendChild(next_route);

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

          map.fitBounds([
            [origin.latitude, origin.longitude],
            [target.latitude, target.longitude]]);
        }
        else {
          const next_route = document.createElement("h5")
          next_route.textContent = "Can't find route...";
          document.getElementById("result").appendChild(next_route);
        }
    }).catch(function (e) {
        console.error(e.message);
    });
}



//main

const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

  const address_form = document.querySelector('#address_form');
  address_form.addEventListener('submit', async function (evt) {

    evt.preventDefault();
    getCoord(document.querySelector('input[name=q]').value);


 })



