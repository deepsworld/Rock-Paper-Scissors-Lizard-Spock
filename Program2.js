function getElem(id){
  return document.getElementById(id);
}

//inner html means the space between the tags
function showRoundsRemaining(){
	getElem("ROUNDS_REM").innerHTML = 10;
}

//when the page loads
function showInstructions(){
	getElem("NO_OF_ROUNDS").hidden = true;
	getElem("PLAY_FIELD").hidden = true;
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
}


showInstructions();

showRounds();