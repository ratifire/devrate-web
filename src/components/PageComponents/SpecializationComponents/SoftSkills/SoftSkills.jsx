import { useTranslation } from 'react-i18next';
import { useGetSoftSkillsQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetMastery } from '@utils/hooks/specialization';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { SKILLS_TYPE } from '@components/UI/Specialization/SpecializationSkills/constants';

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
      skills={skills}
      subTitle={t('specialization.softSkills.averageMark')}
      title={t('specialization.softSkills.title')}
      type={SKILLS_TYPE.SOFT_SKILL}
    />
  );
};

export default SoftSkills;
