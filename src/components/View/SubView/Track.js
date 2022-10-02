class Track {
  constructor(slider) {
    this.slider = slider;
    this.init();
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__track');
    this.progress = document.createElement('div');
    this.progress.classList.add('slider__progress');
    this.subView.appendChild(this.progress);
    this.slider.appendChild(this.subView);
  }

  init() {
    this.createSubView();
  }

  update(data) {
    const { from } = data;
    this.progress.style.width = `${from}%`;
  }
}

export default Track;
