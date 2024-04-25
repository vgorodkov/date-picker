import { RangeVariant } from '@/types/date';

import { RangepickerAction, RangepickerState } from './types';

export const reducer = (state: RangepickerState, action: RangepickerAction) => {
  switch (action.type) {
    case 'OPEN_CALENDAR':
      return { ...state, isCalendarOpen: true };
    case 'CLOSE_CALENDAR':
      return { ...state, isCalendarOpen: false };
    case 'SELECT_DATE':
      return {
        ...state,
        rangeSelection: {
          ...state.rangeSelection,
          [state.rangeSelection.selectedRangeInput === RangeVariant.START
            ? 'startRangeDate'
            : 'endRangeDate']: action.payload,
        },
      };
    case 'SET_SELECTED_INPUT':
      return {
        ...state,
        rangeSelection: { ...state.rangeSelection, selectedRangeInput: action.payload },
      };
    case 'RESET_START_RANGE':
      return { ...state, rangeSelection: { ...state.rangeSelection, startRangeDate: null } };
    case 'RESET_END_RANGE':
      return { ...state, rangeSelection: { ...state.rangeSelection, endRangeDate: null } };
    default:
      return state;
  }
};
