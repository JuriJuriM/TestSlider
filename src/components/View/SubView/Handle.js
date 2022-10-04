class Handle {
  constructor(slider) {
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

  init() {
    this.createSubView();
  }
}

export default Handle;
