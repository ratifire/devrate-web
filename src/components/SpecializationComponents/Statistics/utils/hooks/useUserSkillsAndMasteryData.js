import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const useUserSkillsAndMasteryData = () => {
  const { t } = useTranslation();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorLoadingSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, {
    skip: !userId,
  });

  const specializationId = specializations?.[0]?.id;

  const {
    data: mainMastery,
    isLoading: isLoadingMainMastery,
    isError: isErrorMainMastery,
  } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const masteryId = mainMastery?.id;

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !mainMastery?.id });

  const isLoading = isLoadingSpecializations || isLoadingMainMastery || isLoadingSkills;
  const isError = isErrorSkills || isErrorLoadingSpecializations || isErrorMainMastery;

  return {
    t,
    skills,
    isLoading,
    isError,
  };
};

export default useUserSkillsAndMasteryData;
