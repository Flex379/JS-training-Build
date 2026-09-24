// Сторінка вітає користувача по-різному вранці, вдень, увечері та вночі.

import { refs } from './js/refs';

// Що зробити:
// Отримати поточну годину через getHours.
// Визначити привітання: 5–11 ранок, 12–17 день, 18–22 вечір, решта — ніч.
// Вивести привітання в заголовок.
// Перевірити всі гілки, підставивши тестову дату замість new Date().

const now = new Date();
const hours = now.getHours();

function greeting(hours) {
  if (hours >= 5 && hours <= 11) {
    return 'Доброе Утро';
  } else if (hours >= 12 && hours <= 17) {
    return 'Добрый День';
  } else if (hours >= 18 && hours <= 22) {
    return 'Добрый Вечер';
  }
  return 'Доброй ночи';
}

refs.greetingTitle.textContent = greeting(hours);
