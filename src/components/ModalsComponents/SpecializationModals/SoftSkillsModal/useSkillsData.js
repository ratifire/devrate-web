/* eslint-disable */
import { useState, useEffect } from 'react';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import { useSelector } from 'react-redux';

const useSkillsData = (userId) => {
  const [skillsData, setSkillsData] = useState({
    mainMastery: null,
    skills: [],
    isLoading: true,
    isError: false,
  });

  const activeSpecialization = useSelector((state) => state.specialization.activeSpecialization);
  const mainSpecialization = useSelector((state) => state.specialization.mainSpecialization);
  const specializationId =  activeSpecialization?.id || mainSpecialization?.id;

  const {
    data: mainMastery,
    isLoading: isLoadingMainMastery,
    isError: isErrorMainMastery,
  } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });
  console.log('render');
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
