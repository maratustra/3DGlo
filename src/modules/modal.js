const modal = () => {

  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  const getModalOpacityEffect = () => {
    if (+modal.style.opacity < 1) {
      modal.style.opacity = Number(modal.style.opacity) + 0.1;
      setTimeout(getModalOpacityEffect, 100);
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      modal.style.opacity = 0;

      if (document.documentElement.clientWidth < 768) {
        modal.style.display = 'block';
        modal.style.opacity = 1;
      } else {
        modal.style.display = 'block';
        getModalOpacityEffect();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.opacity = 0;
  });
};


export default modal;