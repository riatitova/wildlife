/* eslint-disable arrow-parens */
import 'normalize.css';
import './style.scss';

let index = 0;

function displaySlides(direction) {
  const slides = document.querySelectorAll('.slider__slide'); // 6
  const left = -1;
  const right = 1;

  if (direction === right) {
    if (index === slides.length - 3) {
      index = 0;
    }
    slides[index].classList.toggle('slider__slide_hidden');
    slides[index].classList.toggle('slider__slide_visible');

    slides[index + 3].classList.toggle('slider__slide_hidden');
    slides[index + 3].classList.toggle('slider__slide_visible');

    index += 1;
  }
}

function setHandlers() {
  const leftArrow = document.querySelector('.slider__left-arrow');
  const rightArrow = document.querySelector('.slider__right-arrow');

  const leftArrowClick = event => {
    const isLeftArrow = event.target.closest('.slider__left-arrow') !== null;
    if (isLeftArrow) {
      displaySlides(-1);
    }
  };

  const rightArrowClick = event => {
    const isRightArrow = event.target.closest('.slider__right-arrow') !== null;
    if (isRightArrow) {
      displaySlides(1);
    }
  };

  leftArrow.addEventListener('click', leftArrowClick);
  rightArrow.addEventListener('click', rightArrowClick);
}

setHandlers();
