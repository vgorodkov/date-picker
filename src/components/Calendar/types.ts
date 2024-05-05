import { MonthDate } from '@/types/date';
import { CalendarVariant, FirstWeekDay } from '@/types/picker';
import { Range } from '@/types/range';

export interface CalendarProps {
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  firstDayOfWeek?: FirstWeekDay;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  calendarVariant?: CalendarVariant;
  withTodo: boolean;
}

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
