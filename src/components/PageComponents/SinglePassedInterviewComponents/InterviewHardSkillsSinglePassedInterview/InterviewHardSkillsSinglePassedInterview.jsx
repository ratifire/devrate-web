import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { useLocation } from 'react-router';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';
import { SKILLS_TYPES } from '@utils/constants/skillsTypes';

const InterviewHardSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const interviewData = location.state.event;

  const { hardSkills, role } = interviewData;

  const hardSkillsArray = getSkillsArray(hardSkills);
  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);

  return (
    <SpecializationSkills
      averageMark={averageHardSkillsMark}
      role={role}
      skillType={SKILLS_TYPES.HARD_SKILL}
      skills={hardSkillsArray}
      subTitle={t('specialization.hardSkills.averageMark')}
      title={t('specialization.hardSkills.title')}
    />
  );
};

export default InterviewHardSkillsSinglePassedInterview;
