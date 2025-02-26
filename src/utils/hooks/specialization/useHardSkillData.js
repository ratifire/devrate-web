import { useGetHardSkillsByMasteryIdQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetMastery } from './index';

const useHardSkillData = () => {
  const { isFetching: isFetchingMastery, isError: isErrorMastery, masteryId, userId, activeMastery } = useGetMastery();

  const {
    data = [],
    isFetching: isFetchingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

  const skills = masteryId ? data : [];

  const isFetching = isFetchingMastery || isFetchingSkills;
  const isError = isErrorMastery || isErrorSkills;

  return {
    skills,
    isFetching,
    isError,
    activeMastery,
  };
};

export default useHardSkillData;
