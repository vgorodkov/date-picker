import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Datepicker } from '@/components/Datepicker';
import { colors } from '@/constants/colors';
import { withHolidays } from '@/hocs';

describe('DatepickerWithHolidays component', () => {
  it('renders DatepickerWithHolidays with DateInput component correctly', async () => {
    const holidays = [{ day: 1, month: 5, year: 2024 }];
    const DatepickerWithHolidays = withHolidays(Datepicker, holidays);
    render(<DatepickerWithHolidays calendarVariant="month" />);

    expect(await screen.findByText(/date/i)).toBeInTheDocument();
  });
  it('highlights defined holidays', async () => {
    const today = new Date();
    const dayToHighlight = 5;
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const holidays = [{ day: dayToHighlight, month: currentMonth, year: currentYear }];
    const DatepickerWithHolidays = withHolidays(Datepicker, holidays);
    const { getByTestId } = render(<DatepickerWithHolidays calendarVariant="month" />);
    const dateInputContainer = getByTestId('Date-input-container');
    fireEvent.click(dateInputContainer);
    await waitFor(() => {
      const firstDate = getByTestId(`calendar-date-${dayToHighlight}-${currentMonth}`);
      expect(firstDate).toHaveStyle(`color: ${colors.holidayText}`);
    });
  });
});
