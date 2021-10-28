const modal = () => {
  //window.addEventListener('resize', () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const screenWidth = document.documentElement.clientWidth;
  let opacityCounter = 0;

  modal.style.opacity = 0;

  const getModalOpacityEffect = () => {
    if (opacityCounter < 1) {
      opacityCounter += 0.1;
      setTimeout(getModalOpacityEffect, 100);
    }
    modal.style.opacity = `${opacityCounter}`;
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      getModalOpacityEffect();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.opacity = 0;
  });

  //});
};


export default modal;