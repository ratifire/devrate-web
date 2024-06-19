import React from 'react';
import { Box, Typography } from '@mui/material';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';

import { styles } from './HardSkillsChart.style.js';

const data = [
  {
    subject: 'React',
    level: 120,
    fullMark: 150,
  },
  {
    subject: 'Java',
    level: 98,
    fullMark: 150,
  },
  {
    subject: 'Next.JS',
    level: 86,
    fullMark: 150,
  },
  {
    subject: 'MobX',
    level: 99,
    fullMark: 150,
  },
  {
    subject: 'JS',
    level: 85,
    fullMark: 150,
  },
  {
    subject: 'Node.js',
    level: 65,
    fullMark: 150,
  },
];

const HardSkillsChart = () => {
  return (
    <Box sx={{ width: '264px', height: '340px' }}>
      <Typography variant='subtitle2' sx={styles.title}>
        Hard Skills за продуктивністю
      </Typography>
      <Typography variant='subtitle3' sx={styles.title}>
        Цей графік відображає
      </Typography>
      <RadarChart outerRadius={130} width={264} height={264} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' tick={false} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          dataKey='level'
          stroke='url(#gradient2)'
          strokeWidth={3}
          fillOpacity={0.3}
          dot={<circle cx={1} cy={1} r={2} fill='#16FFB9' />}
        />
        <Tooltip
          contentStyle={{
            color: '#FFFFFFF',
            backgroundColor: '#303032',
            border: 'none',
            borderRadius: '4px',
          }}
          labelStyle={{
            color: '#FFFFFFF',
            backgroundColor: '#303032',
            fontSize: '14px',
          }}
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
