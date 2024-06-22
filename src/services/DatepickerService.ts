import { Datepicker } from '@/components/Datepicker';
import { CalendarDate } from '@/types/date';

interface Decorator {
  (datepicker: typeof Datepicker, args?: CalendarDate[]): typeof Datepicker;
}

export class DatepickerService {
  private datePicker;

  constructor() {
    this.datePicker = Datepicker;
  }

  addDecorator(decorator: Decorator, args?: CalendarDate[]) {
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
