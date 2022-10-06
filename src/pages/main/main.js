import './main.scss';
import Track from '../../components/View/SubView/Track';
import Handle from '../../components/View/SubView/Handle';
import Label from '../../components/View/SubView/Label';
import View from '../../components/View/View';

// const slider = document.querySelector('.slider');
// const track = new Track(slider);
// track.update({ from: 80 });
// const handle = new Handle(slider);
// handle.update({ from: 80 });
// const label = new Label(slider);
// label.update({ from: 80 });

const slider = document.querySelector('.slider');
const components = [];
const handle = new Handle(slider);
const track = new Track(slider);
const label = new Label(slider);
components.push(handle);
components.push(track);
components.push(label);

const update = (data) => {
  components.forEach((comp) => comp.update(data));
};

update({ from: 50 });
