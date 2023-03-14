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

  update() {
    this.components.forEach((comp) => comp.setState(this.state));
  }

  onEmmit(action) {
    console.log(action);
    this.setState({ from: action.payload.from });
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
      this.label = new Label(this.slider, options);
      this.components.push(this.label);
    }
    this.track = new Track(this.slider, options);
    this.handle = new Handle(this.slider, options);
    this.components.push(this.track);
    this.components.push(this.handle);
  }
}

export default View;
