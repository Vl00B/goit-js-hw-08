import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

//

const gallery = document.querySelector('.gallery');

const arrayOfItems = [];

for (const item of galleryItems) {
  const galleryItem = document.createElement('a');
  galleryItem.classList.add('gallery__item');
  galleryItem.setAttribute('href', item.original);
  galleryItem.innerHTML = `
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  `;
  arrayOfItems.push(galleryItem);
}

gallery.append(...arrayOfItems);

const lightbox = new SimpleLightbox('.gallery a', {});
