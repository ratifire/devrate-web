/* eslint-disable */
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';

import { styles } from './HardSkillsChart.style.js';
import {useTranslation} from "react-i18next";
import { useSelector } from 'react-redux';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';

const HardSkillsChart = () => {
  const { t } = useTranslation();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);
  const specializationId = specializations?.[0]?.id
  const { data: mainMastery, isLoading: isLoadingMainMastery } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });
  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId: mainMastery?.id }, { skip: !mainMastery?.id });

  if (isLoadingSpecializations || isLoadingMainMastery || isLoadingSkills) {
    return <CircularProgress />;
  }

  if (isErrorSkills) {
    return <Typography variant='h6'>Something error...</Typography>;
  }
  return (
    <Box sx={styles.hardSkillsChartContainer}>
      <Typography variant='subtitle2' sx={styles.title}>
         {t('specialization.statistics.hard_skills_chart_title')}
      </Typography>
      <Typography variant='subtitle3' sx={styles.text}>
         {t('specialization.statistics.hard_skills_chart_text')}
      </Typography>
      <RadarChart outerRadius={130} width={264} height={264} data={skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' tick={false} />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          dataKey='averageMark'
          stroke='url(#gradient2)'
          strokeWidth={3}
          fillOpacity={0.3}
          dot={<circle cx={1} cy={1} r={2} fill='#16FFB9' />}
        />
        <Tooltip
          contentStyle={styles.tooltipContent}
          labelStyle={styles.tooltipLabel}
        />
        <defs>
          <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' style={{ stopColor: '#16FFB9', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#25CBFF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </RadarChart>
    </Box>
  );
};

export default HardSkillsChart;
