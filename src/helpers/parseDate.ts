const parseToHourMinutes = (date: string) => {
  const getDate = new Date(date);
  const hours = getDate.getHours();
  const minutes = getDate.getMinutes();

  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

const addMinutesToDate = (date: string, minutes: number) =>
  new Date(new Date(date).getTime() + minutes * 60000).toString();

const timeConvert = (min: number) => {
  const num = min;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return `${rhours}ч ${rminutes}м`;
};

export { parseToHourMinutes, addMinutesToDate, timeConvert };
