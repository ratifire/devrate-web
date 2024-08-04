/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';

const FeedbackInterviewer = () => {
  const dispatch = useDispatch();
  const openFeedbackInterviewer = useSelector((state) => state.modal.openFeedbackInterviewer);
  const handleClose = () => dispatch(closeModal({ modalName: 'openFeedbackInterviewer' }));

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openFeedbackInterviewer}>

    </ModalLayoutProfile>
  )
}

export default FeedbackInterviewer;
