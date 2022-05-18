// Pick a color
let elcolor = document.getElementById('colorPicker');
elcolor.addEventListener('input', function() {});

// Select size input// myTable.innerHTML = "" clears any existing table//
let myTable = document.getElementById('pixelCanvas');
let sPicker = document.getElementById('sizePicker');
sPicker.addEventListener('submit', function(event) {
	let horizontal = document.querySelector('#inputHeight').value;
	let vertical = document.querySelector('#inputWidth').value;
	event.preventDefault();
	myTable.innerHTML = "";
	makeGrid(horizontal, vertical);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(horizontal, vertical) {
	for (var i = 0; i <= horizontal - 1; i++) {
		var myRow = myTable.insertRow();
		for (var j = 0; j <= vertical - 1; j++) {
			myRow.insertCell();
		}
	}
};

// Color the background of the block on click.
myTable.addEventListener('click', (event) => {
			event.target.style.backgroundColor = elcolor.value;
		}
