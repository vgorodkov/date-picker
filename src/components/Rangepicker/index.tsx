import { useReducer } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { FlexContainer, RelativeContainer } from '@/styles/common';
import { GlobalStyle } from '@/styles/global';
import { spacing } from '@/constants/spacing';
import { MonthDate, PickerProps, Range, RangeVariant } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { reducer } from './reducer';
import { initialState } from './types';

export const Rangepicker = ({
  firstDayOfWeek,
  showHolidays,
  holidayTimestamps,
  calendarVariant,
}: PickerProps) => {
  const [
    {
      isCalendarOpen,
      rangeSelection: { startRangeDate, endRangeDate, selectedRangeInput },
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleRangeSelection = (selectedDate: MonthDate) => {
    dispatch({ type: 'SELECT_DATE', payload: selectedDate });
  };

  const onDateInputClick = (rangeInput: RangeVariant) => {
    dispatch({ type: 'OPEN_CALENDAR' });
    dispatch({ type: 'SET_SELECTED_INPUT', payload: rangeInput });
  };

  const resetStartRange = () => {
    dispatch({ type: 'RESET_START_RANGE' });
  };

  const resetEndRange = () => {
    dispatch({ type: 'RESET_END_RANGE' });
  };

  const range: Range = {
    start: startRangeDate ? getTimestampByDate(startRangeDate) : null,
    end: endRangeDate ? getTimestampByDate(endRangeDate) : null,
  };

  return (
    <>
      <GlobalStyle />
      <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
        <DateInput
          isSelected={selectedRangeInput === RangeVariant.START}
          onClick={() => onDateInputClick(RangeVariant.START)}
          value={formatInputDate(startRangeDate)}
          resetDate={resetStartRange}
          title="From"
          placeholder="Choose date"
        />
        <DateInput
          isSelected={selectedRangeInput === RangeVariant.END}
          onClick={() => onDateInputClick(RangeVariant.END)}
          value={formatInputDate(endRangeDate)}
          resetDate={resetEndRange}
          title="To"
          placeholder="Choose date"
        />
      </FlexContainer>
      {isCalendarOpen && (
        <RelativeContainer>
          <Calendar
            calendarVariant={calendarVariant}
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
