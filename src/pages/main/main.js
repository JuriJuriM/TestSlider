import './main.scss';
import View from '../../components/View/View';

const slider = document.querySelector('.slider');
// Изменяю данную строку:
// const view = new View(slider);
// На такую:
const view = new View(slider, {
  from: '70',
  isHasLabels: true,
  isHasProgress: false,
});

view.update({ from: 70 });
