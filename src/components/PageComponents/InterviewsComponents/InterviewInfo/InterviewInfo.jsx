import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import { formatToLocalDateInterview } from '@utils/helpers/formatToLocalDateInterview.js';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice.js';
import { lvlMastery } from '@utils/constants/masteryLvl.js';
import { ConvertMilliInYears } from '@utils/helpers/convertMilliInYears.js';
import links from '@router/links';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole.js';

import { styles } from './InterviewInfo.styles.js';

const InterviewInfo = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const { data: interviewData } = useGetPassedInterviewByIdQuery({ interviewId });

  const {
    dateTime = new Date(),
    attendeeId = null,
    specialization = '',
    attendeeMasteryLevel = '',
    attendeeSpecialization = '',
  } = interviewData ?? {};

  const { data: attendeeContacts } = useGetPersonalUserQuery(attendeeId);

  const fullName = `${attendeeContacts?.firstName ?? ''} ${attendeeContacts?.lastName ?? ''}`;

  const timeAgo = ConvertMilliInYears(Date.now() - new Date(dateTime));

  return (
    <Box sx={styles.interviewInfoWrapper}>
      <Box sx={styles.interviewInfoTitleWrapper}>
        <Typography sx={styles.interviewInfoTitle} variant='h6'>
          {t('interviews.passedInterviews.interviewInfoTitle')}
        </Typography>
        <Typography sx={styles.yearsAgo} variant='caption1'>
          {timeAgo}
        </Typography>
      </Box>
      <Typography sx={styles.date} variant='caption1'>
        {formatToLocalDateInterview(dateTime)}
      </Typography>
      <Box sx={styles.interviewSpecializationTitleWrapper}>
        <Typography sx={styles.interviewSpecialization} variant='h6'>
          {specialization}
        </Typography>
        <Typography sx={styles[lvlMastery[attendeeMasteryLevel]?.toLowerCase()]} variant='subtitle2'>
          {`Level ${lvlMastery[attendeeMasteryLevel]}`}
        </Typography>
      </Box>
      <Typography sx={styles.role} variant='body1'>
        {t('interviews.passedInterviews.interviewInfoRole')}: {t(`interviewRequest.role.${interviewData?.role}`)}
      </Typography>
      <Box sx={styles.hostWrapper}>
        <Typography sx={styles.host} variant='body1'>
          {interviewData?.role === feedbackInterviewRole.CANDIDATE
            ? t('interviews.passedInterviews.interviewInfoInterviewer')
            : t('interviews.passedInterviews.interviewInfoRespondent')}
          :
        </Typography>
        <Link component={RouterLink} sx={styles.hostLink} to={`${links.profile}/${attendeeId}`}>
          {fullName}
        </Link>
      </Box>
      <Typography sx={styles.hostSpecialization} variant='caption1'>
        {lvlMastery[attendeeMasteryLevel] + ' ' + attendeeSpecialization}
      </Typography>
    </Box>
  );
};
export default InterviewInfo;
