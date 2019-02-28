var gameData = {
	roundsToPlay: 0,
	roundsRemaining: 0,
	humanWins: 0,
	computerWins: 0,
	ties: 0.
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
	
	if(roundWinner == "user"){
		gameData.humanWins ++
		getElem("HUMAN_WINS").innerHTML = 
			gameData.humanWins;
	}
	else if(roundWinner == "computer"){
		gameData.computerWins ++
		getElem("COMPUTER_WINS").innerHTML = 
			gameData.computerWins;
	}
	else{
		getElem("TIES").innerHTML = 
			++ gameData.ties;
	}
	
	getElem("COMP_CHOICE").innerHTML = 
		compChoiceText;
	getElem("USER_CHOICE").innerHTML = 
		userChoiceText;
	getElem("WINNER").innerHTML = 
		roundWinner;
	
	
	gameData.roundsRemaining --;
	
	getElem("ROUNDS_REM").innerHTML = 
		gameData.roundsRemaining;
		
		
	// Check to see if the game is over.
    if (gameData.roundsRemaining < 1) {
		getElem("CHOICE_BTNS").hidden = true; 
		showResults(gameData.humanWins, gameData.computerWins, gameData.ties);
	}
}


// Function to get the random computer choice. 
function getCompChoice(){
    var choices = ["rock","paper","scissor","lizard","spock"]
    return choices[Math.floor(Math.random()* 5)];
}


// TODO: Implement Round Winner Function:
// Since there are three possibilities (either play can win, or it could be a tie)...:
function getRoundWinner(user, computer) {
	var winner;
	if(user == computer){
		winner = "tie";
	}
	else if(user == "lizard" && computer == "spock" ||
	   user == "spock" && computer == "scissors" ||
	   user == "scissors" && computer == "paper" ||
	   user == "paper" && computer == "rock" ||
	   user == "rock" && computer == "lizard" ||
	   user == "scissors" && computer == "lizard" ||
	   user == "lizard" && computer == "paper" ||
	   user == "rock" && computer == "scissors" ||
	   user == "spock" && computer == "rock" ||
	   user == "paper" && computer == "spock"){
		   
		winner = "user";
		
	}
	else {
		winner = "computer";
	}
	
	return winner;
}


// Function to initialize the game elements
function initGame() {
	gameData.roundsToPlay = 0;
	gameData.roundsRemaining = 0;
	gameData.humanWins = 0;
	gameData.computerWins = 0;
	gameData.ties = 0;
	getElem("COMPUTER_WINS").innerHTML = 0;
	getElem("HUMAN_WINS").innerHTML = 0;
	getElem("TIES").innerHTML = 0;
	getElem("CHOICE_BTNS").hidden = false; 
	getElem("ROUNDS_REM").hidden = false;
    hideAll();
	getElem("WINNER").innerHTML = ""; 
    showInstructions();
}

function showResults(userWins, compWins, totalTies){
	getElem("RESULT_FIELD").hidden = false;
	getElem("ROUNDS_REM").hidden = true; 
	
	if(userWins > compWins){
		getElem("FINAL_WINNER").innerHTML = "You won, Have fun !";
	}
	else if(userWins < compWins){
		getElem("FINAL_WINNER").innerHTML = "Computer won, But you played well !";
		
	}
	else{
		getElem("FINAL_WINNER").innerHTML = "It's a tie, You both rock !";
	}
}

// Hides all interface elements.
function hideAll() {
    getElem("INSTRUCTIONS").hidden = true;
    getElem("NO_OF_ROUNDS").hidden = true;
    getElem("PLAY_FIELD").hidden = true;
	getElem("RESULT_FIELD").hidden = true;
}

// when the page loads
function showInstructions(){
	getElem("INSTRUCTIONS").hidden = false;
}

// hide playfield
function hidePlayfield(){
	getElem("PLAY_FIELD").hidden = true;
}


//when clicked start game
function showRounds(){
	getElem("INSTRUCTIONS").hidden = true;
	getElem("NO_OF_ROUNDS").hidden = false;
}

//when clicked play
function showPlay(){
	getElem("NO_OF_ROUNDS").hidden = true;
	getElem("PLAY_FIELD").hidden = false;
	getElem("RESULT_FIELD").hidden = true;
	
	gameData.roundsToPlay = getElem("ROUNDS_TO_PLAY").value;
	gameData.roundsRemaining = getElem("ROUNDS_TO_PLAY").value;
	
	getElem("ROUNDS_REM").innerHTML = gameData.roundsRemaining;

}
