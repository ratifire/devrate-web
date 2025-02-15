import { Box, Typography } from '@mui/material';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import InfoIcon from '../../../../assets/icons/InterviewPageIcons/info.svg?react';
import useTooltipColorChart from '../../../../utils/hooks/useTooltipColorChart';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useGetMasteriesQuery } from '../../../../redux/singleScheduledInterview/singleScheduledInterviewApiSlice';
import { ParticipantEvaluationsSkeleton } from '../../../UI/Skeleton';
import { ErrorComponent } from '../../../UI/Exceptions';
import { prepareSkillsDataParticipantEvaluations } from '../helpers';
import { lvlMastery } from '../../../../utils/constants/masteryLvl';
import { styles } from './ParticipantEvaluations.styles';
import { useColorPartEvalChart } from './hooks';

const ParticipantEvaluations = () => {
  const { t } = useTranslation();
  const { itemStyle, contentStyle } = useTooltipColorChart();
  const { leftGrad1, leftGrad2, leftGrad3, rightGrad1, rightGrad2, rightGrad3 } = useColorPartEvalChart();
  const location = useLocation();
  const { hostFirstName, hostLastName, hostMasteryId, masteryId } = location.state.event;

  const {
    data: hostMastery,
    isFetching: isFetchingHostMastery,
    isError: isErrorHostMastery,
  } = useGetMasteriesQuery(hostMasteryId, { skip: !hostMasteryId });
  const {
    data: userMastery,
    isFetching: isFetchingUserMastery,
    isError: isErrorUserMastery,
  } = useGetMasteriesQuery(masteryId, { skip: !masteryId });

  const {
    data: { firstName, lastName },
  } = useSelector(selectCurrentUser);

  const hostFullName = `${hostFirstName} ${hostLastName}`;
  const userFullName = `${firstName} ${lastName}`;

  const data = prepareSkillsDataParticipantEvaluations({
    hostSkills: hostMastery,
    userSkills: userMastery,
    hostName: hostFullName,
    userName: userFullName,
  });

  if (isErrorHostMastery || isErrorUserMastery) {
    return <ErrorComponent />;
  }

  if (isFetchingHostMastery || isFetchingUserMastery) {
    return <ParticipantEvaluationsSkeleton />;
  }

  const { level: hostLevel } = hostMastery;
  const { level: userLevel } = userMastery;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          {t('singleScheduledInterview.participantEvaluations.title')}
        </Typography>
        <InfoIcon />
      </Box>
      <Box sx={styles.boxParticipants}>
        <Box>
          <Typography component='p' variant='subtitle2'>
            {hostFullName}
          </Typography>
          <Typography component='p' sx={styles[lvlMastery[hostLevel]]} variant='subtitle2'>
            Level {lvlMastery[hostLevel]}
          </Typography>
        </Box>
        <Box>
          <Typography component='p' variant='subtitle2'>
            {userFullName}
          </Typography>
          <Typography component='p' sx={styles[lvlMastery[userLevel]]} variant='subtitle2'>
            Level {lvlMastery[userLevel]}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.boxChart}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart
            barGap={-35}
            data={data}
            height={300}
            margin={{
              top: 0,
              right: 0,
              left: -35,
              bottom: 0,
            }}
            width={500}
          >
            <defs>
              <linearGradient id='left' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor={leftGrad1} stopOpacity={1} />
                <stop offset='29.8%' stopColor={leftGrad2} stopOpacity={1} />
                <stop offset='100%' stopColor={leftGrad3} stopOpacity={1} />
              </linearGradient>
              <linearGradient id='right' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor={rightGrad1} stopOpacity={1} />
                <stop offset='36.8%' stopColor={rightGrad2} stopOpacity={1} />
                <stop offset='100%' stopColor={rightGrad3} stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis domain={[0, 10]} interval={0} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} />
            <Legend align='center' iconType='circle' layout='horizontal' verticalAlign='top' />
            <CartesianGrid strokeDasharray='7 7' strokeWidth={0.5} vertical={false} />
            <Bar barSize={50} dataKey={hostFullName} fill='url(#left)' radius={[2, 2, 0, 0]} />
            <Bar barSize={50} dataKey={userFullName} fill='url(#right)' radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ParticipantEvaluations;
