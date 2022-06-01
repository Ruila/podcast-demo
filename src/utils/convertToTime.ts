export const convertToTime = (value: number) => {
  const total = Math.trunc(value);
  const min = Math.trunc(total / 60);
  const sec = Math.trunc(min > 0 ? total % min : total);
  const showMin = min > 9 ? `${min}` : `0${min}`;
  const showSec = sec > 9 ? `${sec}` : `0${sec}`;
  return `${showMin}:${showSec}`;
};
