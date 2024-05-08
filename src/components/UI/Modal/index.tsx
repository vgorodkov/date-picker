import { MouseEvent, useEffect, useRef } from 'react';

import { ModalContainer, ModalContent } from './styled';
import { ModalProps } from './types';

export const Modal = ({ isActive, closeModal, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isActive && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isActive]);

  return (
    <ModalContainer
      $isActive={isActive}
      ref={modalRef}
      onClick={closeModal}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <ModalContent onClick={onModalClick}>{children}</ModalContent>
    </ModalContainer>
  );
};
