$("body").on("load", makeGrid());

// Creates the grid that will show up each time the page is loaded.

function makeGrid() {

	const width = 4;
	const height = 4;

	for (i = 1; i <= width; i++) {
		$("#card-table").append("<tr></tr>");
		for (j = 1; j <= height; j++) {
			$("#card-table").children("tr").last().append("<td><div><img></div></td>");
		}
	}

}

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

var shuffleNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
shuffleNums.shuffle();

alert(shuffleNums);