class Handle {
  constructor(slider) {
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.progress.style.width = `${from}%`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__handle');
    this.progress = document.createElement('div');
    this.progress.classList.add('slider__progress');
    this.subView.appendChild(this.progress);
    this.slider.appendChild(this.subView);
  }

  init() {
    this.createSubView();
  }
}

export default Handle;
