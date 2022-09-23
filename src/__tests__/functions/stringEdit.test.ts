import { getPostfix } from '../../helpers/stringEdit';

describe('helper/stringEdit', () => {
  test('it should be "пересадок" when 0 stop', () =>
    expect(getPostfix(0)).toBe('пересадок'));

  test('it should be "пересадка" when 1 stop', () =>
    expect(getPostfix(1)).toBe('пересадка'));

  test('it should be "пересадки" when 2 stops', () =>
    expect(getPostfix(2)).toBe('пересадки'));

  test('it should be "пересадки" when 3 stops', () =>
    expect(getPostfix(3)).toBe('пересадки'));

  test('it should be "пересадки" when 4 stops', () =>
    expect(getPostfix(4)).toBe('пересадки'));

  test('it should be "пересадок" when 5 stops', () =>
    expect(getPostfix(5)).toBe('пересадок'));

  test('it should be "пересадок" when 8 stops', () =>
    expect(getPostfix(8)).toBe('пересадок'));

  test('it should be "пересадок" when 12 stops', () =>
    expect(getPostfix(12)).toBe('пересадок'));

  test('it should be "пересадок" when 88 stops', () =>
    expect(getPostfix(88)).toBe('пересадок'));
});
