import { useGetHardSkillsByMasteryIdQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../../../SpecializationComponents/hooks';

const useUserSkillsAndMasteryData = () => {
  const {
    isLoading: isLoadingMastery,
    isError: isErrorMastery,
    masteryId,
    userId,
    activeMastery,
  } = useGetMastery();

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

  const isLoading = isLoadingMastery || isLoadingSkills;
  const isError = isErrorMastery || isErrorSkills;

  return {
    skills,
    isLoading,
    isError,
    activeMastery,
  };
};

export default useUserSkillsAndMasteryData;
