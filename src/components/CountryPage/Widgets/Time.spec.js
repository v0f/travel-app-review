import {getLocaleTime} from './Time';

test('get and formating for time from timeZone', () => {
  expect(getLocaleTime('Asia/Seoul') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Tokyo') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Jakarta') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Manila') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Ho_Chi_Minh') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Vientiane') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Yangon') instanceof Date).toBe(true);
  expect(getLocaleTime('Asia/Singapore') instanceof Date).toBe(true);
})
