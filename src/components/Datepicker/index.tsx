import { useMemo, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { DATE_MASK, DateInputValue, MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { isDateInRangeLimit } from '@/utils/isDateInRangeLimit';
import { isInputMaskified } from '@/utils/isInputMaskified';
import { transformDateInputToMonthDate } from '@/utils/transformDateInputToMonthDate';

import { DateInput } from '../DateInput';

export const Datepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  addTodo,
  calendarVariant,
  selectedStartDate = null,
  dateLimit = { min: { day: 1, month: 1, year: 2020 }, max: { day: 1, month: 1, year: 2030 } },
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateInput, setDateInput] = useState<DateInputValue>(selectedStartDate ?? DATE_MASK);

  const isDateValid = useMemo(() => {
    if (!isInputMaskified(dateInput)) {
      return false;
    }
    return isDateInRangeLimit(transformDateInputToMonthDate(dateInput), dateLimit);
  }, [dateInput, dateLimit]);

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
      <DateInput
        isDateValid={isDateValid}
        isSelected={isCalendarOpen}
        label="Date"
        onClick={openCalendar}
        value={dateInput}
        setValue={setDateInput}
      />
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={isDateValid ? transformDateInputToMonthDate(dateInput) : null}
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
