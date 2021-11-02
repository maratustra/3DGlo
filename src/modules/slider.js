const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsContainer = document.querySelector('.portfolio-dots');
  const timeInterval = 4000;
  const dots = [];

  let currentSlide = 0;
  let interval;


  const addSliderDots = () => {

    slides.forEach((elem, index) => {
      let dot = document.createElement('li');
      if (index === 0) dot.classList.add('dot', 'dot-active');
      else dot.classList.add('dot');
      dotsContainer.append(dot);

      dots.push(dot);
    });
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) currentSlide = 0;

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => clearInterval(interval);


  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) return;

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) currentSlide++;
    if (e.target.matches('#arrow-left')) currentSlide--;
    if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) currentSlide = index;
      });
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;


    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval);
    }
  }, true);

  startSlide(timeInterval);
  addSliderDots();
};

export default slider;