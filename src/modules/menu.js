const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
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

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      handleMenu();
      e.preventDefault();

      const blockID = e.target.getAttribute('href').substr(1);
      smoothScrollMenu(blockID);
    });
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = e.target.parentNode.getAttribute('href').substr(1);
    smoothScrollMenu(blockID);
  });
};

export default menu;