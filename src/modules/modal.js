const modal = () => {

  const go = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    let opacityCounter = 0;
    let windowWidth = document.documentElement.clientWidth;


    const getModalOpacityEffect = () => {
      if (opacityCounter < 1) {
        opacityCounter += 0.1;
        setTimeout(getModalOpacityEffect, 100);
      }
      modal.style.opacity = `${opacityCounter}`;
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {

        modal.style.opacity = 0;

        if (windowWidth < 768) {
          modal.style.display = 'block';
        } else {
          modal.style.display = 'block';
          getModalOpacityEffect();
        };
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.style.opacity = 0;
      opacityCounter = 0;
    });

  };

  window.addEventListener('resize', go);
  window.addEventListener('DOMContentLoaded', go);
};


export default modal;