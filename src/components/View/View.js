import Handle from './SubView/Handle';
import Label from './SubView/Label';
import Track from './SubView/Track';

class View {
  constructor(slider, options) {
    console.log(options);
    this.state = options;
    this.slider = slider;
    this.components = [];
    this.init(options);
  }

  setState(data) {
    this.state = Object.assign(this.state, data);
    this.update();
  }

  update(data) {
    this.components.forEach((comp) => comp.update(data));
  }

  onEmmit(action) {
    console.log(action);
    this.update({ from: action.payload.from });
  }

  bindSubscribe() {
    this.components.forEach((comp) => comp.subscribe(this));
  }

  init(options) {
    this.createSlider(options);
    this.bindSubscribe();
  }

  createSlider(options) {
    const { isHasLabels } = options;
    if (isHasLabels) {
      this.label = new Label(this.slider);
      this.components.push(this.label);
    }
    this.track = new Track(this.slider, options);
    this.handle = new Handle(this.slider);
    this.components.push(this.track);
    this.components.push(this.handle);
  }
}

export default View;
