# Datepicker

A library to work with calendar

## Features

- Datepicker.
- Rangepicker.
- Holidays highlighting.
- Week / Month display mode.
- Task adding on date press.
- Date limit.
- Service for datepicker creation.

## Installation

```bash
git clone https://github.com/vgorodkov/date-picker.git
cd date-picker
npm install # or any other installation command
```

## Deploy
Storybook deploy on Chromatic: https://6676ced84d31efe4c7e8dac6-rextkngxsn.chromatic.com/?path=/story/datepicker--basic

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
