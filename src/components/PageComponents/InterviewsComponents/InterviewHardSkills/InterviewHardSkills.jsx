import PropTypes from 'prop-types';
import { SpecializationSkills } from '../../../UI/Specialization/SpecializationSkills';

const InterviewHardSkills = ({ hardSkills, averageHardSkillsMark }) => {
  return (
    <SpecializationSkills
      averageMark={averageHardSkillsMark}
      skills={hardSkills}
      subTitle='specialization.hardSkills.averageMark'
      title='specialization.hardSkills.title'
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
