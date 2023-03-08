import Observer from '../../Observer/Observer';

import convertPixelInPercent from '../../../Utilites/Converters/Converters';

// function convertPixelInPercent(width, value) {
//   return (100 / width) * value;
// }

class Label extends Observer {
  constructor(slider) {
    super();
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.subView.innerHTML = `${from}`;
    this.subView.style.left = `${from}%`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__label');
    this.slider.appendChild(this.subView);
  }

  bindListeners() {
    this.handleLabelMouseDown = this.handleLabelMouseDown.bind(this);
    this.handleWindowMouseMove = this.handleWindowMouseMove.bind(this);
    this.handleWindowMouseUp = this.handleWindowMouseUp.bind(this);
    this.subView.addEventListener('mousedown', this.handleLabelMouseDown);
  }

  handleLabelMouseDown(event) {
    console.log('mouseDown');
    window.addEventListener('mousemove', this.handleWindowMouseMove);
  }

  handleWindowMouseMove(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    // Исправил для лэйбла from: и т.д.
    this.emmit({ type: 'lable', payload: { from: convertPixelInPercent(sliderWidth, event.clientX) } });
    window.addEventListener('mouseup', this.handleWindowMouseUp);
  }

  handleWindowMouseUp() {
    console.log('mouseUp');
    window.removeEventListener('mousemove', this.handleWindowMouseMove);
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }
}

export default Label;
