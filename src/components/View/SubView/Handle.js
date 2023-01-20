import Observer from '../../Observer/Observer';

class Handle extends Observer {
  constructor(slider) {
    super();
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

  bindListeners() {
    this.subView.addEventListener('click', () => {
      this.emmit({ type: 'click on a handle', payload: 12 });
    });
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }
}

export default Handle;
