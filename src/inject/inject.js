var colContainer = document.createElement('div');
colContainer.className = 'ibm-grid-checker__cols';

var rowContainer = document.createElement('div');
rowContainer.className = 'ibm-grid-checker__rows';

function createColUnit(outside = false) {
	var unit = document.createElement("div");
	var className = 'ibm-grid-checker__cols__unit';

	if (outside) {
		className = className + ' ibm-grid-checker__cols__unit--outside'
	}

	unit.className = className;
	return unit;
}

function createRow() {
	var unit = document.createElement("div");
	unit.className = 'ibm-grid-checker__rows__unit';
	return unit;
}

colContainer.appendChild(createColUnit(true));
for(var i = 0; i < 64; i++) {
	colContainer.appendChild(createColUnit());
}
colContainer.appendChild(createColUnit(true));

for(var i = 0; i < 66 * 4; i++) {
	rowContainer.appendChild(createRow());
}

function toggleGrid(e) {
	if (e.ctrlKey && e.keyCode == 71) {
		if (
			!document.body.contains(colContainer) &&
			!document.body.contains(rowContainer)
		) {
			document.body.appendChild(colContainer);
			document.body.appendChild(rowContainer);
		} else if (
			document.body.contains(colContainer) &&
			document.body.contains(rowContainer)
		) {
			rowContainer.remove();
		} else if (
			document.body.contains(colContainer) &&
			!document.body.contains(rowContainer)
		) {
			colContainer.remove();
		}
	}
}

document.addEventListener('keydown', toggleGrid, false);