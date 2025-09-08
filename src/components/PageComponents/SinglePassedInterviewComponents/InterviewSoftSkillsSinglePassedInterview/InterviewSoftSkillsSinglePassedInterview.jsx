import { useLocation } from 'react-router';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';
import { SKILLS_TYPES } from '@utils/constants/skillsTypes';

const InterviewSoftSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const interviewData = location.state.event;

  const { softSkills } = interviewData;

  const softSkillsArray = getSkillsArray(softSkills);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  return (
    <SpecializationSkills
      averageMark={averageSoftSkillsMark}
      skillType={SKILLS_TYPES.SOFT_SKILL}
      skills={softSkillsArray}
      subTitle={t('specialization.softSkills.averageMark')}
      title={t('specialization.softSkills.title')}
    />
  );
};

export default InterviewSoftSkillsSinglePassedInterview;
