let floatsChildren = document.querySelectorAll('.floats > *');

window.addEventListener('scroll', floatInElements);

function floatInElements(event) {
	for (let i = 0; i < floatsChildren.length; i++) {
		let rect = floatsChildren[i].getBoundingClientRect();
		// console.log(rect);
		if (rect.bottom <= window.innerHeight + 8) {
			floatsChildren[i].classList.add('floated');
		}
	}
}