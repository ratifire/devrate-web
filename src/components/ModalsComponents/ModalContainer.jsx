import PropTypes from 'prop-types';
import { EducationModal, WorkExperienceModal, AchievementModal, ModalUserInfo } from './ProfileModals';

const modalEnum = {
  achievementModal: AchievementModal,
  workExperienceModal: WorkExperienceModal,
  educationModal: EducationModal,
  userInfoModal: ModalUserInfo,
};

const ModalContainer = ({ modalType }) => {
  const Modal = modalEnum[modalType];
  if (!Modal) return;
  return <Modal />;
};

ModalContainer.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default ModalContainer;
