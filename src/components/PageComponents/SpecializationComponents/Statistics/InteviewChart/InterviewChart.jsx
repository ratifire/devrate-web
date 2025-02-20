import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useGetInterviewSummariesStatisticQuery } from '@redux/api/slices/chart/chartApiSlice';
import { ErrorComponent } from '@components/UI/Exceptions';
import { ChartDropDown } from '@components/UI/Specialization/ChartDropDown';
import InterviewChartSkeleton from '@components/UI/Skeleton/Pages/specializationSkeleton/InterviewChartSkeleton';
import {
  createTenDaysInterviewData,
  createTenMonthsInterviewData,
  getCurrentAndLastMonths,
  useHandleChange,
  useTooltip,
} from '../utils';
import { styles } from './InterviewChart.styles';
import useThemeInterviewChart from './useThemeInterviewChart';

const InterviewChart = () => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { to, from } = useMemo(() => getCurrentAndLastMonths(), []);
  const { data, isFetching, isError } = useGetInterviewSummariesStatisticQuery({ userId, from, to }, { skip: !userId });
  const { t } = useTranslation();
  const dataMonths = useMemo(() => createTenMonthsInterviewData({ t, data }), [data]);
  const dataDays = useMemo(() => createTenDaysInterviewData({ data }), [data]);
  const { itemStyle, contentStyle } = useTooltip();
  const { conductedGrad1, conductedGrad2, conductedGrad3, passedGrad1, passedGrad2, passedGrad3 } =
    useThemeInterviewChart();

  const { handleChange, selectedPeriod } = useHandleChange({ dataDays, dataMonths });

  if (isFetching) {
    return <InterviewChartSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.interviewChartContainer}>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography variant='subtitle2'>{t('specialization.statistics.interview_chart_title')}</Typography>
        </Box>
        <ChartDropDown
          days={t('specialization.statistics.interview_chart_days')}
          handleChange={handleChange}
          months={t('specialization.statistics.interview_chart_months')}
        />
      </Box>
      <Box sx={styles.chartWrapper}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart data={selectedPeriod} margin={{ top: 0, right: 5, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id='colorConducted' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor={conductedGrad1} stopOpacity={1} />
                <stop offset='29.8%' stopColor={conductedGrad2} stopOpacity={1} />
                <stop offset='100%' stopColor={conductedGrad3} stopOpacity={1} />
              </linearGradient>
              <linearGradient id='colorPassed' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor={passedGrad1} stopOpacity={1} />
                <stop offset='36.8%' stopColor={passedGrad2} stopOpacity={1} />
                <stop offset='100%' stopColor={passedGrad3} stopOpacity={1} />
              </linearGradient>
            </defs>
            <Legend align='center' iconType='circle' layout='horizontal' verticalAlign='top' />
            <CartesianGrid strokeDasharray='7 7' strokeWidth={0.5} vertical={false} />
            <XAxis dataKey='name' />
            <YAxis domain={[0, 10]} interval={0} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} />
            <Bar
              dataKey='conducted'
              fill='url(#colorConducted)'
              name={t('specialization.interviewsChart.conducted')}
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey='passed'
              fill='url(#colorPassed)'
              name={t('specialization.interviewsChart.passed')}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default InterviewChart;
