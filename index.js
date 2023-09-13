// Получаем все кнопки
const buttons = document.querySelectorAll('.button');
// const block = document.querySelector('.main');


buttons.forEach(button => button.textContent = '+'); // контент в кнопке по умолчанию

document.addEventListener('click', function(event) {
  let target = event.target;
  
  // Проверяем, является ли кликнутый элемент кнопкой
  if (target.classList.contains('button')) {
    // Если кнопка уже открыта, закрываем ее
    if (target.classList.contains('clicked')) {
      target.classList.remove('clicked');
      target.textContent = '+';
    } else {
      // Закрываем все открытые кнопки
      let buttons = document.querySelectorAll('.button.clicked');
      buttons.forEach(function(button) {
        button.classList.remove('clicked');
        button.textContent = '+';
      });
      
      // Открываем кликнутую кнопку
        target.classList.add('clicked');
        const plusMinus = document.createElement('span');
        target.appendChild(plusMinus);
        target.textContent = '-';
        // Добавляем надпись индивидуальную для каждой кнопки
        const label = document.createElement('span');
        label.textContent = target.value;
        target.appendChild(label);
    }
    // Проверяем, является ли кликнутый элемент изображением
  } else if (target.classList.contains('main-img')) {
    // Закрываем все открытые кнопки
    let buttons = document.querySelectorAll('.button.clicked');
    buttons.forEach(function(button) {
      button.classList.remove('clicked');
      button.textContent = '+';
    });
  }
  
});



