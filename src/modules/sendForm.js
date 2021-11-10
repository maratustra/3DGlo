import { validate } from "schema-utils";

const sendForm = ({ form, someElem = [] }) => {
  const forms = document.querySelectorAll(form);
  const statusBlock = document.createElement('div');
  const loadText = 'Идет загрузка';
  const errorText = 'Ошибка!';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';


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

    console.log('gghjfjhgf')

    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

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

    sendData(formBody)
      .then(data => statusBlock.textContent = successText)
      .catch(error => statusBlock.textContent = errorText);
  };

  try {
    forms.forEach((form) => {
      if (!form) throw new Error('Верните, пожалуйста, форму!');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm(e.target);
      });
    })
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;