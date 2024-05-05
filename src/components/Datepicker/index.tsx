import { useMemo, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { PickerWrapper } from '@/components/PickerWrapper';
import { RelativeContainer } from '@/styles/common';
import { DATE_MASK, DateInputValue, MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { isDateInRangeLimit } from '@/utils/isDateInRangeLimit';
import { isInputMaskified } from '@/utils/isInputMaskified';
import { transformDateInputToMonthDate } from '@/utils/transformDateInputToMonthDate';

import { DEFAULT_DATELIMIT } from './constants';

export const Datepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  addTodo,
  calendarVariant,
  selectedStartDate = null,
  dateLimit = DEFAULT_DATELIMIT,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateInput, setDateInput] = useState<DateInputValue>(selectedStartDate ?? DATE_MASK);

  const isDateValid = useMemo(() => {
    if (isInputMaskified(dateInput)) {
      return false;
    }
    return isDateInRangeLimit(transformDateInputToMonthDate(dateInput), dateLimit);
  }, [dateInput, dateLimit]);

  const onDateClick = (selectedDate: MonthDate) => {
    setDateInput(selectedDate);
    setIsCalendarOpen(false);

    if (addTodo) {
      addTodo(selectedDate);
    }
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  return (
    <PickerWrapper>
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
            withTodo={!!addTodo}
            firstDayOfWeek={firstDayOfWeek}
            selectedDate={isDateValid ? transformDateInputToMonthDate(dateInput) : null}
            onDateClick={onDateClick}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
            calendarVariant={calendarVariant}
          />
        )}
      </RelativeContainer>
    </PickerWrapper>
  );
};
