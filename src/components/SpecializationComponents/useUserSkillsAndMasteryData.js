import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../redux/specialization/specializationApiSlice';

const useUserSkillsAndMasteryData = () => {
  const { t } = useTranslation();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);
  const specializationId = specializations?.[0]?.id || null;

  const { data: mainMastery, isLoading: isLoadingMainMastery } = useGetMainMasteryBySpecializationIdQuery(
    specializationId,
    { skip: !specializationId }
  );

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId: mainMastery?.id }, { skip: !mainMastery?.id });

  return {
    t,
    skills,
    isLoadingSpecializations,
    isLoadingMainMastery,
    isLoadingSkills,
    isErrorSkills,
  };
};

export default useUserSkillsAndMasteryData;
