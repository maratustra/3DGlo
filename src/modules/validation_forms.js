const validationForms = () => {
  const userInputs = document.querySelectorAll('.form-name');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');
  const messageInput = document.querySelector('#form2-message');
  const forms = document.querySelectorAll('form');


  const userValidation = (input) => {
    if (/[^а-яА-Я\s-]+$/g.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, "");
    } else if (input.value.length > 0) {
      let nameUpperCase = input.value[0].toUpperCase() + input.value.slice(1);
      input.value = nameUpperCase.trim().replace(/\s+/g, " ");
    }
  };

  const emailValidation = (input) => {
    if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(input.value)) {
      input.value = input.value.trim().replace(/\s+/g, " ");
    } else {
      input.value = input.value.replace(/[^a-z0-9\+\.\-@]+/g, "");
    }
  };

  const phoneValidation = (input) => {
    if (/[^\d+()-]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d+()-]/g, "");
    } else {
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