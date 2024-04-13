export const formatoTime = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const second = seconds - min * 60;
  const formatoSeconds = Math.floor(second).toString().padStart(2, '0')
  return `${min}:${formatoSeconds}`
};