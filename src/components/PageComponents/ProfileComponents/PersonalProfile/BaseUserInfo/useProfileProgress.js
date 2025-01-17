// useProfileProgress.js
import { useState, useEffect } from 'react';
import { useGetWorkExperienceByUserIdQuery } from '../../../../../redux/services/workExperienceApiSlice.js';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import { useGetEducationByUserIdQuery } from '../../../../../redux/services/educationApiSlice';
import { useGetSpecializationByUserIdQuery } from '../../../../../redux/specialization/specializationApiSlice';
import { useGetUserContactsQuery } from '../../../../../redux/user/contacts/contactsApiSlice';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import { useGetLanguageUserQuery } from '../../../../../redux/user/language/languageApiSlice';
import { useGetAvatarUserQuery } from '../../../../../redux/user/avatar/avatarApiSlice';

export const useProfileProgress = (userId) => {
  const [progress, setProgress] = useState(5);

  const { data: workExperience } = useGetWorkExperienceByUserIdQuery(userId);
  const { data: achievements } = useFetchAchievementsQuery(userId, { skip: !userId });
  const { data: educations } = useGetEducationByUserIdQuery(userId);
  const { data: specializations } = useGetSpecializationByUserIdQuery(userId);
  const { data: userContacts } = useGetUserContactsQuery(userId);
  const { data: personalData } = useGetPersonalUserQuery(userId);
  const { data: languages } = useGetLanguageUserQuery(userId);
  const { data: avatarData } = useGetAvatarUserQuery(userId);

  useEffect(() => {
    let newProgress = 10;

    if (workExperience && workExperience.length > 0) {
      newProgress += 10;
    }

    if (achievements && achievements.length > 0) {
      newProgress += 10;
    }

    if (educations && educations.length > 0) {
      newProgress += 10;
    }

    if (specializations && specializations.length > 0) {
      newProgress += 20;
    }

    if (userContacts && Object.values(userContacts).some((value) => value)) {
      newProgress += 10;
    }

    if (personalData && personalData.description) {
      newProgress += 10;
    }

    if (languages && languages.length > 0) {
      newProgress += 10;
    }

    if (avatarData && avatarData.userPicture) {
      newProgress += 10;
    }

    setProgress(newProgress);
  }, [workExperience, achievements, educations, specializations, userContacts, personalData, languages, avatarData]);

  return progress;
};
