const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

  // get random number between 0 and 2
  const min = 0;
  const max = 2;

  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  // associate the random with one of the choices of the game
  return console.log(choices[random]);
}

function getHumanChoice() {

    let user_choice = prompt("Pick (enter a number): \n - 1 for ROCK \n - 2 for PAPER \n - 3 for SCISSORS");

    // validate the user prompt
    if(isNaN(user_choice)) {
        return console.log("Please, choose between 1, 2 or 3");
    }

    if (user_choice != 1 && user_choice != 2 && user_choice != 3) {
        return console.log("Please, choose between 1, 2 or 3");
    }

    return console.log(choices[user_choice - 1]);
}

getHumanChoice();