import { useGetHardSkillsByMasteryIdQuery } from '../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from './index';

const useHardSkillData = () => {
  const { isFetching: isFetchingMastery, isError: isErrorMastery, masteryId, userId, activeMastery } = useGetMastery();

  const {
    data: skills = [],
    isFetching: isFetchingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

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
