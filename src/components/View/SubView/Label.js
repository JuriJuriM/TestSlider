import Observer from '../../Observer/Observer';

class Label extends Observer {
  constructor(slider) {
    super();
    this.slider = slider;
    this.init();
  }

  update(data) {
    const { from } = data;
    this.subView.innerHTML = `${from}`;
    this.subView.style.left = `${from}%`;
  }

  createSubView() {
    this.subView = document.createElement('div');
    this.subView.classList.add('slider__label');
    this.slider.appendChild(this.subView);
  }

  bindListeners() {
    this.subView.addEventListener('click', () => {
      this.emmit({ type: 'click on a label', payload: 1 });
    });
  }

  init() {
    this.createSubView();
    this.bindListeners();
  }
}

export default Label;
