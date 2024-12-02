import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  AchievementModal,
  EducationModal,
  ModalUserInfo,
  WorkExperienceModal,
} from '../../../components/ModalsComponents/ProfileModals';

const PersonalProfileTemplate = ({ children }) => {
  const { openUserInfo, workExperience, achievement, education } = useSelector((state) => state.modal);

  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
      {workExperience && <WorkExperienceModal />}
      {achievement && <AchievementModal />}
      {education && <EducationModal />}
    </div>
  );
};

PersonalProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PersonalProfileTemplate;
