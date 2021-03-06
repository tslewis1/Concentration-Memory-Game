$("body").on("load", makeGrid());

// Creates the grid that will show up each time the page is loaded. Also adds counter to assign ids to each td.

function makeGrid() {

	const width = 4;
	const height = 4;
	let id = 0;

	for (i = 1; i <= width; i++) {
		$("#card-table").append("<tr></tr>");
		for (j = 1; j <= height; j++) {
			id++;
			$("#card-table").children("tr").last().append("<td><div id = " + id + " class = 'cards'></div></td>");
		}
	}
}

// Shuffles the values of an array

Array.prototype.shuffle = function() {

	let input = this;

	for (let i = input.length-1; i>=0; i--) {

		let randomIndex = Math.floor(Math.random()*(i+1));
		let itemAtIndex = input[randomIndex];

		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}

	return input;
}

// Adds classes randomly to set ids based on shuffled array.

let shuffleNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
shuffleNums.shuffle();

let letterClasses = [ "A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H" ];

for (i = 0; i < 16; i++) {
	let id = shuffleNums [i];
	let cardClass = letterClasses [i];
	$("#" + id).addClass(cardClass);
};

// Reveals image side of the card and the creates matching logic. Figures out if cards do or don't match based on id and classes.

let sidesCounter = 0;
let firstID;
let setsMatched = 0;
let moves = 0;
let rating = 3;
let currSeconds = 0;
let currMinutes = 0;
let timer;

$("td").on("click", function() {
	if($(this).children("div").css("display") == "none") {
		if(sidesCounter == 0) {
			$(this).children("div").show();
			sidesCounter++;
			firstID = $(this).children("div").attr("id");
		}
		else if (sidesCounter == 1) {
			$(this).children("div").show();
			let currID = $(this).children("div").attr("id");
			if ($("#" + firstID).attr("class") != $("#" + currID).attr("class")) {
				setTimeout (function() { 
					$("#" + currID).hide();
					$("#" + firstID).hide();
				}, 500);
			}
			else {
				setsMatched++;
			}
			sidesCounter = 0;
		}
		// Figures out if the player has won by matching all 16 cards
		if(setsMatched == 8) {
			// When all sets match, the timer stops and a modal pops up with how much time the game took and how many moves, and asks if the player wants to play again.
			$("#endSeconds").text(currSeconds);
			$("#endMinutes").text(currMinutes);
			$("#endMoves").text(moves);
			$("#congratulationsModal").show();
			clearInterval(timer);
		}
		// Counts moves made by player
		moves++;

// Adds timer function and adds current time to HTML

		if (moves == 1) {
			timer = setInterval(function(){
 				currSeconds++;
 				if (currSeconds == 59) {
 					currMinutes ++;
 					$("#minutes").text(currMinutes);
 					currSeconds = 0;
 				}
 				$("#seconds").text(currSeconds);
 			}, 1000);
		}

		$("#moves").text(moves);
		// Creates star rating system based on number of moves made
		if (moves <= 30) {
			rating = 3;
		}
		else if(moves <= 40) {
			rating = 2;
			$("#star-3").hide();
		}
		else {
			rating = 1;
			$("#star-2").hide();
		}
	}
});


// Adds reset button to start game over

$("#reset").on("click", function() {
	document.location.reload(true);
});

// If player wants to play again, yes button resets the game and no button closes the modal

$("#yes").on("click", function() {
	document.location.reload(true);
});

$("#no").on("click", function () {
	$("#congratulationsModal").hide();
})
