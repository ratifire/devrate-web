import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMasteriesBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const useUserSkillsAndMasteryData = () => {
  const { t } = useTranslation();
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);

  const { id: userId } = useSelector((state) => state.auth.user.data);
  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorLoadingSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, {
    skip: !userId,
  });

  const specializationId = specializations?.[0]?.id;
  const { data: masteries, isLoading: isLoadingMasteries, isError: isErrorMasteries } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });
  const selectMastery = masteries?.find((mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase());

  const selectMasteryIndex = masteries?.findIndex((mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase());

  const nextMasteryLevel = masteries?.[selectMasteryIndex + 1]?.level || 'Guru';

  const masteryId = selectMastery?.id

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

  const isLoading = isLoadingSpecializations || isLoadingSkills || isLoadingMasteries;
  const isError = isErrorSkills || isErrorLoadingSpecializations || isErrorMasteries;

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
