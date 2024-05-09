import { FirstWeekDay } from '@/types/picker';

export interface CalendarHeaderProps {
  selectPrevPeriod: () => void;
  selectNextPeriod: () => void;
  calendarYear: number;
  calendarMonthName: string;
  firstDayOfWeek: FirstWeekDay;
}
