import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMurkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onImageClick);

console.log(createGalleryMurkup(galleryItems));

function createGalleryMurkup (galleryItems){
return galleryItems
    .map(({preview, description, original}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div>`
    })
    .join('');

}

function onImageClick(event){
    event.preventDefault();
    if(event.target.nodeMode !== "IMG") {
        return;
    }
    console.log(event.target);
}
