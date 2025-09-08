import { useTranslation } from 'react-i18next';
import { useGetSoftSkillsQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetMastery } from '@utils/hooks/specialization';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { modalNames } from '@utils/constants/modalNames';
import { useModalController } from '@utils/hooks/useModalController';
import { SKILLS_TYPES } from '@utils/constants/skillsTypes';

const SoftSkills = () => {
  const { t } = useTranslation();

  const { openModal } = useModalController();

  const { isFetching: isFetchingMastery, isError: isErrorMastery, masteryId } = useGetMastery();

  const {
    data,
    isFetching: isLoadingSoftSkill,
    isError: isErrorSoftSkill,
  } = useGetSoftSkillsQuery(masteryId, { skip: !masteryId });

  const skills = masteryId ? data : [];

  const handleModalOpen = () => openModal(modalNames.softSkillsModal);

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
      skillType={SKILLS_TYPES.SOFT_SKILL}
      skills={skills}
      subTitle={t('specialization.softSkills.averageMark')}
      title={t('specialization.softSkills.title')}
    />
  );
};

export default SoftSkills;
