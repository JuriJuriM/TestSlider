import './main.scss';
import Track from '../../components/View/SubView/Track';

const slider = document.querySelector('.slider');
const track = new Track(slider);
track.update({ from: 50 });
