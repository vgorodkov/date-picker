import { FC, useState } from 'react';

import { AppWrapper } from '@/components/AppWrapper';
import { TodoModal } from '@/components/TodoModal';
import { Modal } from '@/components/UI/Modal';
import { MonthDate } from '@/types/date';
import { PickerProps } from '@/types/picker';

export const withTodos = (WrappedComponent: FC<PickerProps>) => {
  return (props: PickerProps) => {
    const [selectedDate, setSelectedDate] = useState<MonthDate | null>(null);
    const [isModalActive, setIsModalActive] = useState(false);

    const addTodo = (todoDate: MonthDate) => {
      setSelectedDate(todoDate);
      setIsModalActive(true);
    };

    const closeModal = () => {
      setIsModalActive(false);
    };
    return (
      <>
        <AppWrapper>
          <Modal isActive={isModalActive} closeModal={closeModal}>
            {selectedDate && <TodoModal selectedDate={selectedDate} key={selectedDate.timestamp} />}
          </Modal>
        </AppWrapper>
        <WrappedComponent {...props} addTodo={addTodo} />
      </>
    );
  };
};
