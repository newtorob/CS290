//Robert Newton
//05-07-17

function buildTable() {
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var headRow = document.createElement("tr");
	for(var i = 1; i<5; i++) {
		var cell = document.createElement("th");
		var cellText = document.createTextNode("Header " + i);
		cell.appendChild(cellText);
		headRow.appendChild(cell);
		cell.style.border = "1px solid black";
	}
	tblBody.appendChild(headRow);
	
	for(var i = 1; i<5; i++) {
		var row = document.createElement("tr");
		for(var j = 1; j<5; j++) {
			var cell = document.createElement("td");
			var cellText = document.createTextNode(i + ", " + j);
			cell.appendChild(cellText);
			row.appendChild(cell);
			cell.style.border = "1px solid black";
		}
		tblBody.appendChild(row);
	}
	
	tbl.appendChild(tblBody);
	document.body.appendChild(tbl);
	return tbl;
}

 var newTable = buildTable();
 newTable.style.border = "1px solid black";
newTable.style.marginBottom = "10px";
//Set top left cell as initially selected cell
var initialCell = newTable.rows[1].cells[0];
initialCell.style.border = "4px solid black";
initialCell.id = "selectedCell";
 
 var dirButtons = document.createElement("div");
 for(var i = 0; i <4; i++){
	 var newButton = document.createElement("button")
	 if(i == 0) {
		 newButton.textContent = "UP";
		 newButton.id = "upButton";
	 }
	 if(i == 1) {
		 newButton.textContent = "DOWN";
		 newButton.id = "downButton";
	 }
	 if(i == 2) {
		 newButton.textContent = "LEFT";
		 newButton.id = "leftButton";
	 }
	 if(i == 3) {
		 newButton.textContent = "RIGHT";
		 newButton.id = "rightButton";
	 }
	 dirButtons.appendChild(newButton);
 }

document.body.appendChild(dirButtons);
document.body.appendChild(document.createTextNode(" "));

var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";
markButton.style.marginTop = "20px";
markButton.id = "markButton";
document.body.appendChild(markButton);


function moveUp(){
	var current = document.getElementById("selectedCell");
	var arr = current.textContent.split(",");
	console.log(arr);
	var x = Number(arr[0]);
	var y = Number(arr[1]);
	console.log(x,y);
	if(x > 1) {
		var nextCell = newTable.rows[x-1].cells[y-1];
		nextCell.style.border = "4px solid black";
		current.style.border = "1px solid black";
		nextCell.id = "selectedCell";
		current.id = " ";
	}
	else return;
}

function moveDown(){
	var current = document.getElementById("selectedCell");
	var arr = current.textContent.split(",");
	console.log(arr);
	var x = Number(arr[0]);
	var y = Number(arr[1]);
	if(x < 4) {
		var nextCell = newTable.rows[x+1].cells[y-1];
		console.log(x,y);
		nextCell.style.border = "4px solid black";
		current.style.border = "1px solid black";
		nextCell.id = "selectedCell";
		current.id = " ";
	}
	else return;
}

function moveLeft(){
	var current = document.getElementById("selectedCell");
	var arr = current.textContent.split(",");
	console.log(arr);
	var x = Number(arr[0]);
	var y = Number(arr[1]);
	if(y > 1) {
		var nextCell = newTable.rows[x].cells[y-2];
		console.log(x,y);
		nextCell.style.border = "4px solid black";
		current.style.border = "1px solid black";
		nextCell.id = "selectedCell";
		current.id = " ";
	}
	else return;
}

function moveRight(){
	var current = document.getElementById("selectedCell");
	var arr = current.textContent.split(",");
	console.log(arr);
	var x = Number(arr[0]);
	var y = Number(arr[1]);
	if(y < 4) {
		var nextCell = newTable.rows[x].cells[y];
		console.log(x,y);
		nextCell.style.border = "4px solid black";
		current.style.border = "1px solid black";
		nextCell.id = "selectedCell";
		current.id = " ";
	}
	else return;
}

function markYellow() {
	var current = document.getElementById("selectedCell");
	current.style.backgroundColor = "yellow";
	
}
document.getElementById("downButton").addEventListener("click", moveDown);

document.getElementById("upButton").addEventListener("click", moveUp);

document.getElementById("leftButton").addEventListener("click", moveLeft);

document.getElementById("rightButton").addEventListener("click", moveRight);

document.getElementById("markButton").addEventListener("click", markYellow);