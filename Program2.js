var gameData = {
	roundsToPlay: 0,
	roundsRemaining: 0,
	humanWins: 0,
	computerWins: 0
};


// function to get the element by ID
function getElem(id){
	var elem = document.getElementById(id);
    
    // A little code just to aid in debugging.
	if (elem) {
        return elem;
    } else {
        alert("Element " + id + " does not exist.");
        
        // This is just for some better debugging.
        console.log(`Element "${id}" does not exist.\nAny Errors after this are probably related!!!`);
        throw new Error("STOPPING");
    }

}


//function to handle user choice
function userChoice(choice){	

	var userChoiceText = choice.name;
	var compChoiceText = getCompChoice();
	
	// round winner is: human, computer or tie
	var roundWinner = getRoundWinner(userChoiceText, compChoiceText);
	
	if(roundWinner == "HUMAN"){
		gameData.humanWins ++
	}
	else{
		gameData.computerWins ++
	}
	
	
	if(gameData.roundsRemaining < 1){
		alert("Game over !");
		initGame();
		showStartBtn();
	}
	
	gameData.roundsRemaining --;
	
	getElem("ROUNDS_REM").innerHTML = 
		gameData.roundsRemaining;
}

function getCompChoice(){
    var choices = ["rock","paper","scissor","lizard","spock"]
    return choices[Math.floor(Math.random()* 5)];
}


// Function to initialize the game elements
function initGame() {
    hideAll();
    showInstructions();
}

// Hides all interface elements.
function hideAll() {
    getElem("INSTRUCTIONS").hidden = true;
    getElem("NO_OF_ROUNDS").hidden = true;
    getElem("PLAY_FIELD").hidden = true;
}

//when the page loads
function showInstructions(){
	getElem("INSTRUCTIONS").hidden = false;
}

function showStartBtn(){
	getElem("START_GAME_BTN").hidden = false;
}

//when clicked start game
function showRounds(){
	getElem("START_GAME_BTN").hidden = true;
	getElem("NO_OF_ROUNDS").hidden = false;
}

//when clicked play
function showPlay(){
	getElem("NO_OF_ROUNDS").hidden = true;
	getElem("PLAY_FIELD").hidden = false;
	
	gameData.roundsToPlay = getElem("ROUNDS_TO_PLAY").value;
	gameData.roundsRemaining = getElem("ROUNDS_TO_PLAY").value;
	
	getElem("ROUNDS_REM").innerHTML = gameData.roundsRemaining;
	
	
	

}
