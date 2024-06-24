import React from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styles } from './InterviewChart.style';
import {useTranslation} from "react-i18next";

const months = [
    { name: 'Jan', conducted: 2, passed: 10 },
    { name: 'Mar', conducted: 3, passed: 9 },
    { name: 'May', conducted: 4, passed: 8 },
    { name: 'Jul', conducted: 5, passed: 7 },
    { name: 'Sep', conducted: 6, passed: 6 },
    { name: 'Nov', conducted: 7, passed: 5 },
];

const days = [
    { name: '1-5', conducted: 2, passed: 11 },
    { name: '6-10', conducted: 12, passed: 1 },
    { name: '11-15', conducted: 2, passed: 16 },
    { name: '16-20', conducted: 5, passed: 10 },
    { name: '21-25', conducted: 2, passed: 5 },
    { name: '26-30', conducted: 8, passed: 2 },
];

const InterviewChart = () => {
    const [selectedPeriod, setSelectedPeriod] = React.useState(months);
    const { t } = useTranslation();
    
    const handleChange = (event) => {
        if (event.target.value === 'months') {
            setSelectedPeriod(months);
        } else if (event.target.value === 'days') {
            setSelectedPeriod(days);
        }
    };
    
    return (
        <Box sx={styles.interviewChartContainer}>
            <Box sx={styles.titleContainer}>
                <Box>
                    <Typography variant='subtitle2'>
                        {t('specialization.statistics.interview_chart_title')}
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
            
            <Box sx={styles.chartWrapper}>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={selectedPeriod}>
                        <Legend />
                         <CartesianGrid strokeDasharray='7 7' vertical={false} strokeWidth={0.5} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip/>
                        <Bar dataKey="conducted" fill="#CEB0FA" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="passed" fill="#8133F1" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default InterviewChart;
