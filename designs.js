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
			$("#card-table").children("tr").last().append("<td><div id = " + id + "><img></div></td>");
		}
	}
}

// This function shuffles the shuffleNums array to generate a random string that will be assigned to cards at random
Array.prototype.shuffle = function() {

	var input = this;

	for (var i = input.length-1; i>=0; i--) {

		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = input[randomIndex];

		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}

	return input;
}

var shuffleNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
shuffleNums.shuffle();

var letterClasses = [ "A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H" ];

// For loop that adds classes randomly to set ids based on shuffled array.

for (i = 0; i < 16; i++) {
	var id = shuffleNums [i];
	var cardClass = letterClasses [i];
	$("#" + id).addClass(cardClass);
};
	
alert(shuffleNums);