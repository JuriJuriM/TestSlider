import Handle from './SubView/Handle';
import Label from './SubView/Label';
import Track from './SubView/Track';

class View {
  // Добавляю options в параметры:
  constructor(slider, options) {
    // Добавляю console.log:
    console.log(options);
    this.slider = slider;
    this.components = [];
    // Добавляю options в скобки:
    this.init(options);
  }

  onEmmit(action) {
    console.log(action);
    this.update({ from: action.payload.from });
  }

  bindSubscribe() {
    this.components.forEach((comp) => comp.subscribe(this));
  }

  // Добавляю options в скобки:
  init(options) {
    // И здесь добавляю options в скобки:
    this.createSlider(options);
    this.bindSubscribe();
  }

  // И снова добавляю options в скобки:
  createSlider(options) {
    // А здесь пишу следующую строку, добавляя переменную:
    const { from, isHasLabels } = options;
    if (isHasLabels === true) {
      this.label = new Label(this.slider);
      this.components.push(this.label);
    }
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
