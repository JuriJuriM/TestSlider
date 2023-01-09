import './main.scss';
import View from '../../components/View/View';

const slider = document.querySelector('.slider');
const view = new View(slider);

view.update({ from: 50 });
