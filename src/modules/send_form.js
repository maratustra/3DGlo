import { validate } from "schema-utils";

const sendForm = ({ form, someElem = [] }) => {
  const forms = document.querySelectorAll(form);
  const statusBlock = document.createElement('div');
  const loader = document.querySelector('.loaderArea');
  const errorText = 'Ошибка!';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';


  const showLoading = () => {
    loader.style.display = 'block';
  };

  const hideLoading = () => {
    loader.style.display = 'none';
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };

  const submitForm = (form) => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      }
      if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    showLoading();

    sendData(formBody)
      .then(data => {
        statusBlock.textContent = successText;
        statusBlock.style.color = 'white';
        form.append(statusBlock);
      })
      .catch(error => {
        statusBlock.textContent = errorText;
        statusBlock.style.color = 'red';
        form.append(statusBlock);
      })
      .finally(() => hideLoading());
  };

  try {
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {

          submitForm(e.target);
          setTimeout(() => form.reset(), 2500);
        } else {
          statusBlock.textContent = "Введите данные в правильном формате";
          statusBlock.style.color = 'red';
          form.append(statusBlock);
        }
      });
    })
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;