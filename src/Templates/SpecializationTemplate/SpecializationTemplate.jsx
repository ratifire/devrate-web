import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SpecializationModal } from '../../components/SpecializationModals';
import ScheduleInterviewModal from '../../components/SpecializationModals/ScheduleInterviewModal';
import SkillsModal from '../../components/SpecializationModals/SkillsModal';
import SoftSkillsModal from '../../components/SpecializationModals/SoftSkillsModal';

const SpecializationTemplate = ({ children }) => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const openSoftSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);

  console.log('openSoftSkillsModal', openSoftSkillsModal);

  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <SpecializationModal/>}
      {scheduleInterviewIsOpen && <ScheduleInterviewModal />}
      {openSoftSkillsModal && <SoftSkillsModal />}
      {openSkillsModal && <SkillsModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;