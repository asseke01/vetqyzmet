(() => {
  'use strict';

  // Функция для показа уведомления (toast) в зависимости от типа
  function showToast(message, type) {
    let toastId = '';

    if (type === 'success') {
      toastId = 'successToast';
    } else if (type === 'danger') {
      toastId = 'dangerToast';
    }

    const toast = document.getElementById(toastId);
    const toastBody = toast.querySelector('.toast-body');
    toastBody.textContent = message;
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
  }

  // Функция для обработки отправки формы
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      // Ваш код для отправки формы здесь
      // Например, вы можете использовать XMLHttpRequest или fetch для отправки данных на сервер

      // После успешной отправки формы можно показать успешное уведомление
      showToast('Ваше сообщение успешно отправлено в службу технической поддержки. Сотрудники call-центра в ближайшее время свяжутся с Вами.', 'success');
    form.reset();
    form.classList.remove('was-validated');
    } else {
      // Показать уведомление о незаполненных обязательных полях
      showToast('Пожалуйста, заполните все обязательные поля', 'danger');
      form.classList.add('was-validated');
    }
    
  }

  // Найти все формы с классом 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation');

  // Назначить обработчик submit каждой форме
  forms.forEach(form => {
    form.addEventListener('submit', handleSubmit);
  });
})();


(() => {
  'use strict';

  // Функция для показа уведомления (toast) в зависимости от типа
  function showToast2(message2, type2) {
    let toastId = '';

    if (type2 === 'success') {
      toastId = 'successToast2';
    } else if (type2 === 'danger') {
      toastId = 'dangerToast2';
    }

    const toast = document.getElementById(toastId);
    const toastBody = toast.querySelector('.toast-body');
    toastBody.textContent = message2;
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
  }

  // Функция для обработки отправки формы
  function handleSubmit2(event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      // код для отправки формы здесь
      showToast2('Сіздің хабарламаңыз техникалық қолдау қызметіне сәтті жіберілді. Call-орталықтың қызметкерлері жақын арада Сізбен байланысады.', 'success');
    } else {
      
      showToast2('Барлық міндетті өрістерді толтырыңыз', 'danger');
    }
    form.classList.add('was-validated');
  }

  // Найти все формы с классом 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation');

  // Назначить обработчик submit каждой форме
  forms.forEach(form => {
    form.addEventListener('submit', handleSubmit2);
  });
})();


var element = document.getElementById('phone');
var maskOptions = {
  mask: '+7(000)000-00-00',

}
var mask = new IMask(element, maskOptions);



function toggleNav() {
  var sidebar = document.getElementById("sidebar"),
    main = document.getElementById("main");
    sidebar.style.width = sidebar.style.width == "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' : '250px';
    footer.style.marginLeft = footer.style.marginLeft === "250px" ? '0' : '250px';
}





