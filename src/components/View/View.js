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
    // My new metodes 15, 16, 17
    this.byEventListener('click', this.Handle);
    this.byEventListener('click', this.Label);
    this.byEventListener('click', this.Track);
  }

  createSlider() {
    this.track = new Track(this.slider);
    this.label = new Label(this.slider);
    this.handle = new Handle(this.slider);
    this.components.push(this.track);
    this.components.push(this.label);
    this.components.push(this.handle);
  }

  update(data) {
    this.components.forEach((comp) => comp.update(data));
  }
}

export default View;
