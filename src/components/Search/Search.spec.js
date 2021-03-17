import { API_URL } from '../constants';

it('check search request', async () => {

  const allDataEn = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const en = 'en';
    xhr.open('GET', `${API_URL}/countries?lang=${en}&search=`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
  const someDataEn = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const en = 'en';
    xhr.open('GET', `${API_URL}/countries?lang=${en}&search=o`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  const allDataRu = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const ru = 'ru';
    xhr.open('GET', `${API_URL}/countries?lang=${ru}&search=`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
  const someDataRu = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const ru = 'ru';
    xhr.open('GET', `${API_URL}/countries?lang=${ru}&search=а`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  const allDataBe = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const be = 'be';
    xhr.open('GET', `${API_URL}/countries?lang=${be}&search=`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
  const someDataBe = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const be = 'be';
    xhr.open('GET', `${API_URL}/countries?lang=${be}&search=і`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(JSON.parse(allDataEn).length).toEqual(8);
  expect(JSON.parse(someDataRu).length).toEqual(7);
  expect(JSON.parse(someDataEn).length).toEqual(6);
  expect(JSON.parse(someDataBe).length).toEqual(4);
  expect(JSON.parse(allDataRu).length).toEqual(8);
  expect(JSON.parse(allDataBe).length).toEqual(8);
})
