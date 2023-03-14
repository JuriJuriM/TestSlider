import './main.scss';
import View from '../../components/View/View';

const slider = document.querySelector('.slider');
const view = new View(slider, {
  from: '70',
  isHasLabels: true,
  isHasProgress: true,
});

// view.update({ from: 70 });

view.setState({ from: 70 });
