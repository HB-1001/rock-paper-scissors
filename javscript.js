console.log("Welcome to the Rock Paper Scissors game");
console.log(
  "Please type in 'r', 'p', 's' to choose Rock, Paper or Scissors respectively."
);

let choicesArray = ["rock", "paper", "scissors"];
function computerplay() {
  compPick = choicesArray[Math.floor(Math.random() * 3)];
  let compBoxpic = document.body.querySelector("#compBoxPic");
  compBoxpic.src = `${compPick}-cpu.png`;
}
let i = 0; /*user*/
let x = 0; /*computer*/
let userChoice = "";
const buttons = document.body.querySelectorAll(".userBtn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let userbuttonselected = e.target;
    userChoice = e.target.id;
    userbuttonselected.classList.add("btnactive");

    //     const userRock = document.querySelector("#rock.userBtn");
    // const userPaper = document.querySelector("#paper.userBtn");
    // const userScissors = document.querySelector("#scissors.userBtn");
    // let toggler = function () {
    //   if (userChoice === "rock") {
    //     userPaper.classList.add("hidden"), userScissors.classList.add("hidden");
    //   }
    // };
    // toggler();
    result();
  });
});

const userBoxBgd = document.body.querySelector(".userBox");
const compBoxBgd = document.body.querySelector(".compBox");

function result() {
  if (i < 5 && x < 5) {
    computerplay();
    // const activebutton = document.body.querySelector(`#${compPick}.compBtn`);
    // activebutton.classList.add("btnactive");
    // let oppChoice = document.body.querySelector("#oppChoice");
    // oppChoice.textContent = `Computer has chosen ${compPick}`;
    // const transition = document.querySelector(".transition");
    // transition.addEventListener("transitionend", () => {
    //   console.log("Transition ended");
    // });
    let result = "";
    if (compPick === "rock" && userChoice === "rock") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, its a tie`;
      userBoxBgd.style.backgroundColor = "#fdffb6";
      compBoxBgd.style.backgroundColor = "#fdffb6";
    }
    if (compPick === "paper" && userChoice === "rock") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You lose!`;
      ++x;
      userBoxBgd.style.backgroundColor = "#ffadad";
      compBoxBgd.style.backgroundColor = "#caffbf";
    }
    if (compPick === "scissors" && userChoice === "rock") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You win!`;
      ++i;
      userBoxBgd.style.backgroundColor = "#caffbf";
      compBoxBgd.style.backgroundColor = "#ffadad";
    }
    if (compPick === "rock" && userChoice === "paper") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You win!`;
      ++i;
      userBoxBgd.style.backgroundColor = "#caffbf";
      compBoxBgd.style.backgroundColor = "#ffadad";
    }
    if (compPick === "paper" && userChoice === "paper") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, its a tie!`;
      userBoxBgd.style.backgroundColor = "#fdffb6";
      userBoxBgd.style.backgroundColor = "#fdffb6";
      compBoxBgd.style.backgroundColor = "#fdffb6";
    }
    if (compPick === "scissors" && userChoice === "paper") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You lose!`;
      ++x;
      userBoxBgd.style.backgroundColor = "#ffadad";
      compBoxBgd.style.backgroundColor = "#caffbf";
    }
    if (compPick === "rock" && userChoice === "scissors") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You lose!`;
      ++x;
      userBoxBgd.style.backgroundColor = "#ffadad";
      compBoxBgd.style.backgroundColor = "#caffbf";
    }
    if (compPick === "paper" && userChoice === "scissors") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, You win!`;
      ++i;
      userBoxBgd.style.backgroundColor = "#caffbf";
      compBoxBgd.style.backgroundColor = "#ffadad";
    }
    if (compPick === "scissors" && userChoice === "scissors") {
      result = `Computer chose ${compPick} and you chose ${userChoice}, its a tie!`;
      userBoxBgd.style.backgroundColor = "#fdffb6";
      userBoxBgd.style.backgroundColor = "#fdffb6";
      compBoxBgd.style.backgroundColor = "#fdffb6";
    }
    let score = document.body.querySelector("#score");
    score.textContent = `User ${i} vs Computer ${x}`;
    const history = document.querySelector("#history");
    const historyText = document.createElement("li");
    historyText.textContent = `${result}`;
    history.appendChild(historyText);
    let userBoxpic = document.body.querySelector("#userBoxPic");
    userBoxpic.src = `${userChoice}-user.png`;

    if (i == 5 || x == 5) {
      if (i == 5) {
        alert("You win, reload page to start again!");
      } else if (x == 5) {
        alert("You lose! Reload page to start again!");
      }
    }
  }
}

function removeTransition(e) {
  console.log(e);
}

const buttons1 = document.body.querySelectorAll(".boxes Button");
buttons1.forEach((button) => {
  button.addEventListener("transitionend", function (e) {
    e.target.classList.remove("btnactive");
  });
});

// while (i<5,x<5) {result();
//     console.log(`The score is ${i} vs ${x}`)}
// if (i===5) {console.log("we have a winner, it is HumanUser")}
// else if (x===5) {console.log("You lose the game, computer wins")}
// else {console.log()}

/*
 */
