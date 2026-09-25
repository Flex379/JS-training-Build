import { STORAGE_KEYS } from './constants';
import { refs } from './refs';
import { saveToLS } from './storage';

export function apply(size) {
  refs.article.style.fontSize = size + 'px';
  refs.spanSize.textContent = size;

  saveToLS(STORAGE_KEYS.FONT_SIZES, size);
}

export function delay(ms) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
}
