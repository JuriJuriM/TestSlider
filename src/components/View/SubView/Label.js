import Observer from '../../Observer/Observer';

import convertPixelInPercent from '../../../Utilites/Converters/Converters';

class Label extends Observer {
  constructor(slider, options) {
    super();
    this.state = options;
    this.slider = slider;
    this.init();
  }

  setState(data) {
    this.state = Object.assign(this.state, data);
    this.update();
  }

  update() {
    const { from } = this.state;
    // const { from } = data;
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

  handleLabelMouseDown() {
    console.log('mouseDown');
    window.addEventListener('mousemove', this.handleWindowMouseMove);
  }

  handleWindowMouseMove(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    this.emmit({
      type: 'lable',
      payload: { from: convertPixelInPercent(sliderWidth, event.clientX) },
    });
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
