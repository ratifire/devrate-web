import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SpecializationModal } from '../../components/SpecializationModals';
import ScheduleInterviewModal from '../../components/SpecializationModals/ScheduleInterviewModal';

const SpecializationTemplate = ({ children }) => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <SpecializationModal/>}
      {scheduleInterviewIsOpen && <ScheduleInterviewModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;