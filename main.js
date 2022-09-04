const Choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * Choices.length)];
}
//console.log(getComputerChoice(Choices));

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player Won";
  } else {
    return "Computer Won";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(Choices);
console.log(playRound(playerSelection, computerSelection));
