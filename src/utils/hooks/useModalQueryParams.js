import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { closeModal, openModal } from '../../redux/modal/modalSlice.js';
import { modalNames } from '../constants/modalNames.js';

export function useModalQueryParams() {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    const modal = searchParams.get('modal');
    if (Object.values(modalNames).includes(modal)) {
      openModalHandler(modal);
    }
  }, []);

  const openModalHandler = (modalType) => {
    dispatch(openModal({ modalType, data: null }));
    // console.log(modalType);
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
