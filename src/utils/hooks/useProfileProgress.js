import { useState, useEffect, useMemo } from 'react';
import { useGetWorkExperienceByUserIdQuery } from '@redux/api/slices/workExperienceApiSlice.js';
import { useFetchAchievementsQuery } from '@redux/api/slices/achievementsApiSlice.js';
import { useGetEducationByUserIdQuery } from '@redux/api/slices/educationApiSlice.js';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetUserContactsQuery } from '@redux/api/slices/user/contacts/contactsApiSlice';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { useGetLanguageUserQuery } from '@redux/api/slices/user/language/languageApiSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';

export const useProfileProgress = (userId) => {
  // initial animated value
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Виконуємо запити
  const { data: workExperience } = useGetWorkExperienceByUserIdQuery(userId);
  const { data: achievements } = useFetchAchievementsQuery(userId, { skip: !userId });
  const { data: educations } = useGetEducationByUserIdQuery(userId);
  const { data: specializations } = useGetSpecializationByUserIdQuery(userId);
  const { data: userContacts } = useGetUserContactsQuery(userId);
  const { data: personalData } = useGetPersonalUserQuery(userId);
  const { data: languages } = useGetLanguageUserQuery(userId);
  const { data: avatarData } = useGetAvatarUserQuery(userId);

  // If all data is available
  const allLoaded = useMemo(
    () =>
      [
        workExperience,
        achievements,
        educations,
        specializations,
        userContacts,
        personalData,
        languages,
        avatarData,
      ].every((data) => data !== undefined),
    [workExperience, achievements, educations, specializations, userContacts, personalData, languages, avatarData]
  );

  // sync calc
  const finalProgress = useMemo(() => {
    if (!allLoaded) return 0;
    return (
      10 +
      (workExperience && workExperience.length > 0 ? 10 : 0) +
      (achievements && achievements.length > 0 ? 10 : 0) +
      (educations && educations.length > 0 ? 10 : 0) +
      (specializations && specializations.length > 0 ? 20 : 0) +
      (userContacts && Object.values(userContacts).some((value) => value) ? 10 : 0) +
      (personalData && personalData.description ? 10 : 0) +
      (languages && languages.length > 0 ? 10 : 0) +
      (avatarData && avatarData.userPicture ? 10 : 0)
    );
  }, [
    allLoaded,
    workExperience,
    achievements,
    educations,
    specializations,
    userContacts,
    personalData,
    languages,
    avatarData,
  ]);

  // if all requests is resolved starting the animation
  useEffect(() => {
    if (!allLoaded) return;

    // if final value is 100 set it as is
    if (finalProgress === 100) {
      setAnimatedProgress(100);
      return;
    }

    // If less, make it animated
    if (animatedProgress < finalProgress) {
      const interval = setInterval(() => {
        setAnimatedProgress((prev) => {
          const next = prev + 10;
          if (next >= finalProgress) {
            clearInterval(interval);
            return finalProgress;
          }
          return next;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [allLoaded, finalProgress, animatedProgress]);

  return { finalProgress, animatedProgress };
};
