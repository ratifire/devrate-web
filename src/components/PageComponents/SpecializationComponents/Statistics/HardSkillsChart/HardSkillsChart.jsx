import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import { useUserSkillsAndMasteryData } from '../../../../../utils/hooks/specialization';
import roundData from '../utils/roundData';
import { styles } from './HardSkillsChart.styles.js';
import { useTooltip } from '../utils';
import { LoaderComponent, ErrorComponent } from '../../../../UI/Exceptions';

const HardSkillsChart = () => {
  const { tooltipContent, tooltipLabel } = useTooltip();
  const { skills, isLoading, isError } = useUserSkillsAndMasteryData();
  const { t } = useTranslation();
  const roundedSkills = roundData(skills);

  if (isLoading) {
    return <LoaderComponent/>
  }

  if (isError) {
    return <ErrorComponent />
  }

  return (
    <Box sx={styles.hardSkillsChartContainer}>
      <Typography variant='subtitle2' sx={styles.title}>
        {t('specialization.statistics.hard_skills_chart_title')}
      </Typography>
      <Typography variant='subtitle3' sx={styles.text}>
        {t('specialization.statistics.hard_skills_chart_text')}
      </Typography>
      <RadarChart outerRadius={130} width={264} height={264} data={roundedSkills}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' tick={false} />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          dataKey='averageMark'
          stroke='url(#gradient2)'
          strokeWidth={3}
          fillOpacity={0.3}
          dot={({ cx, cy, index }) => <circle key={index} cx={cx} cy={cy} r={2} fill='#16FFB9' />}
        />
        <Tooltip contentStyle={tooltipContent} labelStyle={tooltipLabel} />
        <defs>
          <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' style={{ stopColor: '#16FFB9', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#DAFE22', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </RadarChart>
    </Box>
  );
};

export default HardSkillsChart;
