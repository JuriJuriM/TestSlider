import './main.scss';

let sliderSlider = document.querySelector('.slider__slider');
let sliderNum = document.querySelector('.slider__num');
sliderSlider.oninput = function () {
    sliderNum.innerHTML = this.value;
}