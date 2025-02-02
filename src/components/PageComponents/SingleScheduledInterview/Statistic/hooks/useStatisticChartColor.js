import { useTheme } from '@mui/material/styles';

const useStatisticChartColor = () => {
  const theme = useTheme();

  const softSkills = {
    grad1: theme.palette.statisticChart.softSkills.grad1,
    grad2: theme.palette.statisticChart.softSkills.grad2,
    grad3: theme.palette.statisticChart.softSkills.grad3,
  };

  const hardSkills = {
    grad1: theme.palette.statisticChart.hardSkills.grad1,
    grad2: theme.palette.statisticChart.hardSkills.grad2,
    grad3: theme.palette.statisticChart.hardSkills.grad3,
  };

  const overall = {
    grad1: theme.palette.statisticChart.overall.grad1,
    grad2: theme.palette.statisticChart.overall.grad2,
    grad3: theme.palette.statisticChart.overall.grad3,
    grad4: theme.palette.statisticChart.overall.grad4,
  };

  return { softSkills, hardSkills, overall };
};

export default useStatisticChartColor;
