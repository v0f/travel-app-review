import { API_URL } from '../constants';
import { getMatches } from './Search';

it('check getMatches from search component', async () => {

  const dataEn = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const en = 'en';
    xhr.open('GET', `${API_URL}/countries?lang=${en}`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  const dataRu = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const ru = 'ru';
    xhr.open('GET', `${API_URL}/countries?lang=${ru}`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  const dataBe = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const be = 'be';
    xhr.open('GET', `${API_URL}/countries?lang=${be}`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(getMatches(JSON.parse(dataEn), '').length).toEqual(8);
  expect(getMatches(JSON.parse(dataEn), 'ja').length).toEqual(2);
  expect(getMatches(JSON.parse(dataEn), 'o').length).toEqual(6);
  expect(getMatches(JSON.parse(dataRu), '').length).toEqual(8);
  expect(getMatches(JSON.parse(dataBe), '').length).toEqual(8);
})