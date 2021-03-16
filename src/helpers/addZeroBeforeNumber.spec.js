import addZeroBeforeNumber from './addZeroBeforeNumber';

test('Formatting for time', () => {
  expect(addZeroBeforeNumber(14)).toBe('14');
  expect(addZeroBeforeNumber(4)).toBe('04');
  expect(addZeroBeforeNumber(10)).toBe('10');
  expect(addZeroBeforeNumber(21)).toBe('21');
})
