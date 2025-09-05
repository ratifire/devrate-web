import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { useLocation } from 'react-router';
import EmptySkills from '@components/UI/Specialization/EmptySkills';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';

const InterviewHardSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const interviewData = location.state.event;

  const { hardSkills } = interviewData;

  const hardSkillsArray = getSkillsArray(hardSkills);

  if (!hardSkillsArray.length) {
    return <EmptySkills title='Hard skills' />;
  }

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);

  return (
    <SpecializationSkills
      averageMark={averageHardSkillsMark}
      skills={hardSkillsArray}
      subTitle={t('specialization.hardSkills.averageMark')}
      title={t('specialization.hardSkills.title')}
    />
  );
};

export default InterviewHardSkillsSinglePassedInterview;
