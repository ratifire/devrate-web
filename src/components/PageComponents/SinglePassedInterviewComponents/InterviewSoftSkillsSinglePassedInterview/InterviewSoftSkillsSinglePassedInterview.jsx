import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { SkillsSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import EmptySkills from '@components/UI/Specialization/EmptySkills';
import { SpecializationSkills } from '@components/UI/Specialization/SpecializationSkills';
import { useTranslation } from 'react-i18next';

const InterviewSoftSkillsSinglePassedInterview = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });

  if (isErrorPassedInterview) {
    return <ErrorComponent />;
  }

  if (isFetchingPassedInterview) {
    return <SkillsSkeleton />;
  }

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
