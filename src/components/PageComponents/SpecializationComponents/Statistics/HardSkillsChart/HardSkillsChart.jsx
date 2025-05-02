import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import useHardSkillData from '@utils/hooks/specialization/useHardSkillData';
import { ErrorComponent } from '@components/UI/Exceptions';
import HardSkillsChartSkeleton from '@components/UI/Skeleton/Pages/specializationSkeleton/HardSkillsChartSkeleton';
import useTooltipColorChart from '@utils/hooks/useTooltipColorChart.js';
import { useSelector } from 'react-redux';
import { DARK_THEME } from '@utils/constants/Theme/theme.js';
import { roundData } from '../utils';
import EmptyLayerSvgDark from '../../../../../assets/pictures/emptySkillsAndLayersPictures/emptyHardSkillsLayerDark.svg?react';
import EmptyLayerSvgLight from '../../../../../assets/pictures/emptySkillsAndLayersPictures/emptyHardSkillsLayerLight.svg?react';
import { styles } from './HardSkillsChart.styles.js';
import useThemeHardSkillsChart from './useThemeHardSkillsChart';

const HardSkillsChart = () => {
  const { itemStyle, contentStyle } = useTooltipColorChart();
  const { skills, isFetching, isError } = useHardSkillData();
  const { t } = useTranslation();
  const { grad1, grad2 } = useThemeHardSkillsChart();
  const roundedSkills = roundData(skills);
  const { mode } = useSelector((state) => state.theme);

  if (isFetching) {
    return <HardSkillsChartSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.hardSkillsChartContainer}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title} variant='subtitle2'>
          {t('specialization.statistics.hard_skills_chart_title')}
        </Typography>
        <Typography sx={styles.text} variant='subtitle3'>
          {t('specialization.statistics.hard_skills_chart_text')}
        </Typography>
      </Box>
      {skills.length < 1 ? (
        <Box height={'auto'} maxWidth={'274px'}>
          {mode === DARK_THEME ? <EmptyLayerSvgDark /> : <EmptyLayerSvgLight />}
        </Box>
      ) : (
        <RadarChart
          data={roundedSkills}
          height={264}
          outerRadius={130}
          style={{ height: 'auto', width: 'auto', padding: '10px' }}
          width={264}
        >
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
      )}
    </Box>
  );
};

export default HardSkillsChart;
