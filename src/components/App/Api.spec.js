import { API_URL } from '../constants';

it('Check data api works', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const lang = localStorage.getItem('lang') || 'en';
    xhr.open('GET', `${API_URL}/countries?lang=${lang}`);
    xhr.onload = () => resolve(xhr.status);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(data).toEqual(200);
});

it('Check current user from api without auth', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${API_URL}/users/current`);
    xhr.onload = () => resolve(xhr.status);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(data).toEqual(401);
});

it('Check login user from api with invalid data', async () => {
  const invalidData = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}/users/login`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send({login: 'user2', password:'test'});
  });

  expect(JSON.parse(invalidData)).toMatchObject({message:'invalid login-password'});
});

it('Check conversion chosen currency to RUB', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://free.currconv.com/api/v7/convert?apiKey=9907c9f725cc3b503486&q=LAK_RUB,RUB_LAK`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(JSON.parse(data)).toMatchObject({
    query: {count: 2},
    results: {
      LAK_RUB: {
        fr: "LAK",
        id: "LAK_RUB",
        to: "RUB"
      },
      RUB_LAK: {
        fr: "RUB",
        id: "RUB_LAK",
        to: "LAK",
      }
    },
  });
});

it('Check conversion chosen currency to USD', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://free.currconv.com/api/v7/convert?apiKey=9907c9f725cc3b503486&q=KRW_USD,USD_KRW`);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect((typeof data)).toEqual('string');
  expect(JSON.parse(data)).toMatchObject({
    query: {},
    results: {
      KRW_USD: {
        fr: "KRW",
        id: "KRW_USD",
        to: "USD"
      },
      USD_KRW: {
        fr: "USD",
        id: "USD_KRW",
        to: "KRW",
      }
    },
  });
});

it('Check if wether api response', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=ru&appid=93f3893d8ca2513b9dff95fa5ec0f1ca&units=metric');
    xhr.onload = () => resolve(xhr.statusText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(data).toEqual('OK');
});

it('Check if wether api response right place and language', async () => {
  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=ru&appid=93f3893d8ca2513b9dff95fa5ec0f1ca&units=metric');
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  expect(JSON.parse(data)).toMatchObject({
    coord: { lon: 126.9778, lat: 37.5683 },
    name: 'Сеул',
    cod: 200
  });
});
