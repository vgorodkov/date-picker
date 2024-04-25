import { MonthDate, RangeVariant } from '@/types/date';

export interface RangepickerState {
  isCalendarOpen: boolean;
  rangeSelection: {
    selectedRangeInput: RangeVariant;
    startRangeDate: MonthDate | null;
    endRangeDate: MonthDate | null;
  };
}

export type RangepickerAction =
  | { type: 'OPEN_CALENDAR' }
  | { type: 'CLOSE_CALENDAR' }
  | { type: 'SELECT_DATE'; payload: MonthDate }
  | { type: 'SET_SELECTED_INPUT'; payload: RangeVariant }
  | { type: 'RESET_START_RANGE' }
  | { type: 'RESET_END_RANGE' };

export const initialState: RangepickerState = {
  isCalendarOpen: false,
  rangeSelection: {
    selectedRangeInput: RangeVariant.START,
    startRangeDate: null,
    endRangeDate: null,
  },
};
