import { useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { useDateInput } from '@/hooks/useDateInput';
import { RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { MonthDate, PickerProps, Range, RangeVariant } from '@/types/date';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { RangeInput } from './RangeInput';

export const Rangepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  calendarVariant,
}: PickerProps) => {
  const [selectedRangeInput, setSelectedRangeInput] = useState<RangeVariant | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const {
    date: rangeStart,
    setDate: setRangeStart,
    onDateInputChange: onRangeStartChange,
  } = useDateInput(null);

  const {
    date: rangeEnd,
    setDate: setRangeEnd,
    onDateInputChange: onRangeEndChange,
  } = useDateInput(null);

  const range: Range = {
    start: rangeStart ? getTimestampByDate(rangeStart) : null,
    end: rangeEnd ? getTimestampByDate(rangeEnd) : null,
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const onCalendarDateClick = (selectedDate: MonthDate) => {
    if (selectedRangeInput === RangeVariant.START) {
      setRangeStart(selectedDate);
    } else {
      setRangeEnd(selectedDate);
    }
  };

  const resetStartRange = () => {
    setRangeStart(null);
  };

  const resetEndRange = () => {
    setRangeEnd(null);
  };

  return (
    <>
      <GlobalStyle />
      <RangeInput
        openCalendar={openCalendar}
        resetEndRange={resetEndRange}
        resetStartRange={resetStartRange}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        onRangeEndChange={onRangeEndChange}
        onRangeStartChange={onRangeStartChange}
        selectedRangeInput={selectedRangeInput}
        setSelectedRangeInput={setSelectedRangeInput}
      />
      <RelativeContainer>
        {isCalendarOpen && (
          <Calendar
            calendarVariant={calendarVariant}
            range={range}
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
