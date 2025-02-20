import { useTheme } from '@mui/material/styles';

const useStatisticChartColor = () => {
  const theme = useTheme();

  const softSkillsColors = {
    grad1: theme.palette.statisticChart.softSkills.grad1,
    grad2: theme.palette.statisticChart.softSkills.grad2,
    grad3: theme.palette.statisticChart.softSkills.grad3,
  };

  const hardSkillsColors = {
    grad1: theme.palette.statisticChart.hardSkills.grad1,
    grad2: theme.palette.statisticChart.hardSkills.grad2,
    grad3: theme.palette.statisticChart.hardSkills.grad3,
  };

  const overallColors = {
    grad1: theme.palette.statisticChart.overall.grad1,
    grad2: theme.palette.statisticChart.overall.grad2,
    grad3: theme.palette.statisticChart.overall.grad3,
    grad4: theme.palette.statisticChart.overall.grad4,
  };

  return { softSkillsColors, hardSkillsColors, overallColors };
};

export default useStatisticChartColor;
