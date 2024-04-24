import { FirstWeekDay } from '@/types/date';

export interface CalendarHeaderProps {
  selectPrevMonth: () => void;
  selectNextMonth: () => void;
  calendarYear: number;
  calendarMonthName: string;
  firstDayOfWeek: FirstWeekDay;
}
