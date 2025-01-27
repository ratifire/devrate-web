import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../redux/modal/modalSlice.js';

export function useModalQueryParams() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const openModalHandler = (modalType) => {
    dispatch(openModal({ modalType, data: null }));
  };

  // TODO add modalType
  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const toggleModalHandler = (modalType) => {
    if (isOpen) {
      closeModalHandler(modalType);
    } else {
      openModalHandler(modalType);
    }
  };

  return {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    toggleModal: toggleModalHandler,
  };
}
