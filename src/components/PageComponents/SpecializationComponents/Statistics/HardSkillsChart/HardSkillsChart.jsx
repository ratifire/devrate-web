import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import useHardSkillData from '@utils/hooks/specialization/useHardSkillData';
import { ErrorComponent } from '@components/UI/Exceptions';
import HardSkillsChartSkeleton from '@components/UI/Skeleton/Pages/specializationSkeleton/HardSkillsChartSkeleton';
import { roundData, useTooltip } from '../utils';
import { styles } from './HardSkillsChart.styles.js';
import useThemeHardSkillsChart from './useThemeHardSkillsChart';

const HardSkillsChart = () => {
  const { itemStyle, contentStyle } = useTooltip();
  const { skills, isFetching, isError } = useHardSkillData();
  const { t } = useTranslation();
  const { grad1, grad2 } = useThemeHardSkillsChart();
  const roundedSkills = roundData(skills);

  if (isFetching) {
    return <HardSkillsChartSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.hardSkillsChartContainer}>
      <Typography sx={styles.title} variant='subtitle2'>
        {t('specialization.statistics.hard_skills_chart_title')}
      </Typography>
      <Typography sx={styles.text} variant='subtitle3'>
        {t('specialization.statistics.hard_skills_chart_text')}
      </Typography>
      <RadarChart data={roundedSkills} height={264} outerRadius={130} width={264}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' tick={false} />
        {!!roundedSkills.length && <PolarRadiusAxis angle={30} axisLine={false} domain={[0, 10]} tick={false} />}
        <Radar
          dataKey='averageMark'
          dot={({ cx, cy, index }) => <circle key={index} cx={cx} cy={cy} fill='url(#gradient2)' r={6} />}
          fillOpacity={0.3}
          stroke='url(#gradient2)'
          strokeWidth={3}
        />
        <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} />
        <defs>
          <linearGradient id='gradient2' x1='0%' x2='100%' y1='0%' y2='0%'>
            <stop offset='0%' style={{ stopColor: grad1, stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: grad2, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </RadarChart>
    </Box>
  );
};

export default HardSkillsChart;
