function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  // get random number between 0 and 2
  const min = 0;
  const max = 2;

  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  // associate the random with one of the choices of the game
  return console.log(choices[random]);
}

getComputerChoice();
