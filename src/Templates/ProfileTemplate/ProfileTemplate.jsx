import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ModalUserInfo from '../../components/ProfileModals';
import WorkExperienceModal from '../../components/ProfileModals/WorkExperienceModal';

const ProfileTemplate = ({ children }) => {
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const openExperience = useSelector((state) => state.modal.openExperience);
  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
      {openExperience && <WorkExperienceModal />}
    </div>
  );
};
ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProfileTemplate;
