import { useEffect, useReducer } from 'react';

import { CURRENT_MONTH, CURRENT_YEAR } from '@/constants/dates';
import { MonthDate } from '@/types/date';
import { CalendarVariant } from '@/types/picker';

import { calendarReducer } from './reducer';
import { CalendarActionType, CalendarState } from './types';
import { getWeekIndexByDay } from './utils';

export const useCalendarControl = (
  selectedDate: MonthDate | null,
  calendarVariant: CalendarVariant
) => {
  const initialState: CalendarState = {
    calendarMonth: selectedDate?.month ?? CURRENT_MONTH,
    calendarYear: selectedDate?.year ?? CURRENT_YEAR,
    weekIndex: getWeekIndexByDay(selectedDate?.day),
  };

  const [{ calendarMonth, calendarYear, weekIndex }, dispatch] = useReducer(
    calendarReducer,
    initialState
  );

  const isWeekMode = calendarVariant === 'week';

  useEffect(() => {
    if (selectedDate) {
      dispatch({ type: CalendarActionType.SET_DATE, payload: selectedDate });
      dispatch({
        type: CalendarActionType.SET_WEEK,
        payload: {
          weekIndex: getWeekIndexByDay(selectedDate?.day),
        },
      });
    }
  }, [selectedDate]);

  const selectNextPeriod = () => {
    if (isWeekMode) {
      dispatch({ type: CalendarActionType.INCREMENT_WEEK });
    } else {
      dispatch({ type: CalendarActionType.INCREMENT_MONTH });
    }
  };

  const selectPrevPeriod = () => {
    if (isWeekMode) {
      dispatch({ type: CalendarActionType.DECREMENT_WEEK });
    } else {
      dispatch({ type: CalendarActionType.DECREMENT_MONTH });
    }
  };

  return { calendarMonth, calendarYear, weekIndex, selectNextPeriod, selectPrevPeriod };
};
