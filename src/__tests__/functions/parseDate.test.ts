import { addMinutesToDate } from '../../helpers/parseDate';

describe('helper/parseDate', () => {
  test('check correct "addMinutesToDate"', () => {
    const date =
      'Thu Sep 01 2022 16:57:54 GMT+0300 (Восточная Европа, летнее время)';
    expect(addMinutesToDate(date, 1)).toBe(
      'Thu Sep 01 2022 16:58:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 2)).toBe(
      'Thu Sep 01 2022 16:59:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 3)).toBe(
      'Thu Sep 01 2022 17:00:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 5)).toBe(
      'Thu Sep 01 2022 17:02:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 60)).toBe(
      'Thu Sep 01 2022 17:57:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 64)).toBe(
      'Thu Sep 01 2022 18:01:54 GMT+0300 (Восточная Европа, летнее время)'
    );
    expect(addMinutesToDate(date, 1440)).toBe(
      'Fri Sep 02 2022 16:57:54 GMT+0300 (Восточная Европа, летнее время)'
    );
  });
});
