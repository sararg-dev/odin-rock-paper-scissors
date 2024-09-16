const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

  // get random number between 0 and 2
  const min = 0;
  const max = 2;

  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  // associate the random with one of the choices of the game
  return choices[random];
}

function getHumanChoice() {

    let human_choice = prompt("Pick between rock, paper or scissors").toLowerCase();

    // validate human input
    if (human_choice === "rock" || human_choice === "paper" || human_choice === "scissors") {
        return human_choice;
    } 

    return console.log("Please, enter rock, paper or scissors");
}

getHumanChoice();