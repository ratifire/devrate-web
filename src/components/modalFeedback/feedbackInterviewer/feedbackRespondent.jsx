/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';

const FeedbackRespondent = () => {
  const dispatch = useDispatch();
  const openFeedbackRespondent = useSelector((state) => state.openFeedbackRespondent);
  const handleClose = () => dispatch(closeModal({ modalName: 'openFeedbackRespondent' }));

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openFeedbackRespondent}>

    </ModalLayoutProfile>
  )
}

export default FeedbackRespondent;
