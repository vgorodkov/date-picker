import { useMemo, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { PickerWrapper } from '@/components/PickerWrapper';
import { DATE_MASK } from '@/constants/dates';
import { spacing } from '@/constants/spacing';
import { FlexContainer, RelativeContainer } from '@/styles/common';
import { DateInputValue, MonthDate } from '@/types/date';
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

  const rangeTimestamps = useMemo(() => {
    const start = getTimestampByDate(transformDateInputToMonthDate(startRange));
    const end = getTimestampByDate(transformDateInputToMonthDate(endRange));

    return {
      start,
      end,
    };
  }, [startRange, endRange]);

  const isRangeTimestampsValid = useMemo(() => {
    return isRangeValid(rangeTimestamps);
  }, [rangeTimestamps]);

  const onCalendarDateClick = (selectedDate: MonthDate) => {
    if (rangeVariant === RangeVariant.START) {
      if (selectedDate.timestamp > rangeTimestamps.end) {
        return;
      }
      setStartRange(selectedDate);
    } else if (rangeVariant === RangeVariant.END) {
      if (selectedDate.timestamp < rangeTimestamps.start) {
        return;
      }
      setEndRange(selectedDate);
    }
  };

  const onStartRangeInputClick = () => {
    setRangeVariant(RangeVariant.START);
    setIsCalendarOpen(true);
  };

  const onEndRangeInputClick = () => {
    setRangeVariant(RangeVariant.END);
    setIsCalendarOpen(true);
  };

  return (
    <PickerWrapper>
      <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
        <DateInput
          isDateValid={isRangeTimestampsValid}
          isSelected={rangeVariant === RangeVariant.START}
          label="From"
          value={startRange}
          setValue={setStartRange}
          onClick={onStartRangeInputClick}
        />
        <DateInput
          isDateValid={isRangeTimestampsValid}
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
            withTodo={false}
            range={isRangeTimestampsValid ? rangeTimestamps : undefined}
            calendarVariant={calendarVariant}
            onDateClick={onCalendarDateClick}
            firstDayOfWeek={firstDayOfWeek}
            showHolidays={showHolidays}
            holidayTimestamps={holidayTimestamps}
          />
        )}
      </RelativeContainer>
    </PickerWrapper>
  );
};
