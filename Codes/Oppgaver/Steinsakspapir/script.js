// Model
const app = document.getElementById('app');
let aiMove;
let playerMove;
let playerVictories = 0;
let aiVictories = 0;
let rockColor = "white";
let paperColor = "white";
let scissorColor = "white";


// View
function updateView() {
    html = /*html*/ `
        <i id="icon" class="fa-regular fa-hand-back-fist fa-2xl fa-shake" style="color: ${rockColor};" onclick="playerChoice('Rock')"></i>
        <i id="icon" class="fa-regular fa-hand fa-2xl fa-shake" style="color: ${paperColor};" onclick="playerChoice('Paper')"></i>
        <i id="icon" class="fa-regular fa-hand-scissors fa-rotate-90 fa-2xl fa-shake" style="color: ${scissorColor};" onclick="playerChoice('Scissors')"></i><br><br>
        <div>Player ${playerVictories} - ${aiVictories} AI</div>

    `;
    app.innerHTML = html;
}

// Controller
function aiChoice() {
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum == 1) {
        aiMove = "Rock";
        rockColor = "Red";
    }
    else if (randomNum == 2) {
        aiMove = "Paper";
        paperColor = "Red";
    }
    else if (randomNum == 3) {
        aiMove = "Scissors";
        scissorColor = "Red";
    }
    else {
        console.log("Error: randomNum not 1, 2 or 3.")
    }
    determineWinner();
}

function playerChoice(move) {
    resetColors();
    playerMove = move;
    if (playerMove == "Rock") {
        rockColor = "Green";
    }
    else if (playerMove == "Paper") {
        paperColor = "Green";
    }
    else if (playerMove == "Scissors") {
        scissorColor = "Green";
    }
    aiChoice();
}

//stone, papyrus, shears
function determineWinner() {
    console.log(playerMove + " - " + aiMove)
    if (playerMove === aiMove) {
        
    }
    else if (playerMove == "Rock" && aiMove == "Paper" 
            || playerMove == "Scissors" && aiMove == "Rock"
            || playerMove == "Paper" && aiMove == "Scissors") {
        aiVictories++;
       
    }
    else if (playerMove == "Rock" && aiMove == "Scissors" 
            || playerMove == "Scissors" && aiMove == "Paper"
            || playerMove == "Paper" && aiMove == "Rock"){
        playerVictories++;
    }
    updateView();
}

function resetColors(){
    rockColor = "white";
    paperColor = "white";
    scissorColor = "white";
}

updateView();