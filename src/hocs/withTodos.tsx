import { FC, useState } from 'react';

import { TodoModal } from '@/components/TodoModal';
import { Modal } from '@/components/UI/Modal';
import { Wrapper } from '@/components/Wrapper';
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
        <Wrapper>
          <Modal isActive={isModalActive} closeModal={closeModal}>
            {selectedDate && <TodoModal selectedDate={selectedDate} />}
          </Modal>
        </Wrapper>
        <WrappedComponent {...props} addTodo={addTodo} />
      </>
    );
  };
};
