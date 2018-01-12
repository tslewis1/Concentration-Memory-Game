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