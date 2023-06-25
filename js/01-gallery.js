import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
const imageUrl = event.target.parentNode.getAttribute('href');
    const imageAlt = event.target.getAttribute('alt');

    const instance = basicLightbox.create(`
  <img src="${imageUrl}" alt="${imageAlt}" style="width: 90%; height: 90%;  display: block;
  margin: auto;" />
`);

    instance.show();
    const modalImage = instance.element().querySelector('img');
    modalImage.addEventListener('click', () => {
      instance.close();
    });
  }
});


