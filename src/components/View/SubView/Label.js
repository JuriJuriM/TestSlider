class Label {
  constructor(slider) {
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.progress.style.innerHTML = `${from}number`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__label');
    this.progress = document.createElement('div');
    this.progress.classList.add('slider__slider');
    this.subView.appendChild(this.progress);
    this.slider.appendChild(this.subView);
  }

  init() {
    this.createSubView();
  }
}

export default Label;
