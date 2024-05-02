import { KeyboardEvent, useEffect, useRef } from 'react';

import calendarIcon from '@/assets/icons/calendar.svg';
import clearIcon from '@/assets/icons/clear.svg';
import { Icon } from '@/components/UI';
import { spacing } from '@/constants/spacing';
import { useInputCursorSelection } from '@/hooks/useInputCursorSelection';
import { FlexContainer } from '@/styles/common';
import { DATE_MASK, MonthDate } from '@/types/date';
import { formatDateInput } from '@/utils/formatDateInput';
import { getMonthLength } from '@/utils/getMonthLenght';
import { validateNumberInRange } from '@/utils/validateNumberInRange';
import { zeroPad } from '@/utils/zeroPad';

import { InputContainer, InputLabel, StyledInput } from './styled';
import { DateInputProps } from './types';

const cursorRanges = [
  { start: 0, end: 2 },
  { start: 3, end: 5 },
  { start: 6, end: 10 },
];

export const DateInput = ({
  value,
  setValue,
  onClick,
  label,
  onBlur,
  isSelected,
  isDateValid = true,
}: DateInputProps) => {
  const { cursor, onInputSelect } = useInputCursorSelection(cursorRanges);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursor.start, cursor.end);
    }
  }, [cursor, value]);

  const onInputBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const handleDayInput = (keyCode: string, date: MonthDate) => {
    const { day, month, year } = date;
    let newDay: string;
    if (+day < 10) {
      newDay = `${day.toString()[0]}${keyCode}`;
    } else {
      newDay = zeroPad(keyCode, 2);
    }
    const newDate: MonthDate = {
      day: validateNumberInRange(+newDay, 1, getMonthLength(+month)),
      month,
      year,
    };
    setValue(newDate);
  };

  const handleMonthInput = (keyCode: string, date: MonthDate) => {
    const { day, month, year } = date;
    let newMonth: string;
    if (+month < 10) {
      newMonth = `${month.toString()[0]}${keyCode}`;
    } else if (+month >= 10) {
      newMonth = zeroPad(keyCode, 2);
    } else {
      newMonth = zeroPad(keyCode, 2);
    }
    const newDate: MonthDate = {
      day,
      month: validateNumberInRange(+newMonth, 1, 12),
      year,
    };
    setValue(newDate);
  };

  const handleYearInput = (keyCode: string, date: MonthDate) => {
    const { day, month, year } = date;
    let newYear: string;
    if (year === 'YYYY') {
      newYear = zeroPad(keyCode, 4);
    } else if (+year >= 1000) {
      newYear = zeroPad(keyCode, 4);
    } else {
      newYear = zeroPad(`${+year}${keyCode}`, 4);
    }
    const newDate: MonthDate = { day, month, year: newYear };
    setValue(newDate);
  };

  const handleDateInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const keyCode = e.key;
    const [dayRange, monthRange, yearRange] = cursorRanges;

    if (keyCode === 'Backspace') {
      if (cursor.end <= dayRange.end) {
        const newDay = DATE_MASK.day;
        const newDate: MonthDate = { ...value, day: newDay };
        setValue(newDate);
      } else if (cursor.end <= monthRange.end) {
        const newMonth = DATE_MASK.month;
        const newDate: MonthDate = { ...value, month: newMonth };
        setValue(newDate);
      } else if (cursor.end <= yearRange.end) {
        const newYear = DATE_MASK.year;
        const newDate: MonthDate = { ...value, year: newYear };
        setValue(newDate);
      }
    }

    if (keyCode.match(/^[0-9]/g)) {
      if (cursor.end <= dayRange.end) {
        handleDayInput(keyCode, value);
      } else if (cursor.end <= monthRange.end) {
        handleMonthInput(keyCode, value);
      } else if (cursor.end <= yearRange.end) {
        handleYearInput(keyCode, value);
      }
    }
  };

  const resetDate = () => {
    setValue(DATE_MASK);
  };

  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
      <InputLabel>{label}</InputLabel>
      <InputContainer $isSelected={isSelected} $isDateValid={isDateValid} onClick={onClick}>
        <Icon src={calendarIcon} />
        <StyledInput
          onBlur={onInputBlur}
          value={formatDateInput(value)}
          onSelect={onInputSelect}
          onKeyDown={handleDateInputKeyDown}
          placeholder="Select date"
          type="text"
          ref={inputRef}
        />
        <Icon src={clearIcon} onClick={resetDate} />
      </InputContainer>
    </FlexContainer>
  );
};
