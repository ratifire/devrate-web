import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ErrorComponent, LoaderComponent } from '../../../../UI/Exceptions';
import {
  arithmeticAverageSkillValue,
  createTenDaysHistoryData,
  createTenMonthsHistoryData,
  getCurrentAndLastMonths,
  useGetHistoryData,
  useHandleChange,
  useTooltip,
} from '../utils';
import { styles } from './SkillsAssessmentChart.styles';

const SkillsAssessmentChart = () => {
  const { to, from } = useMemo(() => getCurrentAndLastMonths(), []);
  const { data: dataHistory, isError, isFetching } = useGetHistoryData({ to, from });
  const { t } = useTranslation();
  const { tooltipContent, tooltipLabel } = useTooltip();
  const arithmeticAverage = arithmeticAverageSkillValue({
    data: dataHistory,
    secondValue: 'hardSkillMark',
    firstValue: 'softSkillMark',
  });

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
    return <LoaderComponent />;
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
          <AreaChart data={selectedPeriod} margin={{ top: 6, right: 0, left: -40, bottom: 0 }}>
            <defs>
              <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#DAFE22' stopOpacity={1} />
                <stop offset='53.8%' stopColor='rgba(130, 254, 102, 0.552)' stopOpacity={1} />
                <stop offset='100%' stopColor='rgba(22, 255, 185, 0)' stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis domain={[0, 9]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} interval={0} />
            <CartesianGrid strokeDasharray='7 7' vertical={false} strokeWidth={0.5} />
            <Tooltip contentStyle={tooltipContent} labelStyle={tooltipLabel} />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#FFFFFF'
              strokeWidth={0}
              fillOpacity={1}
              fill='url(#colorValue)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SkillsAssessmentChart;
