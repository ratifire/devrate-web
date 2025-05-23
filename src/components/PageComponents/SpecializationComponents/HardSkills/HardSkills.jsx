import { useTranslation } from 'react-i18next';
import { useModalController } from '@utils/hooks/useModalController.js';
import { useHardSkillData } from '@utils/hooks/specialization';
import { modalNames } from '@utils/constants/modalNames.js';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';

const HardSkills = () => {
  const { t } = useTranslation();

  const { skills, isError, isFetching } = useHardSkillData();
  const { openModal } = useModalController();

  const handleModalOpen = () => openModal(modalNames.hardSkillsModal);

  const averageMark =
    skills.length > 0 ? (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) : '0';

  return (
    <SpecializationSkills
      averageMark={averageMark}
      isError={isError}
      isFetching={isFetching}
      openModal={handleModalOpen}
      skills={skills}
      subTitle={t('specialization.hardSkills.averageMark')}
      title={t('specialization.hardSkills.title')}
    />
  );
};

export default HardSkills;
