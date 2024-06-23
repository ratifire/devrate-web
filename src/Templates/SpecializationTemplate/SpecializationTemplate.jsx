import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { AddSpecializationModal, SkillsModal } from '../../components/SpecializationModals/';
import { closeModal } from '../../redux/modal/modalSlice';
import { Box, Modal } from '@mui/material';
import { styles } from './../../components/SpecializationModals/SkillsModal/SkillsModal.styles';

const SpecializationTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);

  const handleModalClose = (modalName) => {
    dispatch(closeModal({ modalName }));
  };

  return (
    <div className='specialization'>
      {children}
      {openAddSpecialization && <AddSpecializationModal />}
      <Modal open={openSkillsModal} onClose={() => handleModalClose('openSkillsModal')}>
        <Box sx={styles.modalContent}>
          <SkillsModal />
        </Box>
      </Modal>
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;
