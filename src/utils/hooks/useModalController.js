import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router';
import { closeModal, openModal } from '../../redux/modal/modalSlice.js';
import { modalNames } from '../constants/modalNames.js';
import { setStep } from '../../redux/modal/modalStepSlice.js';

export function useModalController() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalData = useSelector((state) => state.modal.data);
  const isClosingRef = useRef(false);

  const openModalHandler = useCallback(
    (modalType, data = null, step = null) => {
      setSearchParams((prev) => {
        const updatedParams = new URLSearchParams(prev);
        updatedParams.set('modal', modalType);
        if (step !== null) updatedParams.set('step', step);
        if (data?.role) updatedParams.set('role', data.role);
        return updatedParams;
      });

      dispatch(openModal({ modalType, data }));
      if (step !== null) dispatch(setStep(step));
    },
    [dispatch, setSearchParams]
  );

  const openModalStepHandler = useCallback(
    (modalStep) => {
      dispatch(setStep(modalStep));

      setSearchParams((prev) => {
        const updatedParams = new URLSearchParams(prev);
        updatedParams.set('step', modalStep);
        return updatedParams;
      });
    },
    [dispatch, setSearchParams]
  );
  const closeModalHandler = useCallback(
    (modalType) => {
      isClosingRef.current = true;
      dispatch(closeModal(modalType));

      setSearchParams((prev) => {
        const updatedParams = new URLSearchParams(prev);
        const params = ['modal', 'step', 'role'];
        params.forEach((param) => updatedParams.delete(param));
        return updatedParams;
      });

      isClosingRef.current = false;
    },
    [dispatch, setSearchParams]
  );

  const toggleModalHandler = useCallback(
    (modalType, step = null) => {
      isOpen ? closeModalHandler(modalType) : openModalHandler(modalType, step);
    },
    [isOpen, closeModalHandler, openModalHandler]
  );

  useEffect(() => {
    const modal = searchParams.get('modal');
    const stepParam = searchParams.get('step');
    const step = Number(stepParam);

    if (Object.values(modalNames).includes(modal) && isOpen) {
      openModalHandler(modal, modalData);

      if (stepParam !== null && !isNaN(step)) openModalStepHandler(step);
    }
  }, [searchParams, isOpen]);
  return {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    stepHandler: openModalStepHandler,
    toggleModal: toggleModalHandler,
  };
}
