import { getMonthLength } from './getMonthLenght';
import { validateNumberInRange } from './validateNumberInRange';

export const validateInputDate = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.slice(0, 8);
  const [day, month, year] = [value.slice(0, 2), value.slice(2, 4), value.slice(4, 8)];

  const validatedDay = validateNumberInRange(+day, 1, getMonthLength(+month || 1));
  const validatedMonth = validateNumberInRange(+month, 1, 12);
  const validatedYear = validateNumberInRange(+year, 2020, 2024);

  return { validatedDay, validatedMonth, validatedYear };
};
