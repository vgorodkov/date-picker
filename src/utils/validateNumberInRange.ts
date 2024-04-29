export const validateNumberInRange = (value: number, min: number, max: number) => {
  if (!Number.isNaN(value) && value >= min && value <= max) {
    return value;
  }

  return Math.min(Math.max(value, min), max);
};
