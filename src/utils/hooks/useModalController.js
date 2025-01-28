import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { closeModal, openModal } from '../../redux/modal/modalSlice.js';
import { modalNames } from '../constants/modalNames.js';
import { setStep } from '../../redux/modal/modalStepSlice.js';

export function useModalController() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    const modal = searchParams.get('modal');
    const step = Number(searchParams.get('step'));

    if (Object.values(modalNames).includes(modal)) {
      openModalHandler(modal);
      if (step) openModalStepHandler(step);
    }
  }, [searchParams]);

  // const openModalHandler = (modalType, step = null) => {
  //   const updatedParams = new URLSearchParams();
  //   updatedParams.set('modal', modalType);
  //   updatedParams.set('open', true);
  //   if (step !== null) updatedParams.set('step', step);
  //
  //   setSearchParams(updatedParams);
  //
  //   dispatch(openModal({ modalType, data: null }));
  //   if (step !== null) {
  //     dispatch(setStep(step));
  //   }
  // };
  const openModalHandler = (modalType, step = null) => {
    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev); // Сохраняем существующие параметры
      updatedParams.set('modal', modalType);
      updatedParams.set('open', true);
      if (step !== null) updatedParams.set('step', step);
      return updatedParams;
    });

    dispatch(openModal({ modalType, data: null }));
    if (step !== null) {
      dispatch(setStep(step));
    }
  };

  const openModalStepHandler = (modalStep) => {
    dispatch(setStep(modalStep));

    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev);
      updatedParams.set('step', modalStep);
      return updatedParams;
    });
  };

  const closeModalHandler = (modalType) => {
    dispatch(closeModal(modalType));

    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev);
      updatedParams.delete('modal');
      updatedParams.delete('step');
      return updatedParams;
    });
  };

  const toggleModalHandler = (modalType, step = null) => {
    if (isOpen) {
      closeModalHandler(modalType);
    } else {
      openModalHandler(modalType, step);
    }
  };

  return {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    stepHadler: openModalStepHandler,
    toggleModal: toggleModalHandler,
  };
}
