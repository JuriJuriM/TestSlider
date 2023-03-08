import Observer from '../../Observer/Observer';

// 1) function convertPixelInPercent:
function convertPixelInPercent(width, value) {
  return (100 / width) * value;
}
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
    // 2)    Оставил данную строку кода:
    this.handleWindowMouseMove = this.handleWindowMouseMove.bind(this);
    // 3) И оставил данную строку кода:
    this.subView.addEventListener('mousedown', this.handleWindowMouseMove);
  }

  // 5) Добавил данный код:
  handleWindowMouseMove(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    this.emmit({ type: 'track', payload: { from: convertPixelInPercent(sliderWidth, event.clientX) } });
    window.addEventListener('mouseup', this.handleWindowMouseUp);
  }

  // 6) Добавил данный код:
  handleWindowMouseUp() {
    console.log('mouseUp');
    window.removeEventListener('mousemove', this.handleWindowMouseMove);
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }
}

export default Track;
