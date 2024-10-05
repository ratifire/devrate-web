import { useTheme } from '@mui/material/styles';

const useThemeHardSkillsChart = () => {
  const theme = useTheme()

  const grad1 = theme.palette.specialization.hardSkillsChart.grad1;
  const grad2 = theme.palette.specialization.hardSkillsChart.grad1;

  return {
    grad1,
    grad2
  }
}

export default useThemeHardSkillsChart;
