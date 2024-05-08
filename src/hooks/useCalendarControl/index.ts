import { useEffect, useReducer } from 'react';

import { CURRENT_MONTH, CURRENT_YEAR } from '@/constants/dates';
import { MonthDate } from '@/types/date';
import { CalendarVariant } from '@/types/picker';

import {
  decrementMonth,
  decrementWeek,
  incrementMonth,
  incrementWeek,
  setDate,
  setWeek,
} from './actions';
import { calendarReducer } from './reducer';
import { CalendarState } from './types';
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
      dispatch(setDate(selectedDate));
      dispatch(setWeek(getWeekIndexByDay(selectedDate?.day)));
    }
  }, [selectedDate]);

  const selectNextPeriod = () => {
    if (isWeekMode) {
      dispatch(incrementWeek());
    } else {
      dispatch(incrementMonth());
    }
  };

  const selectPrevPeriod = () => {
    if (isWeekMode) {
      dispatch(decrementWeek());
    } else {
      dispatch(decrementMonth());
    }
  };

  return { calendarMonth, calendarYear, weekIndex, selectNextPeriod, selectPrevPeriod };
};
