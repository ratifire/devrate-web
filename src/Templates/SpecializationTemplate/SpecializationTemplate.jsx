import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SoftSkillsModal, HardSkillsModal, ScheduleInterviewModal, SpecializationModal } from '../../components/ModalsComponents/SpecializationModals';

const MemoizedSpecializationModal = memo(SpecializationModal);
const MemoizedScheduleInterviewModal = memo(ScheduleInterviewModal);
const MemoizedSoftSkillsModal = memo(SoftSkillsModal);
const MemoizedHardSkillsModal = memo(HardSkillsModal);

const SpecializationTemplate = ({ children }) => {
  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const openSoftSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);

  return (
    <div className='specialization'>
      {children}
      {openSpecialization && <MemoizedSpecializationModal />}
      {scheduleInterviewIsOpen && <MemoizedScheduleInterviewModal />}
      {openSoftSkillsModal && <MemoizedSoftSkillsModal />}
      {openSkillsModal && <MemoizedHardSkillsModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;
