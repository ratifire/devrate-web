import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AddSpecializationModal } from '../../components/SpecializationModals';
import ScheduleInterview from '../../components/SpecializationModals/ScheduleInterview';

const SpecializationTemplate = ({ children }) => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <AddSpecializationModal/>}
      {scheduleInterviewIsOpen && <ScheduleInterview />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;