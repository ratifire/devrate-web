import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';


const AddSpecializationModal = () => {
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal({ modalName: 'openAddSpecialization' }));

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openAddSpecialization}>
      <div>Modalka</div>
    </ModalLayoutProfile>);
};

export default AddSpecializationModal;