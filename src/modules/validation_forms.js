const validationForms = () => {
  const userInputs = document.querySelectorAll('.form-name');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');
  const messageInput = document.querySelector('#form2-message');
  const forms = document.querySelectorAll('form');
  let isError = false;


  const userValidation = (input) => {
    input.addEventListener('blur', () => {
      if (/[^а-яА-Я\s-]+$/g.test(input.value)) {
        input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, "");
        error.innerHTML = 'Пожалуйста, заполните поле правильно';
        return isError = true;
      } else {
        return isError = false;
      }
    }, true);

    // if (/[^а-яА-Я\s-]+$/g.test(input.value)) {
    //   input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, "");
    //   return isError = true;
    // } else {
    //   return isError = false;
    // }
  };

  const emailValidation = (input) => {

    if (/[^A-Za-z0-9_\--.!~*'@]/g.test(input.value)) {
      input.value = input.value.replace(/[^A-Za-z0-9_\--.!~*'@]/g, "");
      return isError = true;
    } else {
      return isError = false;
    }
  };

  const phoneValidation = (input) => {

    if (/[^\d+()-]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d+()-]/g, "");
      return isError = true;
    } else {
      return isError = false;
    }
  };

  const messageValidation = (input) => {
    if (/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu, "");
      return isError = true;
    } else {
      return isError = false;
    }
  };


  forms.forEach((eachSubmitForm) => {
    eachSubmitForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!isError) alert('Данные отправлены');
      else isError = true;
    });

    userInputs.forEach((eachUserInput) => {
      eachUserInput.addEventListener('input', (event) => {
        userValidation(event.target);
      });
    });

    emailInputs.forEach((eachEmailInput) => {
      eachEmailInput.addEventListener('input', (event) => {
        emailValidation(event.target);
      });
    });

    phoneInputs.forEach((eachPhoneInput) => {
      eachPhoneInput.addEventListener('input', (event) => {
        phoneValidation(event.target);
      });
    });

    messageInput.addEventListener('input', (event) => {
      messageValidation(event.target);
    });

  });
};

export default validationForms;