import { FC } from 'react';

import { CalendarDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const withHolidays = (WrappedComponent: FC<PickerProps>, holidayDates: CalendarDate[]) => {
  const holidayTimestamps = holidayDates.map((holidayDate) => getTimestampByDate(holidayDate));

  return (props: PickerProps) => {
    return <WrappedComponent {...props} showHolidays holidayTimestamps={holidayTimestamps} />;
  };
};
