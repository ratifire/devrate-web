import PropTypes from 'prop-types';
import { CandidateFeedback } from '../CandidateFeedback';
import React from 'react';
import { InterviewerFeedback } from '../InterviewerFeedback';

const RenderRoleModal = ({ role }) => {
  const ModalElement = {
    CANDIDATE: CandidateFeedback,
    INTERVIEWER: InterviewerFeedback,
  }[role]

  return <ModalElement />;
}

RenderRoleModal.propTypes = {
  role: PropTypes.string.isRequired,
};

export default RenderRoleModal;
