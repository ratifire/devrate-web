import { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  SoftSkillsModal,
  HardSkillsModal,
  ScheduleInterviewModal,
  SpecializationModal,
} from '../../components/ModalsComponents/SpecializationModals';
import ConfirmDeleteSpecializationModal from '../../components/ModalsComponents/SpecializationModals/ConfirmDeleteSpecializationModal/index.js';

const MemoizedSpecializationModal = memo(SpecializationModal);
const MemoizedScheduleInterviewModal = memo(ScheduleInterviewModal);
const MemoizedSoftSkillsModal = memo(SoftSkillsModal);
const MemoizedHardSkillsModal = memo(HardSkillsModal);
const MemoConfirmDeleteSpecializationModal = memo(ConfirmDeleteSpecializationModal);

const SpecializationTemplate = ({ children }) => {
  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const scheduleInterviewIsOpen = useSelector((state) => state.modal.scheduleInterview);
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const openSoftSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);
  const openConfirmDeleteSpecialization = useSelector((state) => state.modal.openConfirmDeleteSpecialization);

  return (
    <div className='specialization'>
      {children}
      {openSpecialization && <MemoizedSpecializationModal />}
      {scheduleInterviewIsOpen && <MemoizedScheduleInterviewModal />}
      {openSoftSkillsModal && <MemoizedSoftSkillsModal />}
      {openSkillsModal && <MemoizedHardSkillsModal />}
      {openConfirmDeleteSpecialization && <MemoConfirmDeleteSpecializationModal />}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;
