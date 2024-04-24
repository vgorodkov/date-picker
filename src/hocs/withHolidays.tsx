import { FC } from 'react';

import { PickerProps } from '@/types/date';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const withHolidays = (WrappedComponent: FC<PickerProps>) => {
  const holidayTimestamps = [
    getTimestampByDate({ day: 9, month: 5, year: 2024 }),
    getTimestampByDate({ day: 1, month: 5, year: 2024 }),
    getTimestampByDate({ day: 3, month: 5, year: 2024 }),
  ];
  return ({ ...props }) => {
    return <WrappedComponent {...props} showHolidays holidayTimestamps={holidayTimestamps} />;
  };
};
