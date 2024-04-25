import { FirstWeekDay } from '@/types/date';

export interface CalendarHeaderProps {
  selectPrevPeriod: () => void;
  selectNextPeriod: () => void;
  calendarYear: number;
  calendarMonthName: string;
  firstDayOfWeek: FirstWeekDay;
}
