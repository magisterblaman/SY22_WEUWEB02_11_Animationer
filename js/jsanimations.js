let myButton = document.getElementById('my-button');
let undoButton = document.getElementById('undo-button');

myButton.addEventListener('click', buttonClick);
undoButton.addEventListener('click', undoClick);

let timeoutId = -1;

function buttonClick(event) {
	if (timeoutId === -1) {
		timeoutId = setTimeout(addHejElementToBody, 5000);
	}
	// addElementToBody();
}

function undoClick(event) {
	clearTimeout(timeoutId);
	timeoutId = -1;
}

function addHejElementToBody() {
	let newElement = document.createElement('p');
	newElement.innerText = 'Hej';
	document.body.appendChild(newElement);

	timeoutId = -1;
}

let counter = 0;

function count() {
	let newElement = document.createElement('p');
	newElement.innerText = counter;
	counter++;
	document.body.appendChild(newElement);

	if (counter > 10) {
		clearInterval(intervalId);
	}
}

// let intervalId = setInterval(count, 1000);

function countWithTimeout() {
	let newElement = document.createElement('p');
	newElement.innerText = counter;
	counter++;
	document.body.appendChild(newElement);

	if (counter <= 10) {
		setTimeout(countWithTimeout, 1000);
	}
}

setTimeout(countWithTimeout, 1000);

// countWithTimeout();