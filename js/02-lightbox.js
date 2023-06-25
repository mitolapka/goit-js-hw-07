import { galleryItems } from './gallery-items.js';


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

  link.innerHTML = `<img class="gallery__image" src="${item.preview}" alt="${item.description}">`;
  galleryItem.appendChild(link);

  return galleryItem;
}


const galleryItemsMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsMarkup);

const lightboxScript = document.createElement('script');
lightboxScript.src = 'https://cdn.jsdelivr.net/npm/simplelightbox@2.7.0/dist/simple-lightbox.min.js';
document.body.appendChild(lightboxScript);

lightboxScript.addEventListener('load', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom',
    animationSpeed: 250,
  });
});
