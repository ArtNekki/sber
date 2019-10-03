import renderCircleChart from './CircleChart';


const data = [
  {
    name: 'аналоги со средней ценой 36 000 ₽ / м²',
    value: 100
  },
  {
    name: 'аналоги со средней ценой 25 000 ₽ / м²',
    value: 65
  },
  {
    name: 'аналоги со средней ценой 45 000 ₽ / м²',
    value: 87
  },
  {
    name: 'аналоги со средней ценой 15 000 ₽ / м²',
    value: 21
  }
]


document.addEventListener('DOMContentLoaded', function() {
  renderCircleChart(data);
});
