import React from 'react';
import {Box, Typography} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {styles} from './LevelChart.style.js';
import {useTranslation} from "react-i18next";

const LevelChart = () => {
	const { t } = useTranslation();
	
	return (
		<Box sx={styles.levelChartContainer}>
			<Typography variant='subtitle2' sx={styles.title}>
				{t('specialization.statistics.level_chart_title')}
			</Typography>
			<Box sx={styles.chartContainer}>
				<Box sx={{position: 'relative'}}>
					<Box
						sx={styles.chartWrapper}
					>
						<Gauge
							value={90}
							startAngle={-90}
							endAngle={90}
							innerRadius='80%'
							outerRadius='100%'
							cornerRadius='90%'
							sx={{
								padding: 0,
								height: '150px',
								'.MuiGauge-valueArc': {
									fill: 'url(#gradient)',
									strokeWidth: 12,
								},
								[`& .${gaugeClasses.valueText}`]: {
									fontSize: 48,
									transform: 'translate(0px, -30px)',
								},
							}}
							text={({value}) => `${value} %`}
						>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
									<stop offset='0%' style={{stopColor: '#EFE6FD', stopOpacity: 1}}/>
									<stop offset='50%' style={{stopColor: '#B78AF7', stopOpacity: 1}}/>
									<stop offset='100%' style={{stopColor: '#8133F1', stopOpacity: 1}}/>
								</linearGradient>
							</defs>
						</Gauge>
					</Box>
				</Box>
				<Typography variant='caption' sx={styles.leftCaption}>
					{t('specialization.statistics.level_chart_left_caption')}
				</Typography>
				<Typography variant='caption' sx={styles.rigthCaption}>
					{t('specialization.statistics.level_chart_right_caption')}
				</Typography>
			</Box>
		</Box>
	);
};

export default LevelChart;