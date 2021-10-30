const calculator = () => {
  const calcForms = document.querySelectorAll('input.calc-item');

  calcForms.forEach((form) => {
    form.addEventListener('input', (e) => {
      if (/[^\d\.]$/g.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^\d\.]+$/g, "");
      }
    });
  });
};

export default calculator;