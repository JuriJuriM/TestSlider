import Observer from '../../Observer/Observer';

import convertPixelInPercent from '../../../Utilites/Converters/Converters';

class Track extends Observer {
  constructor(slider) {
    super();
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.progress.style.width = `${from}%`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__track');
    this.progress = document.createElement('div');
    this.progress.classList.add('slider__progress');
    this.subView.appendChild(this.progress);
    this.slider.appendChild(this.subView);
  }

  bindListeners() {
    this.handleWindowMouseMove = this.handleWindowMouseMove.bind(this);
    this.subView.addEventListener('mousedown', this.handleWindowMouseMove);
  }

  handleWindowMouseMove(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    this.emmit({
      type: 'track',
      payload: { from: convertPixelInPercent(sliderWidth, event.clientX) },
    });
    // 6) Закоммитил данную строку кода за ненадобностью:
    // window.addEventListener('mouseup', this.handleWindowMouseUp);
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }
}

export default Track;
