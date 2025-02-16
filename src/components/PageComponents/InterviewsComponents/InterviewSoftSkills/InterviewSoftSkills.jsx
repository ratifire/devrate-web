import PropTypes from 'prop-types';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';

const InterviewSoftSkills = ({ softSkills, averageSoftSkillsMark }) => {
  return (
    <SpecializationSkills
      averageMark={averageSoftSkillsMark}
      skills={softSkills}
      subTitle='specialization.softSkills.averageMark'
      title='specialization.softSkills.title'
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
