var colContainer = document.createElement('div');
colContainer.className = 'ibm-grid-checker__cols';

var rowContainer = document.createElement('div');
rowContainer.className = 'ibm-grid-checker__rows';

var stateContainer = document.createElement('p');
stateContainer.className = 'ibm-grid-checker__state';

var styleNode = document.createElement ("style");
styleNode.type = "text/css";
styleNode.textContent = "@font-face { font-family: 'ibm-grid-checker-plex'; src: url('https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-light.woff2'); }";
document.head.appendChild (styleNode);

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
			stateContainer.innerHTML = 'Primary<br>Columns + Units';
			document.body.appendChild(stateContainer);
			setTimeout(function(){
				if (stateContainer.innerHTML === 'Primary<br>Columns + Units') {
					stateContainer.remove();
				}
			}, 2000);
		} else if (
			document.body.contains(colContainer) &&
			document.body.contains(rowContainer) &&
			!colContainer.classList.contains('ibm-grid-checker__cols--secondary')
		) {
			colContainer.classList.add('ibm-grid-checker__cols--secondary');
			stateContainer.innerHTML = 'Secondary Columns + Units';
			document.body.appendChild(stateContainer);
			setTimeout(function(){
				if (stateContainer.innerHTML === 'Secondary Columns + Units') {
					stateContainer.remove();
				}
			}, 2000);
		} else if (
			document.body.contains(colContainer) &&
			document.body.contains(rowContainer)
		) {
			colContainer.classList.remove('ibm-grid-checker__cols--secondary');
			rowContainer.remove();
			stateContainer.innerHTML = 'Primary Columns';
			document.body.appendChild(stateContainer);
			setTimeout(function(){
				if (stateContainer.innerHTML === 'Primary Columns') {
					stateContainer.remove();
				}
			}, 2000);
		} else if (
			!colContainer.classList.contains('ibm-grid-checker__cols--secondary')
		) {
			colContainer.classList.add('ibm-grid-checker__cols--secondary');
			stateContainer.innerHTML = 'Secondary Columns';
			document.body.appendChild(stateContainer);
			setTimeout(function(){
				if (stateContainer.innerHTML === 'Secondary Columns') {
					stateContainer.remove();
				}
			}, 2000);
	 	} else if (
			document.body.contains(colContainer) &&
			!document.body.contains(rowContainer)
		) {
			colContainer.classList.remove('ibm-grid-checker__cols--secondary');
			colContainer.remove();
			stateContainer.remove();
		}
	}
}

document.addEventListener('keydown', toggleGrid, false);