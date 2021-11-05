import { animate } from './helpers';

const modal = () => {

  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');


  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      modal.style.opacity = 0;

      if (document.documentElement.clientWidth < 768) {
        modal.style.display = 'block';
        modal.style.opacity = 1;
      } else {
        modal.style.display = 'block';
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            if (+modal.style.opacity < 1) {
              modal.style.opacity = progress;
            }
          }
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
      modal.style.opacity = 0;
    }
  });
};


export default modal;