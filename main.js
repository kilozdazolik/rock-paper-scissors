const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  //console.log(choice);
  return choice;
}

function getPlayerChoice() {
  const option = prompt("rock,paper,scissors");
  return option;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result == "Tie") {
    return `It's a Tie!`;
  } else if (result == "Player") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("New Game");
  for (let i = 0; i < 5; i++) {
    console.log("--------");
    console.log(`Round ${i}`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
  }
  console.log("--------");
  console.log("Game Over");
  if (playerScore > computerScore) {
    console.log(`Player won with ${playerScore} wins!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer won with ${computerScore} wins!`);
  } else {
    console.log("It's a Tie!");
  }
}

game();
