import { CalendarDate, DateLimit, MonthDate } from '@/types/date';

export type CalendarVariant = 'week' | 'month';

export type FirstWeekDay = 'Mo' | 'Su';

export interface PickerProps {
  firstDayOfWeek?: FirstWeekDay;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  addTodo?: (date: MonthDate) => void;
  calendarVariant?: CalendarVariant;
  selectedStartDate?: CalendarDate | null;
  dateLimit?: DateLimit;
}
