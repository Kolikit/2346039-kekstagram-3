// eslint-disable-next-line no-unused-vars
import { generateArray } from './data.js';

const photos = generateArray(25);
const fragment = document.createDocumentFragment();
const listElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');

photos.forEach((photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').src = photo.url;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(pictureElement);
});

listElement.appendChild(fragment);
