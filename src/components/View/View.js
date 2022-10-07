import Handle from './SubView/Handle';
import Label from './SubView/Label';
import Track from './SubView/Track';

class View {
  constructor(slider) {
    this.slider = slider;
    this.components = [];
    this.init();
  }

  init() {
    this.createSlider();
  }

  createSlider() {
    this.track = new Track(this.slider);
    this.label = new Label(this.slider);
    this.handle = new Handle(this.slider);
  }

  update(data) {
    // const { from } = data;
    // this.View.style.components = `${from}%`;
    this.components.forEach((comp) => comp.update(data));
  }
}

export default View;
