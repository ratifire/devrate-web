import PropTypes from 'prop-types';
import { modalNames } from '../../utils/constants/modalNames.js';
import { EducationModal, WorkExperienceModal, AchievementModal, ModalUserInfo } from './ProfileModals';
import { CheckEmail, LoginModal, RegistrationModal, ResetPassword } from './AuthModals/index.js';
import AchievementEditModal from './ProfileModals/AchievementModal/AchievementEditModal.jsx';
import WorkExperienceEditModal from './ProfileModals/WorkExperienceModal/WorkExperienceEditModal.jsx';
import EducationEditModal from './ProfileModals/EducationModal/EducationEditModal.jsx';
import FeedbackProjectModal from './FeedbackProjectModal';
import { SpecializationEditModal, SpecializationModal } from './SpecializationModals/SpecializationModal';
import { HardSkillsModal, ScheduleInterviewModal, SoftSkillsModal } from './SpecializationModals';
import HardSkillsEditModal from './SpecializationModals/HardSkillsModal/HardSkillsEditModal.jsx';
import SoftSkillsEditModal from './SpecializationModals/SoftSkillsModal/SoftSkillEditModal.jsx';
import { FeedbackInterviewModal } from './FeedbackModal/FeedbackInterviewModal/index.js';
import ConfirmationModal from './AuthModals/ConfirmationModal/index.js';

const modalEnum = {
  [modalNames.achievementModal]: AchievementModal,
  [modalNames.achievementEditModal]: AchievementEditModal,
  [modalNames.workExperienceModal]: WorkExperienceModal,
  [modalNames.workExperienceEditModal]: WorkExperienceEditModal,
  [modalNames.educationModal]: EducationModal,
  [modalNames.educationEditModal]: EducationEditModal,
  [modalNames.userInfoModal]: ModalUserInfo,
  [modalNames.loginModal]: LoginModal,
  [modalNames.feedbackProjectModal]: FeedbackProjectModal,
  [modalNames.specializationModal]: SpecializationModal,
  [modalNames.specializationEditModal]: SpecializationEditModal,
  [modalNames.hardSkillsModal]: HardSkillsModal,
  [modalNames.hardSkillsEditModal]: HardSkillsEditModal,
  [modalNames.softSkillsModal]: SoftSkillsModal,
  [modalNames.softSkillsEditModal]: SoftSkillsEditModal,
  [modalNames.scheduleInterviewModal]: ScheduleInterviewModal,
  [modalNames.feedbackInterviewModal]: FeedbackInterviewModal,
  [modalNames.registrationModal]: RegistrationModal,
  [modalNames.checkEmail]: CheckEmail,
  [modalNames.resetPassword]: ResetPassword,
  [modalNames.confirmation]: ConfirmationModal,
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
