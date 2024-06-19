import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AddSpecializationModal } from '../../components/SpecializationModals';

const SpecializationTemplate = ({ children }) => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <AddSpecializationModal/>}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;