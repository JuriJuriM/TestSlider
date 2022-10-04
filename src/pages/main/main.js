import './main.scss';
import Track from '../../components/View/SubView/Track';
import Handle from '../../components/View/SubView/Handle';
import Label from '../../components/View/SubView/Label';

const slider = document.querySelector('.slider');
const track = new Track(slider);
track.update({ from: 80 });
const handle = new Handle(slider);
handle.update({ from: 80 });
const label = new Label(slider);
label.update({ from: 80 });
