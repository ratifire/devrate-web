import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import EmptySkills from '@components/UI/Specialization/EmptySkills';
import { SkillsSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';

const InterviewHardSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });

  if (isFetchingPassedInterview) {
    return <SkillsSkeleton />;
  }

  if (isErrorPassedInterview) {
    return <ErrorComponent />;
  }

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
