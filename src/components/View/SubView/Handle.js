import Observer from '../../Observer/Observer';

import convertPixelInPercent from '../../../Utilites/Converters/Converters';

class Handle extends Observer {
  constructor(slider) {
    super();
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.subView.style.left = `${from}%`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__handle');
    this.position = document.createElement('div');
    this.position.classList.add('slider__slider');
    this.subView.appendChild(this.position);
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
      type: 'handle',
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

export default Handle;
