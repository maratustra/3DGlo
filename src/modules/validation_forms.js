const validationForms = () => {
  const userInputs = document.querySelectorAll('.form-name');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');
  const messageInput = document.querySelector('#form2-message');
  const forms = document.querySelectorAll('form');


  const userValidation = (input) => {
    if (/[^а-яА-Я\s-]+$/g.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, '');
    } else if (/([\s-])\1/g.test(input.value)) {
      input.value = input.value.replace(/([\s-])\1/g, '');
    } else if (/-[а-яё]/g.test(input.value)) {
      input.value = input.value.replace(/-[а-яё]/g, $0 => $0.toUpperCase());
    } else if (input.value.length > 0) {
      input.value =
        input.value
          .split(' ')
          .map(item => item.length > 0 ? item[0].toUpperCase() + item.substring(1) : '')
          .join(' ');
    }
  };

  const emailValidation = (input) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi.test(input.value)) {
      input.value = input.value.trim().replace(/\s+/g, " ");
    } else {
      input.value = input.value.replace(/[^a-z0-9\+\.\-@]+/g, "");
    }
  };

  const phoneValidation = (input) => {
    if (/[^\d+]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d+]/g, "");
    } else if (input.value.length >= 11) {
      input.value = input.value.trim().replace(/\s+/g, " ");
    }
  };

  const messageValidation = (input) => {
    if (/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu, "");
    } else {
      input.value = input.value.trim().replace(/\s+/g, " ");
    }
  };


  forms.forEach(() => {

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