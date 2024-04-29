import { ChangeEvent, useState } from 'react';

import { MonthDate } from '@/types/date';
import { validateInputDate } from '@/utils/validateInputDate';

export const useDateInput = (initialDate: MonthDate | null) => {
  const [date, setDate] = useState<MonthDate | null>(initialDate);

  const onDateInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { validatedDay, validatedMonth, validatedYear } = validateInputDate(e.target.value);
    setDate({
      day: validatedDay,
      month: validatedMonth,
      year: validatedYear,
    });
  };

  return { date, setDate, onDateInputChange };
};
