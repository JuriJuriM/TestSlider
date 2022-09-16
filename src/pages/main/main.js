import './main.scss';

const sliderSlider = document.querySelector('.slider__slider');
const sliderNum = document.querySelector('.slider__num');
sliderSlider.oninput = function () {
    sliderNum.innerHTML = this.value;
}