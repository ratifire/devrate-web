import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';

const InterviewHardSkills = ({ hardSkills, averageHardSkillsMark }) => {
  const { t } = useTranslation();

  return (
    <SpecializationSkills
      averageMark={averageHardSkillsMark}
      skills={hardSkills}
      subTitle={t('specialization.hardSkills.averageMark')}
      title={t('specialization.hardSkills.title')}
    />
  );
};

export default InterviewHardSkills;

InterviewHardSkills.propTypes = {
  hardSkills: PropTypes.array.isRequired,
  averageHardSkillsMark: PropTypes.number.isRequired,
};

InterviewHardSkills.defaultProps = {
  hardSkills: [],
  averageHardSkillsMark: 0,
};
