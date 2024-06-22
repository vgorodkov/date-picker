import { useMemo, useState } from 'react';

import { AppWrapper } from '@/components/AppWrapper';
import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { colors } from '@/constants/colors';
import { DATE_MASK } from '@/constants/dates';
import { PickerContainer, RelativeContainer } from '@/styles/containers';
import { CalendarDate, DateInputValue, MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { isDateInRangeLimit } from '@/utils/isDateInRangeLimit';
import { isInputMaskified } from '@/utils/isInputMaskified';
import { transformDateInputToMonthDate } from '@/utils/transformDateInputToMonthDate';

import { DEFAULT_DATELIMIT } from './constants';

export const Datepicker = ({
  firstDayOfWeek = 'Mo',
  showHolidays = false,
  holidayTimestamps = [],
  addTodo,
  calendarVariant = 'month',
  selectedStartDate = null,
  dateLimit = DEFAULT_DATELIMIT,
  holidayColor = colors.holidayText,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateInput, setDateInput] = useState<DateInputValue>(selectedStartDate ?? DATE_MASK);

  const isDateValid = useMemo(() => {
    if (isInputMaskified(dateInput)) {
      return false;
    }
    return isDateInRangeLimit(dateInput as CalendarDate, dateLimit);
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
    <AppWrapper>
      <PickerContainer>
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
              holidayColor={holidayColor}
              calendarVariant={calendarVariant}
            />
          )}
        </RelativeContainer>
      </PickerContainer>
    </AppWrapper>
  );
};
