import { ChangeEvent } from 'react';

import { DateInput } from '@/components/DateInput';
import { spacing } from '@/constants/spacing';
import { FlexContainer } from '@/styles/common';
import { MonthDate, RangeVariant } from '@/types/date';
import { formatInputDate } from '@/utils/formatInputDate';

interface RangeInputProps {
  openCalendar: () => void;
  resetStartRange: () => void;
  resetEndRange: () => void;
  rangeStart: MonthDate | null;
  rangeEnd: MonthDate | null;
  onRangeStartChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRangeEndChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedRangeInput: RangeVariant | null;
  setSelectedRangeInput: (rangeInput: RangeVariant) => void;
}

export const RangeInput = ({
  openCalendar,
  resetEndRange,
  resetStartRange,
  rangeStart,
  rangeEnd,
  onRangeEndChange,
  onRangeStartChange,
  selectedRangeInput,
  setSelectedRangeInput,
}: RangeInputProps) => {
  const onDateInputClick = (rangeInput: RangeVariant) => () => {
    openCalendar();
    setSelectedRangeInput(rangeInput);
  };

  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
      <DateInput
        isSelected={selectedRangeInput === RangeVariant.START}
        onClick={onDateInputClick(RangeVariant.START)}
        value={formatInputDate(rangeStart)}
        resetDate={resetStartRange}
        onChange={onRangeStartChange}
        title="From"
        placeholder="Choose date"
      />
      <DateInput
        isSelected={selectedRangeInput === RangeVariant.END}
        onClick={onDateInputClick(RangeVariant.END)}
        value={formatInputDate(rangeEnd)}
        resetDate={resetEndRange}
        title="To"
        placeholder="Choose date"
        onChange={onRangeEndChange}
      />
    </FlexContainer>
  );
};
