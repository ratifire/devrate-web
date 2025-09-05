import { useLocation } from 'react-router';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import EmptySkills from '@components/UI/Specialization/EmptySkills';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';

const InterviewSoftSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const interviewData = location.state.event;

  const { softSkills } = interviewData;

  const softSkillsArray = getSkillsArray(softSkills);

  if (!softSkillsArray.length) {
    return <EmptySkills title='Soft skills' />;
  }

  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  return (
    <SpecializationSkills
      averageMark={averageSoftSkillsMark}
      skills={softSkillsArray}
      subTitle={t('specialization.softSkills.averageMark')}
      title={t('specialization.softSkills.title')}
    />
  );
};

export default InterviewSoftSkillsSinglePassedInterview;
