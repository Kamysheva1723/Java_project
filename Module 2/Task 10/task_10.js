/*Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: 'Name for candidate 1
Store the candidates' names and initial vote count in objects like this:
[
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,
    },
]
The program asks for the number of voters.
The program asks each voter in turn who they will vote for.
Voter shoud enter candidate name.
If the voter enters an empty value instead of the voting number,
it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:
The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes */

"use strict"

/*if candidate founded return index, else - false*/
function isCandidate(c_list, c_name) {
    for (let i = 0; i < c_list.length; i++) {
        if (c_list[i].name === c_name) {
            return i;
        }
    }
    return false;
}

/*if candidate founded - votes +1 and return true, else return false*/
function Vote(c_list, c_name) {
    let index = isCandidate(c_list, c_name);
    if (index === false) {
      return false;
    }
    else{
      c_list[index].votes += 1;
      return true;
    }
}


let candidates = [];
let number_str;

do{
  number_str = prompt("Enter number of candidates...");
}while(!Number(number_str) || Number(number_str) < 1)

let candidate_number = Math.floor(Number(number_str));

for (let i=0; i<candidate_number; i++){
  let candidate = Object();
  let c_name = prompt("Name for candidate " + (i+1).toString() +":");
  if (isCandidate(candidates,c_name) !== false){
    alert("Ups, name already used, try another...")
    i--;
  }
  else {
    candidate.name = c_name;
    candidate.votes = 0;
    candidates[i] = candidate;
  }
}

do{
  number_str = prompt("Enter number of voters...");
}while(!Number(number_str) || Number(number_str) < 1)

let voter_number = Number(number_str);

let my_candidate;

for (let i=0; i<voter_number; i++){
  do {
     my_candidate = prompt("Hi, " + (i+1).toString() + ". voter! " +
         "Enter name of candidate, you are voting for (Enter for empty vote)...")
  } while (!Vote(candidates,my_candidate) && my_candidate !== "")
}

candidates.sort((a,b) => {return b.votes-a.votes})

if (candidates[0].votes === candidates[1].votes){
  console.log("No winner...")
}
else {
  console.log("The winner is " + candidates[0].name + " with " +
      candidates[0].votes.toString() + " votes.")
}
console.log("Results:")

candidates.forEach(cand => {
      console.log(cand.name + ": " + cand.votes.toString() + " votes");
    }
)




