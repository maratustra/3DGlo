const modal = () => {
  window.addEventListener('resize', () => {
    // let intViewportWidth = window.innerWidth;
    // console.log(`вот это отображается ${intViewportWidth}`);

    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const screenWidth = document.documentElement.clientWidth;
    console.log(`Нет, вот это ${screenWidth}`);

    const modalAppearance = () => {
      modal.classList.toggle('active-popup');
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.style.display = 'block';

        if (screenWidth >= 768) {
          console.log('Я тут!');
          modalAppearance();
        }
      });
    });

    closeBtn.addEventListener('click', modalAppearance);
  });
};


export default modal;