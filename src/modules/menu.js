const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const scrollBtn = document.querySelector("a[href='#service-block']");


  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const smoothScrollMenu = (blockID) => {
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  menu.addEventListener('click', (e) => {
    if (e.target.className === "close-btn") {
      handleMenu(e.target);
    } else if (e.target.tagName === "A") {
      handleMenu(e.target);
      e.preventDefault();

      const blockID = e.target.getAttribute('href').substr(1);
      smoothScrollMenu(blockID);
    }
  });

  menuBtn.addEventListener('click', handleMenu);

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = e.target.parentNode.getAttribute('href').substr(1);
    smoothScrollMenu(blockID);
  });
};

export default menu;