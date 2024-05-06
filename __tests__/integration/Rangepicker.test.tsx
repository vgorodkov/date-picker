import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Rangepicker } from '@/components/Rangepicker';
import { CURRENT_MONTH } from '@/constants/dates';

describe('Rangepicker Component', () => {
  it('renders DateInput components correctly', async () => {
    render(<Rangepicker calendarVariant="month" />);

    expect(await screen.findByText(/From/i)).toBeInTheDocument();
    expect(await screen.findByText(/To/i)).toBeInTheDocument();
  });

  test('opens Calendar component on From DateInput click', async () => {
    const { getByTestId } = render(<Rangepicker calendarVariant="month" />);
    const fromDateInputContainer = getByTestId('From-input-container');
    fireEvent.click(fromDateInputContainer);
    await waitFor(() => {
      const calendar = getByTestId('calendar-component');
      expect(calendar).toBeInTheDocument();
    });
  });

  test('selects range on Calendar date click', async () => {
    const { getByTestId } = render(<Rangepicker calendarVariant="month" />);
    const fromDateInputContainer = getByTestId('From-input-container');
    const toDateInputContainer = getByTestId('To-input-container');
    fireEvent.click(fromDateInputContainer);
    await waitFor(() => {
      const firstDate = getByTestId(`calendar-date-1-${CURRENT_MONTH}`);
      fireEvent.click(firstDate);
    });
    fireEvent.click(toDateInputContainer);
    await waitFor(() => {
      const secondDate = getByTestId(`calendar-date-2-${CURRENT_MONTH}`);
      fireEvent.click(secondDate);
    });
    const selectedFromDate = fromDateInputContainer.querySelector('input')?.value;
    const selectedToDate = toDateInputContainer.querySelector('input')?.value;
    expect(selectedFromDate).toBeTruthy();
    expect(selectedToDate).toBeTruthy();
  });
  test('failts to select invalid range on Calendar date click', async () => {
    const { getByTestId } = render(<Rangepicker calendarVariant="month" />);
    const fromDateInputContainer = getByTestId('From-input-container');
    const toDateInputContainer = getByTestId('To-input-container');
    fireEvent.click(fromDateInputContainer);
    await waitFor(() => {
      const fromDate = getByTestId(`calendar-date-5-${CURRENT_MONTH}`);
      fireEvent.click(fromDate);
    });
    fireEvent.click(toDateInputContainer);
    await waitFor(() => {
      const toDate = getByTestId(`calendar-date-1-${CURRENT_MONTH}`);
      fireEvent.click(toDate);
    });
    const selectedFromDate = fromDateInputContainer.querySelector('input')?.value;
    const selectedToDate = toDateInputContainer.querySelector('input')?.value;
    expect(selectedFromDate).toBeTruthy();
    expect(selectedToDate).toEqual('DD/MM/YYYY');
  });
  it('matches the snapshot', () => {
    const component = render(<Rangepicker calendarVariant="month" />);
    expect(component).toMatchSnapshot();
  });
});
