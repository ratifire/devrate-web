import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useGetInterviewSummariesStatisticQuery } from '../../../../../redux/chart/chartApiSlice';
import {
  createTenDaysInterviewData,
  createTenMonthsInterviewData,
  getCurrentAndLastMonths,
  useHandleChange, useTooltip,
} from '../utils';
import { styles } from './InterviewChart.styles';
import { Loader } from '../../../../UI/Loader';

const InterviewChart = () => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { to, from } = useMemo(() => getCurrentAndLastMonths(), []);
  const { data, isLoading, isError } = useGetInterviewSummariesStatisticQuery({ userId, from, to }, { skip: !userId });
  const { t } = useTranslation();
  const dataMonths = useMemo(() => createTenMonthsInterviewData({ t, data }), [data]);
  const dataDays = useMemo(() => createTenDaysInterviewData({ data }), [data]);
  const { tooltipLabel, tooltipContent } = useTooltip();

  const { handleChange, selectedPeriod } = useHandleChange({ dataDays, dataMonths });

  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <Typography variant='h6'>Something error...</Typography>;
  }

  return (
    <Box sx={styles.interviewChartContainer}>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography variant='subtitle2'>{t('specialization.statistics.interview_chart_title')}</Typography>
        </Box>
        <Box>
          <Select
            sx={styles.select}
            onChange={handleChange}
            defaultValue={'months'}
            IconComponent={KeyboardArrowDownIcon}
            inputProps={{
              MenuProps: {
                PaperProps: {
                  sx: styles.dropdownPaper,
                },
              },
            }}
          >
            <MenuItem sx={styles.menuItem} value={'months'}>
              {t('specialization.statistics.interview_chart_months')}
            </MenuItem>
            <MenuItem sx={styles.menuItem} value={'days'}>
              {t('specialization.statistics.interview_chart_days')}
            </MenuItem>
          </Select>
        </Box>
      </Box>
      <Box sx={styles.chartWrapper}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={selectedPeriod} margin={{ top: 0, right: 5, left: -30, bottom: 0 }} >
            <defs>
              <linearGradient id='colorConducted' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#FFC061' stopOpacity={1} />
                <stop offset='29.8%' stopColor='#F39E37' stopOpacity={1} />
                <stop offset='100%' stopColor='#8D5C20' stopOpacity={1} />
              </linearGradient>
              <linearGradient id='colorPassed' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#B07AFD' stopOpacity={1} />
                <stop offset='36.8%' stopColor='#8133F1' stopOpacity={1} />
                <stop offset='100%' stopColor='#4A1D8B' stopOpacity={1} />
              </linearGradient>
            </defs>
            <Legend iconType="circle" layout="horizontal" align="center" verticalAlign="top" />
            <CartesianGrid strokeDasharray='7 7' vertical={false} strokeWidth={0.5} />
            <XAxis dataKey='name' />
            <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} interval={0}/>
            <Tooltip contentStyle={tooltipContent} labelStyle={tooltipLabel} />
            <Bar dataKey='conducted' name={t('specialization.interviewsChart.conducted')} fill='url(#colorConducted)' radius={[2, 2, 0, 0]} />
            <Bar dataKey='passed' name={t('specialization.interviewsChart.passed')} fill='url(#colorPassed)' radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default InterviewChart;
