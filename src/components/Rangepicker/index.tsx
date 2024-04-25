import React, { useState } from 'react';

import { FlexContainer, RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { spacing } from '@/styles/spacing';
import { MonthDate, PickerProps, Range } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

export const Rangepicker = ({ firstDayOfWeek, showHolidays, holidayTimestamps }: PickerProps) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const [selectedRangeInput, setSelectedRangeInput] = useState<'start' | 'end'>('start');
  const [startRangeDate, setStartRangeDate] = useState<MonthDate | null>(null);
  const [endRangeDate, setEndRangeDate] = useState<MonthDate | null>(null);

  const range: Range = {
    start: startRangeDate ? getTimestampByDate(startRangeDate) : null,
    end: endRangeDate ? getTimestampByDate(endRangeDate) : null,
  };

  const handleRangeSelection = (selectedDate: MonthDate) => {
    if (selectedRangeInput === 'start') {
      setStartRangeDate(selectedDate);
    } else {
      setEndRangeDate(selectedDate);
    }
  };
  const resetStartRange = () => {
    setStartRangeDate(null);
  };
  const resetEndRange = () => {
    setEndRangeDate(null);
  };

  const onDateInputClick = (rangeInput: 'start' | 'end') => {
    setCalendarOpen(true);
    setSelectedRangeInput(rangeInput);
  };

  return (
    <>
      <GlobalStyle />
      <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
        <DateInput
          isSelected={selectedRangeInput === 'start'}
          onClick={() => onDateInputClick('start')}
          value={formatInputDate(startRangeDate)}
          resetDate={resetStartRange}
          title="From"
          placeholder="Choose date"
        />
        <DateInput
          isSelected={selectedRangeInput === 'end'}
          onClick={() => onDateInputClick('end')}
          value={formatInputDate(endRangeDate)}
          resetDate={resetEndRange}
          title="To"
          placeholder="Choose date"
        />
      </FlexContainer>
      {isCalendarOpen && (
        <RelativeContainer>
          <Calendar
            range={range}
            onDateClick={handleRangeSelection}
            firstDayOfWeek={firstDayOfWeek}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
          />
        </RelativeContainer>
      )}
    </>
  );
};
