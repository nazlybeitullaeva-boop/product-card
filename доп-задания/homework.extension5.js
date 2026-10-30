// Страница для заданий: homework.extension5.html
// Каждое задание в своём блоке { }, чтобы имена не конфликтовали.

// ===== 1–5. Форма подписки =====
{
  const form = document.querySelector('#subscribe-form');
  const emailInput = document.querySelector('#subscribe-email');

  // 2. submit + preventDefault
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Форма отправлена');

    // 3. emailInput — сам DOM-элемент <input>, emailInput.value — введённая строка
    console.log(emailInput);
    console.log(emailInput.value);

    // 4. checkValidity() вернёт true, если все HTML-ограничения выполнены, иначе false
    console.log('checkValidity:', form.checkValidity());
    if (!form.checkValidity()) {
      form.reportValidity(); // показывает стандартные сообщения браузера
      return; // дальше код не выполняется
    }

    console.log('Подписка оформлена:', emailInput.value);

    // 5. reset() возвращает все поля формы к начальному состоянию (очищает их).
    // Да, input после submit очищается, но только если мы сами вызвали reset().
    form.reset();
  });
}

// ===== 6–8. Форма обратной связи =====
{
  const form = document.querySelector('#feedback-form');
  const nameInput = document.querySelector('#feedback-name');
  const emailInput = document.querySelector('#feedback-email');
  const messageInput = document.querySelector('#feedback-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // 6. Значения каждого поля получаем вручную
    console.log('6) вручную:', nameInput.value, emailInput.value, messageInput.value);

    // 7. FormData: у каждого поля должен быть атрибут name
    const formData = new FormData(form);
    console.log('7) FormData:', formData.get('name'), formData.get('email'), formData.get('message'));

    // 8. FormData -> обычный объект
    const formValues = Object.fromEntries(formData);
    console.log('8) объект:', formValues);

    form.reset();
  });
}

// ===== 9. Событие input =====
// Срабатывает при каждом изменении значения: на каждый введённый или удалённый символ
// (в том числе при вставке и удалении), то есть очень часто.
{
  const usernameInput = document.querySelector('#username');

  usernameInput.addEventListener('input', function () {
    console.log('Сейчас в поле:', usernameInput.value);
  });
}

// ===== 10. Счётчик символов =====
{
  const textarea = document.querySelector('#counter-textarea');
  const counter = document.querySelector('#counter-text');

  textarea.addEventListener('input', function () {
    counter.textContent = `${textarea.value.length} / ${textarea.maxLength}`;
  });
}

// ===== 11. Событие change =====
// input срабатывает сразу при каждом изменении, а change — когда выбор подтверждён
// (для select — сразу после выбора пункта, для текстовых полей — когда поле теряет фокус).
{
  const select = document.querySelector('#direction-select');

  select.addEventListener('change', function () {
    console.log('change:', select.value);
  });

  select.addEventListener('input', function () {
    console.log('input:', select.value);
  });
}

// ===== 12. Чекбокс согласия =====
{
  const form = document.querySelector('#agree-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Данные выводим только после успешной проверки
    console.log('Согласие получено:', Object.fromEntries(new FormData(form)));
  });
}

// ===== 13. Итоговое задание: анкета =====
{
  const form = document.querySelector('#survey-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const survey = Object.fromEntries(formData);
    survey.createdOn = new Date();

    console.log(survey);

    form.reset();
  });
}
