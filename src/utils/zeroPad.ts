export const zeroPad = (value: string | number, length: number) => {
  return `${value}`.padStart(length, '0');
};
