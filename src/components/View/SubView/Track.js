class Track {
  constructor(slider: HTMLElement) {
    super(slider);
    this.init();
  }
}

protected createSubView() {
  this.subView = document.createElement('div');
  this.subView.classList.add('slider__track');
  this.progress = document.createElement('div');
  this.subView.classList.add('slider__progress');
  this.subView.appendChild(this.progress);
  this.slider.appendChild(this.subView);
}

protected init() {
  this.createSubView();
  this.registerEvent('updateSubView');
  this.bindEventListener();
}

protected update() {
  const {
    min, max, from, to, horisontal, range, progress
  } = this.state;
}