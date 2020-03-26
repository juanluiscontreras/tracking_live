import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import styles from './styles.module.scss';

const modalRoot = document.getElementById('overlay-root');
const stopPropagation = (
  event: React.MouseEvent<
  HTMLDivElement,
  MouseEvent>,
) => event.stopPropagation();

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    width,
    height,
    isOpen,
    onClose,
  } = props;
  const [element] = useState(document.createElement('div'));
  const modalStyles = {
    width,
    height,
  };
  const modalContainerClases = [
    styles.modalContainer,
    isOpen ? styles.modalShow : '',
  ].join(' ');

  const modalClases = [
    styles.modal,
    isOpen ? styles.modalContent : '',
  ].join(' ');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => modalRoot.removeChild(element);
  }, [element]);

  const modalStructure = useCallback(() => (
    <div
      className={modalContainerClases}
      onClick={onClose}
      role="presentation"
    >
      <div
        onClick={stopPropagation}
        className={modalClases}
        style={modalStyles}
        role="presentation"
      >
        {children}
      </div>
    </div>
  ), [modalStyles, children, modalClases, modalContainerClases, onClose]);

  return createPortal(
    modalStructure(),
    element,
  );
};

export default Modal;
