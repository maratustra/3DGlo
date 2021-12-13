import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validationForms from './modules/validation_forms';
import calculator from './modules/calculator';
import sliderSwiper from './modules/sliderSwiper';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/send_form';


timer('29 december 2021');
menu();
validationForms();
modal();
calculator(110);
sliderSwiper();
tabs();
slider({
  sliderBlockClass: 'portfolio-content',
  slidesClass: 'portfolio-item',
  slideActiveClass: 'portfolio-item-active',
  sliderButtonsClass: 'portfolio-btn',
  arrowLeftClass: 'prev',
  arrowRightClass: 'next',
  dotsContainerClass: 'portfolio-dots',
  dotClass: 'dot',
  dotActiveClass: 'dot-active',
});
sendForm({
  form: 'form',
  someElem: [
    {
      type: 'block',
      id: 'total',
    }
  ],
});

