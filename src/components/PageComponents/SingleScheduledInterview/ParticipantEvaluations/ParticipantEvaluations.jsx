import { Box, Typography } from '@mui/material';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import InfoIcon from '../../../../assets/icons/InterviewPageIcons/info.svg?react';
import { styles } from './ParticipantEvaluations.styles.js';

const data = [
  {
    name: 'Soft Skills',
    'Оксана Іващенко': 5,
    'Олена Бондаренко': 6,
  },
  {
    name: 'Hard Skills',
    'Оксана Іващенко': 7,
    'Олена Бондаренко': 9,
  },
  {
    name: 'Over All',
    'Оксана Іващенко': 1,
    'Олена Бондаренко': 2,
  },
];

const ParticipantEvaluations = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          Оцінка учасників
        </Typography>
        <InfoIcon />
      </Box>
      <Box sx={styles.boxParticipants}>
        <Box>
          <Typography component='p' variant='subtitle2'>
            Оксана Іващенко
          </Typography>
          <Typography component='p' variant='subtitle2'>
            Level Middle
          </Typography>
        </Box>
        <Box>
          <Typography component='p' variant='subtitle2'>
            Олена Бондаренко
          </Typography>
          <Typography component='p' variant='subtitle2'>
            Level Junior
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.boxChart}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart
            barGap={-80}
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
            <XAxis dataKey='name' />
            <YAxis domain={[0, 10]} interval={0} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            <Tooltip />
            <Legend align='center' iconType='circle' layout='horizontal' verticalAlign='top' />
            <CartesianGrid strokeDasharray='7 7' strokeWidth={0.5} vertical={false} />
            <Bar dataKey='Оксана Іващенко' fill='red' radius={[2, 2, 0, 0]} />
            <Bar dataKey='Олена Бондаренко' fill='blue' radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ParticipantEvaluations;
