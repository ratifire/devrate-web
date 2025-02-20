import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';

const InterviewSoftSkills = ({ softSkills, averageSoftSkillsMark }) => {
  const { t } = useTranslation();

  return (
    <SpecializationSkills
      averageMark={averageSoftSkillsMark}
      skills={softSkills}
      subTitle={t('specialization.softSkills.averageMark')}
      title={t('specialization.softSkills.title')}
    />
  );
};

export default InterviewSoftSkills;

InterviewSoftSkills.propTypes = {
  softSkills: PropTypes.array.isRequired,
  averageSoftSkillsMark: PropTypes.number.isRequired,
};

InterviewSoftSkills.defaultProps = {
  softSkills: [],
  averageSoftSkillsMark: 0,
};
