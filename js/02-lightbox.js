import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsMarkup);

document.addEventListener('DOMContentLoaded', function () {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom',
  });
});
