import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AchievementModal, EducationModal, ModalUserInfo, WorkExperienceModal } from '../../components/ProfileModals';
import { useFetchAchievementsQuery } from '../../redux/services/achievementsApiSlice';
import { selectCurrentUser } from '../../redux/auth/authSlice';

const ProfileTemplate = ({ children }) => {
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const openExperience = useSelector((state) => state.modal.openExperience);
  const openAchievement = useSelector((state) => state.modal.achievement);
  const openEducation = useSelector((state) => state.modal.education);
  const currentUser = useSelector(selectCurrentUser);

  const {
    data: achievementsData,
    error,
    isLoading,
  } = useFetchAchievementsQuery(currentUser?.id, {
    skip: !currentUser?.id,
  });

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (achievementsData) {
      setAchievements(achievementsData);
    }
  }, [achievementsData]);

  const addAchievement = (newAchievement) => {
    setAchievements((prevAchievements) => [...prevAchievements, newAchievement]);
  };

  return (
    <div className='profile'>
      {children}
      {openUserInfo && <ModalUserInfo />}
      {openExperience && <WorkExperienceModal />}
      {openAchievement && <AchievementModal onSuccess={addAchievement} currentUser={currentUser} />}
      {openEducation && <EducationModal />}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div>
        {achievements.map((achievement) => (
          <div key={achievement.id}>{achievement.summary}</div>
        ))}
      </div>
    </div>
  );
};

ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileTemplate;