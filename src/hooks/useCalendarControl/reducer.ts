import { MONTHS } from '@/constants/dates';

import { CalendarAction, CalendarActionType, CalendarState } from './types';
import { getNextMonth, getPrevMonth } from './utils';

export const calendarReducer = (state: CalendarState, action: CalendarAction): CalendarState => {
  switch (action.type) {
    case CalendarActionType.SET_WEEK: {
      const { weekIndex } = action.payload;

      return { ...state, weekIndex };
    }
    case CalendarActionType.SET_DATE: {
      const { month, year } = action.payload;

      return { ...state, calendarMonth: month, calendarYear: year };
    }
    case CalendarActionType.INCREMENT_MONTH: {
      const isLastMonth = state.calendarMonth === MONTHS.length;

      const nextMonth = isLastMonth ? 1 : state.calendarMonth + 1;
      const nextYear = isLastMonth ? state.calendarYear + 1 : state.calendarYear;

      return { ...state, calendarMonth: nextMonth, calendarYear: nextYear };
    }
    case CalendarActionType.DECREMENT_MONTH: {
      const isFirstMonth = state.calendarMonth === 1;

      const prevMonth = isFirstMonth ? MONTHS.length : state.calendarMonth - 1;
      const prevYear = isFirstMonth ? state.calendarYear - 1 : state.calendarYear;

      return { ...state, calendarMonth: prevMonth, calendarYear: prevYear };
    }
    case CalendarActionType.INCREMENT_WEEK: {
      const isLastWeek = state.weekIndex === 4;
      const isLastMonth = state.calendarMonth === MONTHS.length;

      const nextWeekIndex = isLastWeek ? 0 : state.weekIndex + 1;
      const nextMonth = getNextMonth(state.weekIndex, state.calendarMonth);
      const nextYear = isLastWeek && isLastMonth ? state.calendarYear + 1 : state.calendarYear;

      return {
        ...state,
        weekIndex: nextWeekIndex,
        calendarMonth: nextMonth,
        calendarYear: nextYear,
      };
    }
    case CalendarActionType.DECREMENT_WEEK: {
      const isFirstWeek = state.weekIndex === 0;
      const isFirstMonth = state.calendarMonth === 1;

      const prevWeekIndex = isFirstWeek ? 4 : state.weekIndex - 1;
      const prevMonth = getPrevMonth(state.weekIndex, state.calendarMonth);
      const prevYear = isFirstWeek && isFirstMonth ? state.calendarYear - 1 : state.calendarYear;

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
