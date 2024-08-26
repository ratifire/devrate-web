import { useState, useEffect, useCallback } from 'react';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetSpecializationByUserIdQuery,
  useGetMasteriesBySpecializationIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';

const useSkillsData = (userId, activeMastery) => {
  const [skillsData, setSkillsData] = useState({
    masteries: [],
    skills: [],
    isLoading: true,
    isError: false,
    masteryId: null,
  });

  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);
  const specializationId = specializations?.[0]?.id;

  const { data: masteries = [], isLoading: isLoadingMasteries } = useGetMasteriesBySpecializationIdQuery(
    specializationId,
    { skip: !specializationId }
  );

  const activeMasteryObject = masteries.find((mastery) => mastery.level === activeMastery);
  const masteryId = activeMasteryObject?.id;

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

  const updateSkillsData = useCallback(() => {
    if (!isLoadingSpecializations && !isLoadingMasteries && !isLoadingSkills) {
      setSkillsData({
        masteries,
        skills,
        isLoading: false,
        isError: isErrorSkills,
        masteryId,
      });
    }
  }, [masteries, skills, isLoadingSpecializations, isLoadingMasteries, isLoadingSkills, isErrorSkills, masteryId]);

  useEffect(() => {
    updateSkillsData();
  }, [updateSkillsData]);

  return skillsData;
};

export default useSkillsData;
