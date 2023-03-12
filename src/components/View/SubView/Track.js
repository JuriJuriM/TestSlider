import Observer from '../../Observer/Observer';

import convertPixelInPercent from '../../../Utilites/Converters/Converters';

class Track extends Observer {
  constructor(slider, options) {
    super();
    this.slider = slider;
    this.isHasProgress = options.isHasProgress;
    this.init(options);
  }

  init(options) {
    this.createSubView(options);
    this.bindListeners();
  }

  createSubView(options) {
    const { isHasProgress } = options;
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__track');
    if (isHasProgress === true) {
      this.progress = document.createElement('div');
      this.progress.classList.add('slider__progress');
      this.subView.appendChild(this.progress);
    }
    this.slider.appendChild(this.subView);
  }

  bindListeners() {
    this.handleTrackMouseDown = this.handleTrackMouseDown.bind(this);
    this.subView.addEventListener('mousedown', this.handleTrackMouseDown);
  }

  handleTrackMouseDown(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    this.emmit({
      type: 'track',
      payload: { from: convertPixelInPercent(sliderWidth, event.clientX) },
    });
  }

  update(data) {
    if (this.isHasProgress) {
      const { from } = data;
      this.progress.style.width = `${from}%`;
    }
  }
}

export default Track;
