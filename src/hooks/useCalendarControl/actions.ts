import { MonthDate } from '@/types/date';

import { CalendarAction, CalendarActionType } from './types';

export const setWeek = (weekIndex: number): CalendarAction => ({
  type: CalendarActionType.SET_WEEK,
  payload: { weekIndex },
});

export const setDate = (selectedDate: MonthDate): CalendarAction => ({
  type: CalendarActionType.SET_DATE,
  payload: selectedDate,
});

export const incrementMonth = (): CalendarAction => ({
  type: CalendarActionType.INCREMENT_MONTH,
});

export const decrementMonth = (): CalendarAction => ({
  type: CalendarActionType.DECREMENT_MONTH,
});

export const incrementWeek = (): CalendarAction => ({
  type: CalendarActionType.INCREMENT_WEEK,
});

export const decrementWeek = (): CalendarAction => ({
  type: CalendarActionType.DECREMENT_WEEK,
});
