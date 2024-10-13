import PropTypes from 'prop-types';
import { CandidateFeedback } from '../CandidateFeedback';
import React from 'react';
import { InterviewerFeedback } from '../InterviewerFeedback';

const RenderRoleModal = ({ role, data }) => {
  const ModalElement = {
    CANDIDATE: CandidateFeedback,
    INTERVIEWER: InterviewerFeedback,
  }[role]

  return <ModalElement data={data} />;
}

RenderRoleModal.propTypes = {
  role: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default RenderRoleModal;
