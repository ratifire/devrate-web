import { useTheme } from '@mui/material/styles';

const useThemeSoftSkillsChart = () => {
  const theme = useTheme();

  const gradSoft1 = theme.palette.statistics.softSkillsGradient.grad1;
  const gradSoft2 = theme.palette.statistics.softSkillsGradient.grad2;
  const gradSoft3 = theme.palette.statistics.softSkillsGradient.grad3;

  return {
    gradSoft1,
    gradSoft2,
    gradSoft3,
  };
};

export default useThemeSoftSkillsChart;
