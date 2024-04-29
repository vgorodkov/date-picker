import { FC } from 'react';

import { MonthDate, PickerProps } from '@/types/date';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const withHolidays = (WrappedComponent: FC<PickerProps>, holidayDates: MonthDate[]) => {
  const holidayTimestamps = holidayDates.map((holidayDate) => getTimestampByDate(holidayDate));
  return (props: PickerProps) => {
    return <WrappedComponent {...props} showHolidays holidayTimestamps={holidayTimestamps} />;
  };
};
