import { Datepicker } from '@/components/Datepicker';

export class DatepickerService {
  private datePicker;

  constructor() {
    this.datePicker = Datepicker;
  }

  addDecorator(decorator) {
    this.datePicker = decorator(this.datePicker);
  }

  createDatepicker() {
    return this.datePicker;
  }
}
