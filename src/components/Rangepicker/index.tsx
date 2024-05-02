import { useMemo, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { DATE_MASK, MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';
import { RangeVariant } from '@/types/range';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { DateInput } from '../DateInput';

export const Rangepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  calendarVariant,
}: PickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [rangeVariant, setRangeVariant] = useState<RangeVariant | null>(null);
  const [startRange, setStartRange] = useState<MonthDate>(DATE_MASK);
  const [endRange, setEndRange] = useState<MonthDate>(DATE_MASK);

  const range = useMemo(() => {
    const start = getTimestampByDate(startRange);
    const end = getTimestampByDate(endRange);
    return {
      start,
      end,
    };
  }, [startRange, endRange]);

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
      <DateInput
        isSelected={rangeVariant === RangeVariant.START}
        label="From"
        value={startRange}
        setValue={setStartRange}
        onClick={onStartRangeInputClick}
      />
      <DateInput
        isSelected={rangeVariant === RangeVariant.END}
        label="To"
        value={endRange}
        setValue={setEndRange}
        onClick={onEndRangeInputClick}
      />
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            range={range}
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
