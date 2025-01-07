import PropTypes from 'prop-types';
import { EducationModal, WorkExperienceModal, AchievementModal, ModalUserInfo } from './ProfileModals';
import { LoginModal } from './AuthModals/index.js';
import AchievementEditModal from './ProfileModals/AchievementModal/AchievementEditModal.jsx';
import WorkExperienceEditModal from './ProfileModals/WorkExperienceModal/WorkExperienceEditModal.jsx';
import EducationEditModal from './ProfileModals/EducationModal/EducationEditModal.jsx';
import FeedbackProjectModal from './FeedbackProjectModal';
import { SpecializationEditModal, SpecializationModal } from './SpecializationModals/SpecializationModal/index.js';

const modalEnum = {
  achievementModal: AchievementModal,
  achievementEditModal: AchievementEditModal,
  workExperienceModal: WorkExperienceModal,
  workExperienceEditModal: WorkExperienceEditModal,
  educationModal: EducationModal,
  educationEditModal: EducationEditModal,
  userInfoModal: ModalUserInfo,
  loginModal: LoginModal,
  feedbackProjectModal: FeedbackProjectModal,
  specializationModal: SpecializationModal,
  specializationEditModal: SpecializationEditModal,
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
