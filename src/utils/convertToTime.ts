export const convertToTime = (value: number) => {
  const total = Math.trunc(value);
  const min = Math.trunc(total / 60);
  const sec = Math.trunc(total % min);
  return `${min}:${sec}`;
};
