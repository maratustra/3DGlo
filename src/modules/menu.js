const menu = () => {
  const menu = document.querySelector('menu');
  const scrollBtn = document.querySelector("a[href='#service-block']");
  const body = document.querySelector('body');


  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const smoothScrollMenu = (blockID) => {
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  body.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.closest('.menu')) {
      handleMenu();
    } else if (e.target.matches(".close-btn")) {
      handleMenu(e.target);
    } else if (e.target.matches('menu a')) {
      handleMenu(e.target);
      e.preventDefault();

      const blockID = e.target.getAttribute('href').substr(1);
      smoothScrollMenu(blockID);
    } else {
      menu.classList.toggle('active-menu');
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = e.target.parentNode.getAttribute('href').substr(1);
    smoothScrollMenu(blockID);
  });
};

export default menu;