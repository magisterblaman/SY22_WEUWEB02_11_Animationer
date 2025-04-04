let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

let startButton = document.getElementById('start-button');
let pauseButton = document.getElementById('pause-button');
let resetButton = document.getElementById('reset-button');

let hours = 0;
let minutes = 0;
let seconds = 0;

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);

let stopwatchIntervalId = -1;

function startStopwatch(event) {
	if (stopwatchIntervalId === -1) {
		stopwatchIntervalId = setInterval(secondPassed, 50);
	}
}

function pauseStopwatch(event) {
	clearInterval(stopwatchIntervalId);
	stopwatchIntervalId = -1;
}

function resetStopwatch(event) {
	hours = 0;
	minutes = 0;
	seconds = 0;

	updateElements();
}

function secondPassed() {
	seconds++;
	if (seconds >= 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes >= 60) {
		hours++;
		minutes = 0;
	}

	updateElements();
}

function updateElements() {
	if (hours < 10) {
		hoursElement.innerText = '0' + hours;
	} else {
		hoursElement.innerText = hours;
	}
	if (minutes < 10) {
		minutesElement.innerText = '0' + minutes;
	} else {
		minutesElement.innerText = minutes;
	}
	if (seconds < 10) {
		secondsElement.innerText = '0' + seconds;
	} else {
		secondsElement.innerText = seconds;
	}
}