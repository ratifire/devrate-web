import { useState, useEffect } from 'react';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetSpecializationByUserIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
} from '../../../redux/specialization/specializationApiSlice';

const useSkillsData = (userId) => {
  const [skillsData, setSkillsData] = useState({
    mainMastery: null,
    skills: [],
    isLoading: true,
    isError: false,
  });

  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorSpecializations,
  } = useGetSpecializationByUserIdQuery(userId);
  const specializationId = specializations?.[0]?.id;

  const {
    data: mainMastery,
    isLoading: isLoadingMainMastery,
    isError: isErrorMainMastery,
  } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const {
    data: skills,
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId: mainMastery?.id }, { skip: !mainMastery?.id });

  useEffect(() => {
    if (!isLoadingSpecializations && !isLoadingMainMastery && !isLoadingSkills) {
      setSkillsData({
        mainMastery,
        skills,
        isLoading: false,
        isError: isErrorSpecializations || isErrorMainMastery || isErrorSkills,
      });
    }
  }, [
    mainMastery,
    skills,
    isLoadingSpecializations,
    isLoadingMainMastery,
    isLoadingSkills,
    isErrorSpecializations,
    isErrorMainMastery,
    isErrorSkills,
  ]);

  return skillsData;
};

export default useSkillsData;
