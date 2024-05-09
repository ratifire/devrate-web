import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ModalUserInfo from '../../components/ProfileModals';

const ProfileTemplate = ({ children }) => {
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
    </div>
  );
};
ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProfileTemplate;
