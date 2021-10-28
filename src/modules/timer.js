const timer = (deadline) => {

  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');


  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor((timeRemaining) % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const getZeroBeforeNumber = (timeItem) => {
    if (String(timeItem).length > 1) {
      return timeItem;
    } else {
      timeItem = ('00' + timeItem).slice(-2);
    }
    return timeItem;
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = getZeroBeforeNumber(getTime.hours);
    timerMinutes.textContent = getZeroBeforeNumber(getTime.minutes);
    timerSeconds.textContent = getZeroBeforeNumber(getTime.seconds);

    if (getTime.timeRemaining <= 0) {

      clearInterval(idInterval);

      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  let idInterval = setInterval(updateClock, 1000);
};

export default timer;