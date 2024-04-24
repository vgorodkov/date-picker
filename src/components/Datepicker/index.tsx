import { useState } from 'react';

import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { MonthDate, PickerProps } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

export const Datepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  addTodo,
}: PickerProps) => {
  const [date, selectDate] = useState<null | MonthDate>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const resetDate = () => {
    selectDate(null);
  };

  const handleDateSelection = (selectedDate: MonthDate) => {
    selectDate(selectedDate);
    setIsCalendarOpen(false);
    if (addTodo) {
      addTodo(selectedDate);
    }
  };

  return (
    <>
      <GlobalStyle />
      <DateInput
        isSelected={isCalendarOpen}
        resetDate={resetDate}
        onClick={openCalendar}
        title="Date"
        placeholder="Choose date"
        value={formatInputDate(date)}
      />
      {isCalendarOpen && (
        <RelativeContainer>
          <Calendar
            month={date?.month}
            year={date?.year}
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={date}
            onDateClick={handleDateSelection}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
          />
        </RelativeContainer>
      )}
    </>
  );
};
