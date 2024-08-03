/* eslint-disable */

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, CircularProgress, MenuItem, Select, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useTranslation } from "react-i18next"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { styles } from './SkillsAssessmentChart.style'
import {
  createTenDaysHistoryData,
  createTenMonthsHistoryData,
  getCurrentAndLastMonths,
  useGetHistoryData, useHandleChange,
} from '../utils';

const SkillsAssessmentChart = () => {
  const { to, from } = useMemo(() => getCurrentAndLastMonths(), []);
  const { dataHistory, isError, isLoading } = useGetHistoryData({ to, from })
  const { t } = useTranslation();
  const dataDays = useMemo(() => createTenDaysHistoryData({ data: dataHistory }), [dataHistory]);
  const dataMonths = useMemo(() => createTenMonthsHistoryData({ t, data: dataHistory }), [dataHistory]);
  const { handleChange, selectedPeriod } = useHandleChange({ dataDays, dataMonths })

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>Something error...</Typography>;
  }

  return (
    <Box sx={styles.skillsAssessmentChartContainer}>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography variant='subtitle2'>
             {t('specialization.statistics.skills_assessment_chart_title')}
          </Typography>
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

      <Box
        sx={styles.chartWrapper}
      >
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={selectedPeriod} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#25CBFF' stopOpacity={1} />
                <stop offset='48.5%' stopColor='rgba(37, 203, 255, 0.515)' stopOpacity={1} />
                <stop offset='100%' stopColor='rgba(22, 255, 185, 0)' stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='7 7' vertical={false} strokeWidth={0.5} />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#25CBFF'
              strokeWidth={3}
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
