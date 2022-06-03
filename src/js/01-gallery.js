import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGallery(numberOfItems) {
    const items = [];
    for(let i = 0; i < numberOfItems; i++) {
        const item = document.createElement("listItem");
        items.push(item);
    }
    gallery.append(...items);
}
console.log(items);
