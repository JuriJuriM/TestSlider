class View {
  constructor(slider) {
    this.slider = slider;
    this.components = [];
    this.init();
  }

  init() {
    this.View();
  }

  createSlider() {
    this.View = document.createElement('div');
    this.View.classList.add('slider');
    this.components = document.createElement('div');
    this.components.classList.add('slider');
    this.View.appendChild(this.components);
    this.slider.appendChild(this.View);
  }

  update(data) {
    const { from } = data;
    this.View.style.components = `${from}%`;
  }
}

export default View;
