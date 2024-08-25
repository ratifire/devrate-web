import { useTranslation } from 'react-i18next';
import { useGetHardSkillsByMasteryIdQuery } from '../../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../hooks';

const useUserSkillsAndMasteryData = () => {
  const { t } = useTranslation();
  const {
    isLoading: isLoadingMastery,
    isError: isErrorMastery,
    masteryId,
    nextMasteryLevel,
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
    t,
    skills,
    isLoading,
    isError,
    activeMastery,
    nextMasteryLevel,
  };
};

export default useUserSkillsAndMasteryData;
