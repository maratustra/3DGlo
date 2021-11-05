import { animate } from './helpers';

const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const totalContainer = document.getElementById('total');


  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          totalContainer.textContent = Math.ceil(totalValue * progress);
        }
      });
    } else {
      totalValue = 0;
      totalContainer.textContent = totalValue;
    }
  };


  calcBlock.addEventListener('change', (e) => {
    if (/[^\d\.]$/g.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^\d\.]+$/g, "");
    }

    countCalc();
  });

};

export default calculator;