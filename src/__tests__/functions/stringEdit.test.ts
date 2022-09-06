import { getPostfix } from '../../helpers/stringEdit';

describe('helper/stringEdit', () => {
  test('when 0 stop, should be "пересадок"', () =>
    expect(getPostfix(0)).toBe('пересадок'));

  test('when 1 stop, should be "пересадка"', () =>
    expect(getPostfix(1)).toBe('пересадка'));

  test('when 2 stops, should be "пересадки"', () =>
    expect(getPostfix(2)).toBe('пересадки'));

  test('when 3 stops, should be "пересадки"', () =>
    expect(getPostfix(3)).toBe('пересадки'));

  test('when 4 stops, should be "пересадки"', () =>
    expect(getPostfix(4)).toBe('пересадки'));

  test('when 5 stops, should be "пересадок"', () =>
    expect(getPostfix(5)).toBe('пересадок'));

  test('when 8 stops, should be "пересадок"', () =>
    expect(getPostfix(8)).toBe('пересадок'));

  test('when 12 stops, should be "пересадок"', () =>
    expect(getPostfix(12)).toBe('пересадок'));

  test('when 88 stops, should be "пересадок"', () =>
    expect(getPostfix(88)).toBe('пересадок'));
});
