import { useEffect, useReducer } from 'react';

import { CalendarActionType, CalendarState } from '@/components/Calendar/types';
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR, WEEK_DAYS } from '@/constants/dates';
import { MonthDate } from '@/types/date';
import { CalendarVariant } from '@/types/picker';

import { calendarReducer } from './reducer';

export const useCalendarControl = (
  selectedDate: MonthDate | null,
  calendarVariant: CalendarVariant
) => {
  const initialState: CalendarState = {
    calendarMonth: selectedDate?.month ?? CURRENT_MONTH,
    calendarYear: selectedDate?.year ?? CURRENT_YEAR,
    weekIndex: Math.floor((selectedDate?.day ?? CURRENT_DAY) / WEEK_DAYS.length),
  };

  const [{ calendarMonth, calendarYear, weekIndex }, dispatch] = useReducer(
    calendarReducer,
    initialState
  );

  useEffect(() => {
    if (selectedDate) {
      dispatch({ type: CalendarActionType.SET_DATE, payload: selectedDate });
      dispatch({
        type: CalendarActionType.SET_WEEK,
        payload: {
          weekIndex: Math.floor(((selectedDate?.day ?? CURRENT_DAY) + 1) / WEEK_DAYS.length),
        },
      });
    }
  }, [selectedDate]);

  const isWeekMode = calendarVariant === 'week';

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
