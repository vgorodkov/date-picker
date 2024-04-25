import { FC } from 'react';

import { PickerProps } from '@/types/date';

export const withHolidays = (WrappedComponent: FC<PickerProps>, holidayTimestamps: number[]) => {
  return ({ ...props }) => {
    return <WrappedComponent {...props} showHolidays holidayTimestamps={holidayTimestamps} />;
  };
};
