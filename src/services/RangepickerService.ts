import { Rangepicker } from '@/components/Rangepicker';

export class DatepickerService {
  private rangePicker;

  constructor() {
    this.rangePicker = Rangepicker;
  }

  addDecorator(decorator) {
    this.rangePicker = decorator(this.rangePicker);
  }

  createRangepicker() {
    return this.rangePicker;
  }
}
