import { KeyboardEvent, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { useDateInput } from '@/hooks/useDateInput';
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
  selectedStartDate = null,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { date, setDate, onDateInputChange } = useDateInput(selectedStartDate);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const resetDate = () => {
    setDate(null);
  };

  const onDateClick = (selectedDate: MonthDate) => {
    setDate(selectedDate);
    setIsCalendarOpen(false);
    if (addTodo) {
      addTodo(selectedDate);
    }
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <>
      <GlobalStyle />
      <DateInput
        isSelected={isCalendarOpen}
        resetDate={resetDate}
        onClick={openCalendar}
        onKeyDown={handleInputKeyDown}
        title="Date"
        placeholder="Choose date"
        onChange={onDateInputChange}
        value={formatInputDate(date)}
      />
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={date}
            onDateClick={onDateClick}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
            calendarVariant={calendarVariant}
          />
        )}
      </RelativeContainer>
    </>
  );
};
