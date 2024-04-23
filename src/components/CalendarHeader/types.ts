export interface CalendarHeaderProps {
  selectPrevMonth: () => void;
  selectNextMonth: () => void;
  calendarYear: number;
  calendarMonthName: string;
  firstDayOfWeek: 'monday' | 'sunday';
}
