import { useMemo, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { spacing } from '@/constants/spacing';
import { FlexContainer, RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { DATE_MASK, DateInputValue, MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { RangeVariant } from '@/types/range';
import { getTimestampByDate } from '@/utils/getTimestampByDate';
import { isRangeValid } from '@/utils/isRangeValid';
import { transformDateInputToMonthDate } from '@/utils/transformDateInputToMonthDate';

export const Rangepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  calendarVariant,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [rangeVariant, setRangeVariant] = useState<RangeVariant | null>(null);
  const [startRange, setStartRange] = useState<DateInputValue>(DATE_MASK);
  const [endRange, setEndRange] = useState<DateInputValue>(DATE_MASK);

  const range = useMemo(() => {
    const start = getTimestampByDate(transformDateInputToMonthDate(startRange));
    const end = getTimestampByDate(transformDateInputToMonthDate(endRange));

    return {
      start,
      end,
    };
  }, [startRange, endRange]);

  const isValidRange = useMemo(() => {
    return isRangeValid(range);
  }, [range]);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const onCalendarDateClick = (selectedDate: MonthDate) => {
    if (rangeVariant === RangeVariant.START) {
      if (getTimestampByDate(selectedDate) > range.end) {
        return;
      }
      setStartRange(selectedDate);
    } else if (rangeVariant === RangeVariant.END) {
      if (getTimestampByDate(selectedDate) < range.start) {
        return;
      }
      setEndRange(selectedDate);
    }
  };

  const onStartRangeInputClick = () => {
    setRangeVariant(RangeVariant.START);
    openCalendar();
  };

  const onEndRangeInputClick = () => {
    setRangeVariant(RangeVariant.END);
    openCalendar();
  };

  return (
    <>
      <GlobalStyle />
      <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
        <DateInput
          isDateValid={isValidRange}
          isSelected={rangeVariant === RangeVariant.START}
          label="From"
          value={startRange}
          setValue={setStartRange}
          onClick={onStartRangeInputClick}
        />
        <DateInput
          isDateValid={isValidRange}
          isSelected={rangeVariant === RangeVariant.END}
          label="To"
          value={endRange}
          setValue={setEndRange}
          onClick={onEndRangeInputClick}
        />
      </FlexContainer>
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            range={isValidRange ? range : undefined}
            calendarVariant={calendarVariant}
            onDateClick={onCalendarDateClick}
            firstDayOfWeek={firstDayOfWeek}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
          />
        )}
      </RelativeContainer>
    </>
  );
};
