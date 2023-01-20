import Observer from '../../Observer/Observer';

class Track extends Observer {
  constructor(slider) {
    super();
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

  bindListeners() {
    this.subView.addEventListener('click', () => {
      this.emmit({ type: 'click on a track', payload: 1 });
    });
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }

  update(data) {
    const { from } = data;
    this.progress.style.width = `${from}%`;
  }
}

export default Track;
