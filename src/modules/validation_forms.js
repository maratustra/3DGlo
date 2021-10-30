const validationForms = () => {
  const formMainPage = document.querySelector("#form1");
  const formFooter = document.querySelector("#form2");
  const formModal = document.querySelector("#form3");
  let isError = false;

  const userValidation = (e) => {
    if (/^[а-яА-Я\s-]+$/g.test(e.value) && e.value != "") {
      alert('В поле Имя разрешена только кириллица в любом регистре, дефис и пробел');
    } else {
      return isError = true;
    }
  };

  const emailValidation = (e) => {
    if (/^([A-Za-z0-9_\--.!~*'])+\@([A-Za-z0-9_\-.!~*'])+\.([A-Za-z]{2,4})$/g.test(e.value) && e.value != "") {
      alert("В поле Email только латиница и спецсимволы @  -  _  .  ! ~ * '");
    } else {
      return isError = true;
    }
  };

  const phoneValidation = (e) => {
    if (!/[^\d+()-]/g.test(e.value) && e.value != "") {
      alert('В поле Телефон только цифры, круглые скобки, дефис и плюс');
    } else {
      return isError = true;
    }
  };

  const messageValidation = (e) => {
    if (!/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu.test(e.value)) {
      alert('В поле Сообщение разрешена кириллица в любом регистре и любые знаки препинания');
    } else {
      return isError = true;
    }
  };

  formMainPage.addEventListener('submit', (e) => {
    e.preventDefault();

    userValidation(e.target[0]);
    emailValidation(e.target[1]);
    phoneValidation(e.target[2]);

    if (!isError) alert('Данные отправлены');
    else isError = true;
  });

  formFooter.addEventListener('submit', (e) => {
    e.preventDefault();

    userValidation(e.target[0]);
    emailValidation(e.target[1]);
    phoneValidation(e.target[2]);
    messageValidation(e.target[3]);

    if (!isError) alert('Данные отправлены');
    else isError = true;
  });

  formModal.addEventListener('submit', (e) => {
    e.preventDefault();

    userValidation(e.target[0]);
    emailValidation(e.target[1]);
    phoneValidation(e.target[2]);

    if (!isError) alert('Данные отправлены');
    else isError = true;
  });
};

export default validationForms;