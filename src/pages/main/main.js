import './main.scss';

const sliderSlider = document.querySelector('.slider__slider');
const sliderNum = document.querySelector('.slider__num');

const callBack = (e) => {
  sliderNum.innerHTML = e.target.value;
};
sliderSlider.addEventListener('input', callBack);
