import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { AchievementModal, EducationModal, ModalUserInfo, WorkExperienceModal } from '../../components/ProfileModals';

const ProfileTemplate = ({ children }) => {
  const { openUserInfo, openExperience, openAchievement, education } = useSelector((state) => state.modal);

  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
      {openExperience && <WorkExperienceModal />}
      {openAchievement && <AchievementModal />}
      {education && <EducationModal />}
    </div>
  );
};

ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileTemplate;
