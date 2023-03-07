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
    // 2) Закоммитил три строки кода:
    // this.subView.addEventListener('click', () => {
    //   this.emmit({ type: 'click on a track', payload: 1 });
    // });
    // 3)    Добавил 4 строки кода:
    this.handleLabelMouseDown = this.handleLabelMouseDown.bind(this);
    this.handleWindowMouseMove = this.handleWindowMouseMove.bind(this);
    this.handleWindowMouseUp = this.handleWindowMouseUp.bind(this);
    // 7) Закоммитил данную строку:
    // this.subView.addEventListener('mousedown', this.handleLabelMouseDown);
    // 8) А вместо неё записал такую:
    this.progress.addEventListener('mousedown', this.handleLabelMouseDown);
    this.subView.addEventListener('mousedown', this.handleWindowMouseMove);
  }

  // 4) Добавил данный код:
  handleLabelMouseDown(event) {
    console.log('mouseDown');
    window.addEventListener('mousemove', this.handleWindowMouseMove);
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
