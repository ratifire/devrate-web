import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SoftSkillsModal, HardSkillsModal, ScheduleInterviewModal, SpecializationModal } from '../../components/ModalsComponents/SpecializationModals';

const SpecializationTemplate = ({ children }) => {
  const modalData = useSelector((state) => state.modal.modalData);
  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const openSoftSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);

  const [activeMastery, setActiveMastery] = useState();

  return (
    <div className='specialization'>
      {children}
      {openSpecialization && <SpecializationModal setActiveMastery={setActiveMastery} />}
      {scheduleInterviewIsOpen && <ScheduleInterviewModal {...(modalData || {})} />}
      {openSoftSkillsModal && <SoftSkillsModal />}
      {openSkillsModal && <HardSkillsModal activeMastery={activeMastery} setActiveMastery={setActiveMastery} />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;
