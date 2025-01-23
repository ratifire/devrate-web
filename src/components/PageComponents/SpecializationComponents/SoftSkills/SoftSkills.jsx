import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useGetSoftSkillsQuery } from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';
import { modalNames } from '../../../../utils/constants/modalNames.js';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { isFetching: isFetchingMastery, isError: isErrorMastery, masteryId } = useGetMastery();

  const {
    data,
    isFetching: isLoadingSoftSkill,
    isError: isErrorSoftSkill,
  } = useGetSoftSkillsQuery(masteryId, { skip: !masteryId });

  const skills = masteryId ? data : [];

  const handleModalOpen = () => dispatch(openModal({ modalType: modalNames.softSkillsModal }));

  const isFetching = isFetchingMastery || isLoadingSoftSkill;
  const isError = isErrorMastery || isErrorSoftSkill;

  const averageMark =
    skills?.length > 0 ? (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) : '0';

  return (
    <SpecializationSkills
      averageMark={averageMark}
      isError={isError}
      isFetching={isFetching}
      openModal={handleModalOpen}
      skills={skills}
      subTitle='specialization.hardSkills.averageMark'
      title='specialization.softSkills.title'
    />
  );
};

export default SoftSkills;
