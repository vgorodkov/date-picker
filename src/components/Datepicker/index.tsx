import '@/global.css';

import React, { useState } from 'react';

import { MonthDate } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { CalendarContainer } from './styled';
import { DatepickerProps } from './types';

export const Datepicker = ({ firstDayOfWeek }: DatepickerProps) => {
  const [date, selectDate] = useState<null | MonthDate>(null);
  const [isDatepickerShown, setIsDatepickerShown] = useState(false);

  const openDatepicker = () => {
    setIsDatepickerShown(true);
  };

  const resetDate = () => {
    selectDate(null);
  };

  const handleDateSelection = (selectedDate: MonthDate) => {
    selectDate(selectedDate);
    setIsDatepickerShown(false);
  };

  return (
    <>
      <DateInput
        resetDate={resetDate}
        onClick={openDatepicker}
        title="Date"
        placeholder="Choose date"
        value={formatInputDate(date)}
      />
      <CalendarContainer>
        {isDatepickerShown && (
          <Calendar
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={date}
            selectDate={handleDateSelection}
          />
        )}
      </CalendarContainer>
    </>
  );
};
