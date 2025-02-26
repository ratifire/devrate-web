import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice.js';
import { setStep } from '@redux/slices/modal/modalStepSlice.js';
import { modalNames } from '../constants/modalNames.js';

export const useModalController = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, data: modalData } = useSelector((state) => state.modal);

  const openModalHandler = useCallback(
    (modalType, data = null, step = null) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('modal', modalType);
      if (step !== null) searchParams.set('step', step);
      if (data?.role) searchParams.set('role', data.role);

      navigate({ search: searchParams.toString() }, { state: location.state });

      dispatch(openModal({ modalType, data }));
      if (step !== null) dispatch(setStep(step));
    },
    [location.search, location.state]
  );

  const openModalStepHandler = useCallback(
    (modalStep) => {
      dispatch(setStep(modalStep));

      const searchParams = new URLSearchParams(location.search);
      searchParams.set('step', modalStep);

      navigate({ search: searchParams.toString() }, { state: location.state });
    },
    [location.search, location.state]
  );

  const closeModalHandler = useCallback(
    (modalType) => {
      dispatch(closeModal(modalType));

      const searchParams = new URLSearchParams(location.search);
      const params = ['modal', 'step', 'role'];
      params.forEach((param) => searchParams.delete(param));

      navigate({ search: searchParams.toString() }, { state: location.state });
    },
    [location.search, location.state]
  );

  const toggleModalHandler = useCallback(
    (modalType, step = null) => {
      isOpen ? closeModalHandler(modalType) : openModalHandler(modalType, step);
    },
    [isOpen, closeModalHandler, openModalHandler]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const modal = searchParams.get('modal');
    const stepParam = searchParams.get('step');
    const step = Number(stepParam);

    if (isOpen && Object.values(modalNames).includes(modal)) {
      dispatch(openModal({ modalType: modal, data: modalData }));

      if (stepParam !== null && !isNaN(step)) {
        dispatch(setStep(step));
      }
    }
  }, []);

  return {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    stepHandler: openModalStepHandler,
    toggleModal: toggleModalHandler,
  };
};
