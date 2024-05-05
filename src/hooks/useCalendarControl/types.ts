import { MonthDate } from '@/types/date';

export interface CalendarState {
  calendarMonth: number;
  calendarYear: number;
  weekIndex: number;
}

export enum CalendarActionType {
  SET_DATE,
  SET_WEEK,
  INCREMENT_MONTH,
  DECREMENT_MONTH,
  INCREMENT_WEEK,
  DECREMENT_WEEK,
}

export type CalendarAction =
  | { type: CalendarActionType.SET_WEEK; payload: { weekIndex: number } }
  | { type: CalendarActionType.SET_DATE; payload: MonthDate }
  | { type: CalendarActionType.INCREMENT_MONTH }
  | { type: CalendarActionType.DECREMENT_MONTH }
  | { type: CalendarActionType.INCREMENT_WEEK }
  | { type: CalendarActionType.DECREMENT_WEEK };
