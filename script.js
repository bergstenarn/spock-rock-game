const playerScoreElem = document.getElementById("playerScore");
const playerChoiceElem = document.getElementById("playerChoice");
const computerScoreElem = document.getElementById("computerScore");
const computerChoiceElem = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Passing player selection value and styling icons
function select(playerChoice) {
  resetSelected();
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceElem.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceElem.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceElem.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceElem.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceElem.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
