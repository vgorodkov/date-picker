import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Datepicker } from '@/components/Datepicker';
import { CURRENT_MONTH } from '@/constants/dates';

describe('Datepicker component', () => {
  it('renders DateInput component correctly', async () => {
    render(<Datepicker calendarVariant="month" />);

    expect(await screen.findByText(/date/i)).toBeInTheDocument();
  });
  it('opens Calendar component on DateInput click', async () => {
    const { getByTestId } = render(<Datepicker calendarVariant="month" />);
    const dateInputContainer = getByTestId('Date-input-container');
    fireEvent.click(dateInputContainer);
    await waitFor(() => {
      const calendar = getByTestId('calendar-component');
      expect(calendar).toBeInTheDocument();
    });
  });
  it('selects date on Calendar date click', async () => {
    const { getByTestId } = render(<Datepicker calendarVariant="month" />);
    const dateInputContainer = getByTestId('Date-input-container');
    fireEvent.click(dateInputContainer);
    await waitFor(() => {
      const firstDate = getByTestId(`calendar-date-1-${CURRENT_MONTH}`);
      fireEvent.click(firstDate);
    });
    const selectedDate = dateInputContainer.querySelector('input')?.value;
    expect(selectedDate).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const component = render(<Datepicker calendarVariant="month" />);
    expect(component).toMatchSnapshot();
  });
});
