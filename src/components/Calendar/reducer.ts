import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR, MONTHS, WEEK_DAYS } from '@/constants/dates';

import { CalendarAction, CalendarState } from './types';

export const initialState: CalendarState = {
  calendarMonth: CURRENT_MONTH,
  calendarYear: CURRENT_YEAR,
  weekIndex: Math.floor(CURRENT_DAY / WEEK_DAYS.length),
};

const getNextMonth = (weekIndex: number, calendarMonth: number): number => {
  if (weekIndex === 4) {
    return calendarMonth === MONTHS.length ? 1 : calendarMonth + 1;
  }
  return calendarMonth;
};

const getPrevMonth = (weekIndex: number, calendarMonth: number): number => {
  if (weekIndex === 0) {
    return calendarMonth === 1 ? MONTHS.length : calendarMonth - 1;
  }
  return calendarMonth;
};

export const calendarReducer = (state: CalendarState, action: CalendarAction): CalendarState => {
  switch (action.type) {
    case 'INCREMENT_MONTH': {
      const nextMonth = state.calendarMonth === MONTHS.length ? 1 : state.calendarMonth + 1;
      const nextYear =
        state.calendarMonth === MONTHS.length ? state.calendarYear + 1 : state.calendarYear;
      return { ...state, calendarMonth: nextMonth, calendarYear: nextYear };
    }
    case 'DECREMENT_MONTH': {
      const prevMonth = state.calendarMonth === 1 ? MONTHS.length : state.calendarMonth - 1;
      const prevYear = state.calendarMonth === 1 ? state.calendarYear - 1 : state.calendarYear;
      return { ...state, calendarMonth: prevMonth, calendarYear: prevYear };
    }
    case 'INCREMENT_WEEK': {
      const nextWeekIndex = state.weekIndex === 4 ? 0 : state.weekIndex + 1;
      const nextMonth = getNextMonth(state.weekIndex, state.calendarMonth);
      const nextYear =
        state.weekIndex === 4 && state.calendarMonth === MONTHS.length
          ? state.calendarYear + 1
          : state.calendarYear;
      return {
        ...state,
        weekIndex: nextWeekIndex,
        calendarMonth: nextMonth,
        calendarYear: nextYear,
      };
    }
    case 'DECREMENT_WEEK': {
      const prevWeekIndex = state.weekIndex === 0 ? 4 : state.weekIndex - 1;
      const prevMonth = getPrevMonth(state.weekIndex, state.calendarMonth);
      const prevYear =
        state.weekIndex === 0 && state.calendarMonth === 1
          ? state.calendarYear - 1
          : state.calendarYear;
      return {
        ...state,
        weekIndex: prevWeekIndex,
        calendarMonth: prevMonth,
        calendarYear: prevYear,
      };
    }
    default:
      return state;
  }
};
