import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SpecializationModal } from '../../components/SpecializationModals';
import ScheduleInterviewModal from '../../components/SpecializationModals/ScheduleInterviewModal';
import SkillsModal from '../../components/SpecializationModals/SkillsModal';

const SpecializationTemplate = ({ children }) => {
  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);

  return (
    <div className='specialization'>
      {children}
      {openSpecialization && <SpecializationModal/>}
      {scheduleInterviewIsOpen && <ScheduleInterviewModal />}
      {openSkillsModal && <SkillsModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;