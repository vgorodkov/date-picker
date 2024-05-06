import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Datepicker } from '@/components/Datepicker';
import { CURRENT_MONTH } from '@/constants/dates';
import { withTodos } from '@/hocs';

describe('DatepickerWithTodos component', () => {
  it('renders DatepickerWithTodos with DateInput component correctly', async () => {
    const DatepickerWithTodos = withTodos(Datepicker);
    render(<DatepickerWithTodos calendarVariant="month" />);

    expect(await screen.findByText(/date/i)).toBeInTheDocument();
  });

  it('opens TodoModal on Date click and adds todo', async () => {
    const DatepickerWithTodos = withTodos(Datepicker);
    const { getByTestId, queryByTestId } = render(<DatepickerWithTodos calendarVariant="month" />);

    expect(await screen.findByText(/date/i)).toBeInTheDocument();
    const dateInputContainer = getByTestId('Date-input-container');
    fireEvent.click(dateInputContainer);
    await waitFor(() => {
      const firstDate = getByTestId(`calendar-date-1-${CURRENT_MONTH}`);
      fireEvent.click(firstDate);
    });
    const todoModal = getByTestId('todo-modal');
    const todoModalInput = getByTestId('todo-modal-input');
    const todoModalAddBtn = getByTestId('todo-modal-add-btn');
    const todoDummy = getByTestId('todo-dummy');
    const todoList = queryByTestId('todo-list');
    expect(todoList).not.toBeInTheDocument();
    expect(todoDummy).toBeInTheDocument();
    expect(todoModal).toBeInTheDocument();
    expect(todoModalInput).toBeInTheDocument();
    expect(todoModalAddBtn).toBeInTheDocument();
    fireEvent.change(todoModalInput, { target: { value: 'My todo' } });
    expect(todoModalInput).toHaveValue('My todo');

    fireEvent.click(todoModalAddBtn);
    expect(todoModalInput).toHaveValue('');
  });
});
