import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ErrorComponent } from '../../../../UI/Exceptions';
import {
  arithmeticAverageSkillValue,
  createTenDaysHistoryData,
  createTenMonthsHistoryData,
  getCurrentAndLastMonths,
  useGetHistoryData,
  useHandleChange,
  useTooltip,
} from '../utils';
import { ChartDropDown } from '../../../../UI/Specialization/ChartDropDown';
import { SkillsAssessmentChartSkeleton } from '../../../../UI/Skeleton';
import { styles } from './SkillsAssessmentChart.styles';
import useSkillsAssessmentChart from './useSkillsAssessmentChart';

const SkillsAssessmentChart = () => {
  const { to, from } = useMemo(() => getCurrentAndLastMonths(), []);
  const { data: dataHistory, isError, isFetching } = useGetHistoryData({ to, from });
  const { t } = useTranslation();
  const { itemStyle, contentStyle } = useTooltip();
  const arithmeticAverage = arithmeticAverageSkillValue({
    data: dataHistory,
    secondValue: 'hardSkillMark',
    firstValue: 'softSkillMark',
  });
  const { grad1, grad2, grad3 } = useSkillsAssessmentChart();

  const dataDays = useMemo(
    () => createTenDaysHistoryData({ data: dataHistory, average: arithmeticAverage }),
    [dataHistory]
  );
  const dataMonths = useMemo(
    () => createTenMonthsHistoryData({ t, data: dataHistory, average: arithmeticAverage }),
    [dataHistory]
  );
  const { handleChange, selectedPeriod } = useHandleChange({ dataDays, dataMonths });

  if (isFetching) {
    return <SkillsAssessmentChartSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.skillsAssessmentChartContainer}>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography variant='subtitle2'>{t('specialization.statistics.skills_assessment_chart_title')}</Typography>
        </Box>
        <ChartDropDown
          days={t('specialization.statistics.interview_chart_days')}
          handleChange={handleChange}
          months={t('specialization.statistics.interview_chart_months')}
        />
      </Box>
      <Box sx={styles.chartWrapper}>
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart data={selectedPeriod} margin={{ top: 6, right: 0, left: -40, bottom: 0 }}>
            <defs>
              <linearGradient id='colorValue' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor={grad1} stopOpacity={1} />
                <stop offset='53.8%' stopColor={grad2} stopOpacity={1} />
                <stop offset='100%' stopColor={grad3} stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis domain={[0, 9]} interval={0} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            <CartesianGrid strokeDasharray='7 7' strokeWidth={0.5} vertical={false} />
            <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} />
            <Area
              dataKey='value'
              fill='url(#colorValue)'
              fillOpacity={1}
              stroke='#FFFFFF'
              strokeWidth={0}
              type='monotone'
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SkillsAssessmentChart;
