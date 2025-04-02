let scrollingGallery = document.querySelector('.scrolling-gallery');

scrollingGallery.addEventListener('click', toggleGalleryPlaying);

function toggleGalleryPlaying(event) {
	scrollingGallery.classList.toggle('paused');
}