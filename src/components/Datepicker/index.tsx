import { useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DATE_MASK } from '@/constants/dates';
import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { isDateValid } from '@/utils/isDateValid';

import { DateInput } from '../DateInput';

export const Datepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  addTodo,
  calendarVariant,
  selectedStartDate = null,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateInput, setDateInput] = useState<MonthDate>(selectedStartDate ?? DATE_MASK);

  const isValidDate = isDateValid(dateInput);

  const onDateClick = (selectedDate: MonthDate) => {
    const { day, month, year } = selectedDate;
    setDateInput({ day, month, year });
    setIsCalendarOpen(false);
    if (addTodo) {
      addTodo(selectedDate);
    }
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  return (
    <>
      <GlobalStyle />
      <DateInput label="Date" onClick={openCalendar} value={dateInput} setValue={setDateInput} />
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={isValidDate ? dateInput : null}
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
