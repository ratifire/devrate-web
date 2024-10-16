import PropTypes from 'prop-types';
import { CandidateFeedback } from '../CandidateFeedback';
import React from 'react';
import { InterviewerFeedback } from '../InterviewerFeedback';
import { FeedbackModalSkeleton } from '../../../../UI/Skeleton';
import { ErrorComponent } from '../../../../UI/Exceptions';

const RenderRoleModal = ({ role, data, isFetching, isError }) => {
  if (isFetching) {
    return <FeedbackModalSkeleton />;
  }

  if (isError) {
    return <ErrorComponent/>;
  }

  const ModalElement = {
    CANDIDATE: CandidateFeedback,
    INTERVIEWER: InterviewerFeedback,
  }[role] ?? ErrorComponent;

  return <ModalElement data={data} />;
}

RenderRoleModal.propTypes = {
  role: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    interviewStartTime: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default RenderRoleModal;
