const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
  // get random number between 0 and 2
  const min = 0;
  const max = 2;

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  // associate the random with one of the choices of the game
  let computer_choice = choices[random];

  return computer_choice;
}

function getHumanChoice() {
  let isValid = false;

   // validate human input
  while (!isValid) {
    let human_choice = prompt(
      "Pick between rock, paper or scissors"
    ).toLowerCase();

    if (
      human_choice === "rock" ||
      human_choice === "paper" ||
      human_choice === "scissors"
    ) {
      isValid = true;
      return human_choice;
    }

    console.log("Please, enter rock, paper or scissors");
    isValid = false;
  }
}

function playRound(humanChoice, computerChoice) {
  // evaluate game options and increase score
  if (humanChoice === computerChoice) {
    return console.log("Tie!");
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return console.log("You win! Rock beats scissors");
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return console.log("You lose! Paper beats rock");
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return console.log("You win! Paper beats rock");
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return console.log("You lose! Scissors beats paper");
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return console.log("You win! Scissors beats paper");
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return console.log("You lose! Rock beats scissors");
  }
}

function playGame() {
  let rounds = 0;

  // allow playing 5 rounds
  while (rounds < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Score: " + humanScore + " - " + computerScore);

    humanChoice = "";
    computerChoice = "";

    rounds++;
  }

  // show the result of the match
  if(humanScore === computerScore) {
    return console.log("Tied match!");
  } else if (humanScore > computerScore) {
    return console.log("Congratulations! You win the match");
  } else {
    return console.log("What a shame! You lose the match");
  }
}
