import {
  addMinutesToDate,
  timeConvert,
  parseToHourMinutes,
} from '../../helpers/parseDate';

describe('helper/parseDate', () => {
  const date =
    'Thu Sep 01 2022 16:57:54 GMT+0300 (Восточная Европа, летнее время)';

  describe('test function addMinutesToDate', () => {
    test('when add 1 min, result time must be "16:58"', () =>
      expect(addMinutesToDate(date, 1)).toBe(
        'Thu Sep 01 2022 16:58:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 2 min, result time must be "16:59"', () =>
      expect(addMinutesToDate(date, 2)).toBe(
        'Thu Sep 01 2022 16:59:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 3 min, result time must be "17:00"', () =>
      expect(addMinutesToDate(date, 3)).toBe(
        'Thu Sep 01 2022 17:00:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 5 min, result time must be "17:02"', () =>
      expect(addMinutesToDate(date, 5)).toBe(
        'Thu Sep 01 2022 17:02:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 60 min, result time must be "17:57"', () =>
      expect(addMinutesToDate(date, 60)).toBe(
        'Thu Sep 01 2022 17:57:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 64 min, result time must be "18:01"', () =>
      expect(addMinutesToDate(date, 64)).toBe(
        'Thu Sep 01 2022 18:01:54 GMT+0300 (Восточная Европа, летнее время)'
      ));

    test('when add 1440 min, result day and time must be "Fri 02 16:57"', () =>
      expect(addMinutesToDate(date, 1440)).toBe(
        'Fri Sep 02 2022 16:57:54 GMT+0300 (Восточная Европа, летнее время)'
      ));
  });

  describe('test function timeConvert', () => {
    test('when 9 min, expecte "0ч 9m"', () =>
      expect(timeConvert(9)).toBe('0ч 9м'));

    test('when 10 min, expecte "0ч 10м"', () =>
      expect(timeConvert(10)).toBe('0ч 10м'));

    test('when 59 min, expecte "0ч 59м"', () =>
      expect(timeConvert(59)).toBe('0ч 59м'));

    test('when 62 min, expecte "1ч 2м"', () =>
      expect(timeConvert(62)).toBe('1ч 2м'));

    test('when 119 min, expecte "1ч 59м"', () =>
      expect(timeConvert(119)).toBe('1ч 59м'));

    test('when 120 min, expecte "2ч 0м"', () =>
      expect(timeConvert(120)).toBe('2ч 0м'));

    test('when 600 min, expecte "10ч 0м"', () =>
      expect(timeConvert(600)).toBe('10ч 0м'));

    test('when 1440 min, expecte "24ч 0м"', () =>
      expect(timeConvert(1440)).toBe('24ч 0м'));

    test('when 1450 min, expecte "24ч 10м"', () =>
      expect(timeConvert(1450)).toBe('24ч 10м'));

    test('when 1501 min, expecte "25ч 1м"', () =>
      expect(timeConvert(1501)).toBe('25ч 1м'));
  });

  describe('test function parseToHourMinutes', () => {
    const dateTime = (time: string) => date.replace('16:57', time);

    test('it should be 10:00', () =>
      expect(parseToHourMinutes(dateTime('10:00'))).toBe('10:00'));

    test('it should be 16:57', () =>
      expect(parseToHourMinutes(dateTime('16:57'))).toBe('16:57'));

    test('it should be 16:01', () =>
      expect(parseToHourMinutes(dateTime('16:01'))).toBe('16:01'));

    test('it should be 22:59', () =>
      expect(parseToHourMinutes(dateTime('22:59'))).toBe('22:59'));

    test('it should be 09:59', () =>
      expect(parseToHourMinutes(dateTime('09:59'))).toBe('09:59'));
  });
});
