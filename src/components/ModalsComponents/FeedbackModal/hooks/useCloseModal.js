import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../../redux/modal/modalSlice';

const useCloseModal = ({ modalName }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.modal[modalName]);
  const handleCloseModal = () => dispatch(closeModal({ modalName }));

  return {
    handleCloseModal,
    isOpenModal,
  };
};

export default useCloseModal;
