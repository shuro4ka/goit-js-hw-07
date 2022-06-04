import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMurkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onImageClick);

createGalleryMurkup(galleryItems)

function createGalleryMurkup (galleryItems){
return galleryItems
    .map(({preview, description, original}) => {
    return `
    <a class="gallery__item" 
    href="${original}">
      <img class="gallery__image"
       src="${preview}" 
       alt="${description}" />
    </a>`
    })
    .join('');

}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onImageClick(event) {
  event.preventDefault();
}