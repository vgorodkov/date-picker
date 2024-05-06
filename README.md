# Datepicker

A library to work with calendar

## Installation

Install with npm

```bash
npm install @vgorodkov/date-picker
```

## Usage/Examples

### Datepicker service

```javascript
import { DatepickerService, withHolidays, withTodos } from '@vgorodkov/date-picker';

function App() {
  const datepickerService = new DatepickerService();
  datepickerService.addDecorator(withTodos);
  datepickerService.addDecorator(withHolidays, [{ day: 3, month: 5, year: 2024 }]);
  const Datepicker = datepickerService.createDatepicker();

  return <Datepicker />;
}
```

### Datepicker

```javascript
import { Datepicker } from '@vgorodkov/date-picker';

function App() {
  const dateLimit = {
    max: { day: 1, month: 1, year: 2020 },
    min: { day: 1, month: 1, year: 2030 },
  };

  return (
    <Datepicker
      firstDayOfWeek="Su"
      showHolidays={false}
      calendarVariant="month"
      dateLimit={dateLimit}
    />
  );
}
```

### Rangepicker

```javascript
import { Rangepicker } from '@vgorodkov/date-picker';

function App() {
  const dateLimit = {
    max: { day: 1, month: 1, year: 2020 },
    min: { day: 1, month: 1, year: 2030 },
  };

  return (
    <Rangepicker
      firstDayOfWeek="Su"
      showHolidays={false}
      calendarVariant="month"
      dateLimit={dateLimit}
    />
  );
}
```

### Rangepicker service

```javascript
import { RangepickerService } from '@vgorodkov/date-picker';

function App() {
  const rangepickerService = new RangepickerService();
  const Rangepicker = rangepickerService.createRangepicker();

  return <Rangepicker />;
}
```
