import { useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { MonthDate, PickerProps } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';

export const Datepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  addTodo,
  calendarVariant,
}: PickerProps) => {
  const [date, selectDate] = useState<null | MonthDate>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const resetDate = () => {
    selectDate(null);
  };

  const onDateClick = (selectedDate: MonthDate) => {
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
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={date}
            onDateClick={onDateClick}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
            calendarVariant={calendarVariant}
          />
        </RelativeContainer>
      )}
    </>
  );
};
