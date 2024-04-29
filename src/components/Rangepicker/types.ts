import { MonthDate, RangeVariant } from '@/types/date';

export interface RangepickerState {
  isCalendarOpen: boolean;
  rangeSelection: {
    selectedRangeInput: RangeVariant;
    startRangeDate: MonthDate | null;
    endRangeDate: MonthDate | null;
  };
}
