import PropTypes from 'prop-types';
import { ErrorComponent } from '../../../../../UI/Exceptions';
import { FeedbackModalSkeleton } from '../../../../../UI/Skeleton';
import { CandidateFeedback } from '../CandidateFeedback';
import { InterviewerFeedback } from '../InterviewerFeedback';

const RoleBasedFeedbackModal = ({ role, isFetching, isError }) => {
  if (isFetching) {
    return <FeedbackModalSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const ModalElement =
    {
      CANDIDATE: CandidateFeedback,
      INTERVIEWER: InterviewerFeedback,
    }[role] ?? ErrorComponent;

  return <ModalElement />;
};

RoleBasedFeedbackModal.propTypes = {
  role: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default RoleBasedFeedbackModal;
