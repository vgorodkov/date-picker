import { MonthDate } from '@/types/date';
import { CalendarVariant, FirstWeekDay } from '@/types/picker';
import { Range } from '@/types/range';

export interface CalendarProps {
  onDateClick: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  firstDayOfWeek?: FirstWeekDay;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  holidayColor?: string;
  calendarVariant?: CalendarVariant;
  withTodo: boolean;
}
