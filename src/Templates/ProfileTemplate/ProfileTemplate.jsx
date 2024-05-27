import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {ModalUserInfo, WorkExperienceModal, AchievementModal, EducationModal} from '../../components/ProfileModals'

const ProfileTemplate = ({ children }) => {
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const openExperience = useSelector((state) => state.modal.openExperience);
  const openAchievement = useSelector((state) => state.modal.achievement);
  const openEducation = useSelector((state) => state.modal.education);

  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
      {openExperience && <WorkExperienceModal />}
      {openAchievement && <AchievementModal />}
      {openEducation && <EducationModal />}
    </div>
  );
};
ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProfileTemplate;
