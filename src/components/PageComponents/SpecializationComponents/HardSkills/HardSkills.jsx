import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useHardSkillData } from '../../../../utils/hooks/specialization';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';

const HardSkills = () => {
  const { skills, isError, isFetching, activeMastery } = useHardSkillData();
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal', activeMastery }));
  };

  const averageMark =
    skills.length > 0 ? (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) : '0';

  return (
    <SpecializationSkills
      averageMark={averageMark}
      isError={isError}
      isFetching={isFetching}
      openModal={handleModalOpen}
      skills={skills}
      subTitle='specialization.hardSkills.averageMark'
      title='specialization.hardSkills.title'
    />
  );
};

export default HardSkills;
