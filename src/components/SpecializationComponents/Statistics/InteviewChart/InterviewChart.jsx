/* eslint-disable */

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, CircularProgress, MenuItem, Select, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useGetInterviewSummariesByUserIdQuery } from '../../../../redux/interview/interviewApiSlice';
import { styles } from './InterviewChart.style';
import mockData from './mockData';
import { getInterviewsByDays, getInterviewsByMonths } from './helpers';

const InterviewChart = () => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data, isLoading, isError } = useGetInterviewSummariesByUserIdQuery(userId);
  const { t } = useTranslation();
  const months = useMemo(() => getInterviewsByMonths({ data: mockData, userId, t }), [data, userId]);
  const days = useMemo(() => getInterviewsByDays({ data: mockData, userId }), [data, userId]);
  const [selectedPeriod, setSelectedPeriod] = useState(months);

  const handleChange = (event) => {
    if (event.target.value === 'months') {
      setSelectedPeriod(months);
    } else if (event.target.value === 'days') {
      setSelectedPeriod(days);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
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
          <BarChart data={selectedPeriod}>
            <Legend />
            <CartesianGrid strokeDasharray='7 7' vertical={false} strokeWidth={0.5} />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='conducted' fill='#CEB0FA' radius={[2, 2, 0, 0]} />
            <Bar dataKey='passed' fill='#8133F1' radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default InterviewChart;
