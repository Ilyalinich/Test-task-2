const galleryItems = document.querySelectorAll('.gallery__item');
const galleryLinks = document.querySelectorAll('.gallery__item .button');

const showInnerLink = (evt) => evt.target.querySelector('.button').classList.remove('visually-hidden');
const hideInnerLink = (evt) => evt.target.querySelector('.button').classList.add('visually-hidden');

const showLink = (evt) => evt.target.classList.remove('visually-hidden');
const hideLink = (evt) => evt.target.classList.add('visually-hidden');


galleryLinks.forEach((link) => {
  link.classList.add('visually-hidden');
  link.addEventListener('focus', showLink);
  link.addEventListener('blur', hideLink);
});

galleryItems.forEach((item) => {
  item.addEventListener('mouseenter', showInnerLink);
  item.addEventListener('mouseleave', hideInnerLink);
});
