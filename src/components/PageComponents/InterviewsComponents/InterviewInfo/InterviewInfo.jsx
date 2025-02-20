import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPassedInterviewByIdQuery } from '../../../../redux/interviews/passedInterviewsApiSlice.js';
import { formatToLocalDate } from '../../../../utils/helpers/formatToLocalDate.js';
import { useGetPersonalUserQuery } from '../../../../redux/user/personal/personalApiSlice.js';
import { lvlMastery } from '../../../../utils/constants/masteryLvl.js';
import { convertMilliInYears } from '../../../../utils/helpers/convertMilliInYears.js';
import { styles } from './InterviewInfo.styles.js';

const InterviewInfo = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const { data: interviewData } = useGetPassedInterviewByIdQuery({ interviewId });

  const {
    dateTime = new Date(),
    attendeeId = null,
    role = '',
    specialization = '',
    masteryLevel = 1,
    attendeeMasteryLevel = '',
    attendeeSpecialization = '',
  } = interviewData ?? {};

  const { data: attendeeContacts } = useGetPersonalUserQuery(attendeeId);

  const fullName = `${attendeeContacts?.firstName ?? ''} ${attendeeContacts?.lastName ?? ''}`;

  const yearsAgo = useMemo(() => convertMilliInYears(Date.now() - new Date(dateTime)), [dateTime]);

  return (
    <Box sx={styles.interviewInfoWrapper}>
      <Box sx={styles.interviewInfoTitleWrapper}>
        <Typography sx={styles.interviewInfoTitle} variant='h6'>
          {t('interviews.passedInterviews.interviewInfoTitle')}
        </Typography>
        <Typography sx={styles.yearsAgo} variant='caption1'>
          {yearsAgo} {t('interviews.passedInterviews.interviewInfoText')}
        </Typography>
      </Box>
      <Typography sx={styles.date} variant='caption1'>
        {formatToLocalDate(dateTime)}
      </Typography>
      <Box sx={styles.interviewSpecializationTitleWrapper}>
        <Typography sx={styles.interviewSpecialization} variant='h6'>
          {specialization}
        </Typography>
        <Typography sx={styles[lvlMastery[masteryLevel]?.toLowerCase()]} variant='subtitle2'>
          {`Level ${lvlMastery[masteryLevel]}`}
        </Typography>
      </Box>
      <Typography sx={styles.role} variant='body1'>
        {t('interviews.passedInterviews.interviewInfoRole')}: {role}
      </Typography>
      <Box sx={styles.hostWrapper}>
        <Typography sx={styles.host} variant='body1'>
          {t('interviews.passedInterviews.interviewInfoHost')}:
        </Typography>
        <Typography sx={styles.hostName} variant='body1'>
          {fullName}
        </Typography>
      </Box>
      <Typography sx={styles.hostSpecialization} variant='caption1'>
        {lvlMastery[attendeeMasteryLevel] + ' ' + attendeeSpecialization}
      </Typography>
    </Box>
  );
};
export default InterviewInfo;
