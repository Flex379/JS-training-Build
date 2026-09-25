import { STORAGE_KEYS } from './constants';
import { apply, delay } from './helpers';
import { refs } from './refs';
import { loadFromLS, saveToLS } from './storage';

export function onReaderToolsClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const { step } = event.target.dataset;

  const newSize = loadFromLS(STORAGE_KEYS.FONT_SIZES) + Number(step);
  saveToLS(STORAGE_KEYS.FONT_SIZES, newSize);
  apply(newSize);
}

export function onNotifyBtnClick() {
  refs.notifyBtn.disabled = true;
  refs.msg.textContent = 'Напоминание появится через 2 сек';
  delay(2000).then(() => {
    refs.notifyBtn.disabled = false;
    refs.msg.textContent = 'Время проверить почту';
  });
}
