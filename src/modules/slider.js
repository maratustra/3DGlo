const slider = ({
  sliderBlockClass,
  slidesClass,
  slideActiveClass = 'portfolio-item-active',
  sliderButtonsClass,
  arrowLeftClass,
  arrowRightClass,
  dotsContainerClass,
  dotClass,
  dotActiveClass = 'dot-active' } = {}) => {

  if (sliderBlockClass == null || document.querySelector('.' + sliderBlockClass) == null) return;
  if (slidesClass == null || document.querySelector('.' + slidesClass) == null) return;
  if (slideActiveClass == null || document.querySelector('.' + slideActiveClass) == null) return;
  if (sliderButtonsClass == null || document.querySelector('.' + sliderButtonsClass) == null) return;
  if (arrowLeftClass == null || document.querySelector('.' + arrowLeftClass) == null) return;
  if (arrowRightClass == null || document.querySelector('.' + arrowRightClass) == null) return;
  if (dotsContainerClass == null || document.querySelector('.' + dotsContainerClass) == null) return;
  if (dotClass == null) return;
  if (dotActiveClass == null) return;


  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
  const slides = document.querySelectorAll(`.${slidesClass}`);
  const dotsContainer = document.querySelector(`.${dotsContainerClass}`);
  const timeInterval = 4000;
  const dots = [];

  let currentSlide = 0;
  let interval;


  const addSliderDots = () => {
    slides.forEach((elem, index) => {
      let dot = document.createElement('li');
      if (index === 0) dot.classList.add(dotClass, dotActiveClass);
      else dot.classList.add(dotClass);
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
    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActiveClass);
    currentSlide++;

    if (currentSlide >= slides.length) currentSlide = 0;

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActiveClass);
  };

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => clearInterval(interval);


  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(`.${dotClass}, .${sliderButtonsClass}`)) return;

    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActiveClass);

    if (e.target.matches(`.${arrowRightClass}`)) currentSlide++;
    if (e.target.matches(`.${arrowLeftClass}`)) currentSlide--;

    if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) currentSlide = index;
      });
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActiveClass);
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches(`.${dotClass}, .${sliderButtonsClass}`)) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches(`.${dotClass}, .${sliderButtonsClass}`)) {
      startSlide(timeInterval);
    }
  }, true);

  startSlide(timeInterval);
  addSliderDots();
};

export default slider;