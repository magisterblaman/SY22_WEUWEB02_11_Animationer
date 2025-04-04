let box = document.getElementById('box');

let dirX = 1;
let dirY = 1;

box.style.top = '0px';
box.style.left = '0px';

function drawFrame() {
	let oldX = box.offsetLeft;
	let oldY = box.offsetTop;

	let newX = oldX + 5 * dirX;
	let newY = oldY + 5 * dirY;

	box.style.left = newX + 'px';
	box.style.top = newY + 'px';

	if (box.offsetTop + box.clientHeight >= document.body.clientHeight) {
		dirY = -dirY;
	}
	if (box.offsetTop < 0) {
		dirY = -dirY;
	}
	if (box.offsetLeft + box.clientWidth >= document.body.clientWidth) {
		dirX = -dirX;
	}
	if (box.offsetLeft < 0) {
		dirX = -dirX;
	}

	requestAnimationFrame(drawFrame);
}

// setInterval(drawFrame, 50);

requestAnimationFrame(drawFrame);