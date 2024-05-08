import { KeyboardEvent, useEffect, useRef } from 'react';

import calendarIcon from '@/assets/icons/calendar.svg';
import clearIcon from '@/assets/icons/clear.svg';
import { InputLabel } from '@/components/UI/Input/styled';
import { DATE_MASK, MONTHS } from '@/constants/dates';
import { spacing } from '@/constants/spacing';
import { useInputCursorSelection } from '@/hooks/useInputCursorSelection';
import { FlexContainer } from '@/styles/containers';
import { Icon } from '@/styles/icon';
import { DateInputValue } from '@/types/date';
import { formatDateInput } from '@/utils/formatDateInput';
import { getMonthLength } from '@/utils/getMonthLength';
import { validateNumberInRange } from '@/utils/validateNumberInRange';
import { zeroPad } from '@/utils/zeroPad';

import { BACKSPACE_KEY, cursorRanges, DIGITS_REGEXP } from './constants';
import { InputContainer, InputField } from './styled';
import { DateInputProps } from './types';

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

  const handleDayInput = (keyCode: string, date: DateInputValue) => {
    const { day, month, year } = date;
    let newDay: string;
    if (+day < 10) {
      newDay = `${day.toString()[0]}${keyCode}`;
    } else {
      newDay = zeroPad(keyCode, 2);
    }
    const newDate: DateInputValue = {
      day: validateNumberInRange(+newDay, 1, getMonthLength(+month)),
      month,
      year,
    };
    setValue(newDate);
  };

  const handleMonthInput = (keyCode: string, date: DateInputValue) => {
    const { day, month, year } = date;
    let newMonth: string;
    if (+month < 10) {
      newMonth = `${month.toString()[0]}${keyCode}`;
    } else if (+month >= 10) {
      newMonth = zeroPad(keyCode, 2);
    } else {
      newMonth = zeroPad(keyCode, 2);
    }
    const newDate: DateInputValue = {
      day,
      month: validateNumberInRange(+newMonth, 1, MONTHS.length),
      year,
    };
    setValue(newDate);
  };

  const handleYearInput = (keyCode: string, date: DateInputValue) => {
    const { day, month, year } = date;
    let newYear: string;
    if (year === DATE_MASK.year) {
      newYear = zeroPad(keyCode, 4);
    } else if (+year >= 1000) {
      newYear = zeroPad(keyCode, 4);
    } else {
      newYear = zeroPad(`${+year}${keyCode}`, 4);
    }
    const newDate: DateInputValue = { day, month, year: newYear };
    setValue(newDate);
  };

  const handleDateInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const keyCode = e.key;
    const [dayRange, monthRange, yearRange] = cursorRanges;

    if (keyCode === BACKSPACE_KEY) {
      if (cursor.end <= dayRange.end) {
        const newDay = DATE_MASK.day;
        const newDate: DateInputValue = { ...value, day: newDay };
        setValue(newDate);
      } else if (cursor.end <= monthRange.end) {
        const newMonth = DATE_MASK.month;
        const newDate: DateInputValue = { ...value, month: newMonth };
        setValue(newDate);
      } else if (cursor.end <= yearRange.end) {
        const newYear = DATE_MASK.year;
        const newDate: DateInputValue = { ...value, year: newYear };
        setValue(newDate);
      }
    }

    if (keyCode.match(DIGITS_REGEXP)) {
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
    <FlexContainer flexFlow="column nowrap" gap={spacing.s}>
      <InputLabel>{label}</InputLabel>
      <InputContainer
        data-testid={`${label}-input-container`}
        isSelected={isSelected}
        isDateValid={isDateValid}
        onClick={onClick}
      >
        <Icon src={calendarIcon} />
        <InputField
          data-testid="date-input"
          onBlur={onInputBlur}
          readOnly
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
