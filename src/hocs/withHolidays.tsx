import { FC, useMemo } from 'react';

import { CalendarDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const withHolidays = (WrappedComponent: FC<PickerProps>, holidayDates: CalendarDate[]) => {
  return (props: PickerProps) => {
    const holidayTimestamps = useMemo(() => {
      return holidayDates.map((holidayDate) => getTimestampByDate(holidayDate));
    }, []);

    return <WrappedComponent {...props} showHolidays holidayTimestamps={holidayTimestamps} />;
  };
};
