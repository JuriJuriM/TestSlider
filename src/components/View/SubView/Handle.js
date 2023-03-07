import Observer from '../../Observer/Observer';

// 1) function convertPixelInPercent:
function convertPixelInPercent(width, value) {
  return (100 / width) * value;
}

class Handle extends Observer {
  constructor(slider) {
    super();
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.subView.style.left = `${from}%`;
    // 2) this.subView.innerHTML:
    this.subView.innerHTML = `${from}`;
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
    // 3)   Закоммитил три строки кода:
    // this.subView.addEventListener('click', () => {
    //   this.emmit({ type: 'click on a handle', payload: 12 });
    // });
    // 4)    Добавил 4 строки кода:
    this.handleLabelMouseDown = this.handleLabelMouseDown.bind(this);
    this.handleWindowMouseMove = this.handleWindowMouseMove.bind(this);
    this.handleWindowMouseUp = this.handleWindowMouseUp.bind(this);
    this.subView.addEventListener('mousedown', this.handleLabelMouseDown);
  }

  // 5) Добавил данный код:
  handleLabelMouseDown(event) {
    console.log('mouseDown');
    window.addEventListener('mousemove', this.handleWindowMouseMove);
  }

  // 6) Добавил данный код:
  handleWindowMouseMove(event) {
    console.log(event.clientX);
    const sliderWidth = this.slider.clientWidth;
    console.log(sliderWidth);
    this.emmit({ type: 'handle', payload: { from: convertPixelInPercent(sliderWidth, event.clientX) } });
    window.addEventListener('mouseup', this.handleWindowMouseUp);
  }

  // 7) Добавил данный код:
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
