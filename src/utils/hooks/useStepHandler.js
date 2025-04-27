import { useDispatch, useSelector } from 'react-redux';
import { useModalController } from '@utils/hooks/useModalController.js';
import { nextStep, prevStep } from '@redux/slices/modal/modalStepSlice.js';
import { useEffect } from 'react';

const useStepHandler = () => {
  const step = useSelector((state) => state.modalStep.step);
  const dispatch = useDispatch();
  const { stepHandler } = useModalController();

  useEffect(() => {
    stepHandler(step);
  }, [step]);

  const handleNext = () => dispatch(nextStep());

  const handlePrev = () => dispatch(prevStep());

  return {
    step,
    handleNext,
    handlePrev,
  };
};

export default useStepHandler;
