import { getPostfix } from '../../helpers/stringEdit';

describe('helper/stringEdit', () => {
  test('check correct postfix', () => {
    expect(getPostfix(0)).toBe('пересадок');
    expect(getPostfix(1)).toBe('пересадка');
    expect(getPostfix(2)).toBe('пересадки');
    expect(getPostfix(3)).toBe('пересадки');
    expect(getPostfix(4)).toBe('пересадки');
    expect(getPostfix(5)).toBe('пересадок');
    expect(getPostfix(6)).toBe('пересадок');
    expect(getPostfix(7)).toBe('пересадок');
    expect(getPostfix(8)).toBe('пересадок');
    expect(getPostfix(12)).toBe('пересадок');
    expect(getPostfix(88)).toBe('пересадок');
  });
});
