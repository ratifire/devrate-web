import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AddSpecializationModal } from '../../components/SpecializationModals';
import ScheduleInterviewModal from '../../components/SpecializationModals/ScheduleInterviewModal';

const SpecializationTemplate = ({ children }) => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <AddSpecializationModal/>}
      {scheduleInterviewIsOpen && <ScheduleInterviewModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;