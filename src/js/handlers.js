import { STORAGE_KEYS } from './constants';
import { apply } from './helpers';
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
