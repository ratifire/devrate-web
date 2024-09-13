import { useState, useEffect, useCallback } from 'react';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMasteriesBySpecializationIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import { useSelector } from 'react-redux';

const useHardSkillsData = () => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);

  const [skillsData, setSkillsData] = useState({
    masteries: [],
    skills: [],
    isLoading: true,
    isError: false,
    masteryId: null,
  });

  const activeSpecialization = useSelector((state) => state.specialization.activeSpecialization);
  const mainSpecialization = useSelector((state) => state.specialization.mainSpecialization);
  const specializationId =  activeSpecialization?.id || mainSpecialization?.id;

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
    if (!isLoadingMasteries && !isLoadingSkills) {
      setSkillsData({
        masteries,
        skills,
        isLoading: false,
        isError: isErrorSkills,
        masteryId,
      });
    }
  }, [masteries, skills, isLoadingMasteries, isLoadingSkills, isErrorSkills, masteryId]);

  useEffect(() => {
    updateSkillsData();
  }, [updateSkillsData]);

  return skillsData;
};

export default useHardSkillsData;
