import { Datepicker } from '@/components/Datepicker';
import { withHolidays, withTodos } from '@/hocs';
import { CalendarDate } from '@/types/date';

export class DatepickerService {
  private datePicker;

  constructor() {
    this.datePicker = Datepicker;
  }

  addDecorator(decorator: typeof withTodos | typeof withHolidays, args?: CalendarDate[]) {
    if (args) {
      this.datePicker = decorator(this.datePicker, args);
    } else {
      this.datePicker = decorator(this.datePicker);
    }
  }

  createDatepicker() {
    return this.datePicker;
  }
}
