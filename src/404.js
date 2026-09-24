// Сторінка «не знайдено» через 5 секунд повертає користувача на головну, але він може лишитись, натиснувши кнопку.

import { refs } from './js/refs';

// Що зробити:
// Запустити інтервал, що раз на секунду зменшує лічильник і виводить його.
// Коли лічильник дійшов до нуля — зупинити інтервал і виконати перехід.
// Кнопка «Залишитись» зупиняє інтервал і прибирає повідомлення.
// Перевірити, що після натискання кнопки відлік справді припинився.

let seconds = 5;

export const intervalId = setInterval(() => {
  seconds -= 1;

  refs.left.textContent = seconds;

  if (seconds === 0) {
    clearInterval(intervalId);
    location.href = './index.html';
  }
}, 1000);

refs.stayBtn.addEventListener('click', onStayBtnClick);

function onStayBtnClick() {
  clearInterval(intervalId);

  refs.stayText.textContent = 'Переход остановлен';
}
