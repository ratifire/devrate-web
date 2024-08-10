/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useCloseModal } from '../hooks';

const InterviewerFeedback = () => {
  const { handleCloseModal, isOpenModal } = useCloseModal({ modalName: 'openFeedbackRespondent' })

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={isOpenModal}>

    </ModalLayoutProfile>
  )
}

export default InterviewerFeedback;
