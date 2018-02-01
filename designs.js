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

let counter = 0;
let firstID;
let setsMatched = 0;
let moves = 0;
let rating = 3;

$("td").on("click", function() {
	if($(this).children("div").css("display") == "none") {
		if(counter == 0) {
			$(this).children("div").show();
			counter++;
			firstID = $(this).children("div").attr("id");
		}
		else if (counter == 1) {
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
			counter = 0;
		}
		// Figures out if the player has won by matching all 16 cards
		if(setsMatched == 8) {
		}
		// Counts moves made by player
		moves++;
		$("#moves").text(moves);
		// Creates star rating system based on number of moves made
		if (moves <= 20) {
			rating = 3;
		}
		else if(moves <= 32) {
			rating = 2;
			$("#star-3").hide();
		}
		else {
			rating = 1;
			$("#star-2").hide();
		}
	}
});

// Adds timer function and adds current time to HTML

let currSeconds = 0;
let currMinutes = 0;

 setInterval(function(){
 	currSeconds++;
 	if (currSeconds == 59) {
 		currMinutes ++;
 		$("#minutes").text(currMinutes);
 		currSeconds = 0;
 	}
 	$("#seconds").text(currSeconds);
 }, 1000);


