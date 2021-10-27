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

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = String(getTime.hours).length > 1 ? getTime.hours : '0' + getTime.hours;
    timerMinutes.textContent = ('00' + getTime.minutes).slice(-2);
    timerSeconds.textContent = ('00' + getTime.seconds).slice(-2);

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