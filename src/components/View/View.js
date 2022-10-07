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
    this.position = document.createElement('div');
    this.position.classList.add('slider');
    this.View.appendChild(this.position);
    this.slider.appendChild(this.View);
  }

  update(data) {
    const { from } = data;
    this.View.style.left = `${from}%`;
  }
}

export default View;
