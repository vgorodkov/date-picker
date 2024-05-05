import { Rangepicker } from '@/components/Rangepicker';

export class RangepickerService {
  private rangePicker;

  constructor() {
    this.rangePicker = Rangepicker;
  }

  createRangepicker() {
    return this.rangePicker;
  }
}
