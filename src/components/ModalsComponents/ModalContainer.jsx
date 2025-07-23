import PropTypes from 'prop-types';
import { modalNames } from '@utils/constants/modalNames.js';
import {
  EducationModal,
  WorkExperienceModal,
  AchievementModal,
  ModalUserInfo,
  WorkExperienceEditModal,
  AchievementEditModal,
} from './ProfileModals';
import {
  CheckEmail,
  LoginModal,
  RegistrationModal,
  ResetPassword,
  ConfirmationModal,
  NotificationModal,
  ActivationModal,
} from './AuthModals';
import FeedbackProjectModal from './FeedbackProjectModal';
import {
  SpecializationEditModal,
  SpecializationModal,
  HardSkillsModal,
  SoftSkillsModal,
  ConfirmDeleteSpecializationModal,
} from './SpecializationModals';
import { FeedbackInterviewModal } from './FeedbackModal/FeedbackInterviewModal';
import ScheduleInterviewModal from './InterviewModals/ScheduleInterviewModal';

const modalEnum = {
  [modalNames.achievementModal]: AchievementModal,
  [modalNames.achievementEditModal]: AchievementEditModal,
  [modalNames.workExperienceModal]: WorkExperienceModal,
  [modalNames.workExperienceEditModal]: WorkExperienceEditModal,
  [modalNames.educationModal]: EducationModal,
  [modalNames.userInfoModal]: ModalUserInfo,
  [modalNames.loginModal]: LoginModal,
  [modalNames.feedbackProjectModal]: FeedbackProjectModal,
  [modalNames.specializationModal]: SpecializationModal,
  [modalNames.specializationEditModal]: SpecializationEditModal,
  [modalNames.hardSkillsModal]: HardSkillsModal,
  [modalNames.softSkillsModal]: SoftSkillsModal,
  [modalNames.scheduleInterviewModal]: ScheduleInterviewModal,
  [modalNames.feedbackInterviewModal]: FeedbackInterviewModal,
  [modalNames.registrationModal]: RegistrationModal,
  [modalNames.checkEmailModal]: CheckEmail,
  [modalNames.resetPasswordModal]: ResetPassword,
  [modalNames.confirmationModal]: ConfirmationModal,
  [modalNames.confirmDeleteSpecialization]: ConfirmDeleteSpecializationModal,
  [modalNames.notificationModal]: NotificationModal,
  [modalNames.activationModal]: ActivationModal,
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
