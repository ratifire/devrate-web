import { useTheme } from '@mui/material/styles';

const useSkillsAssessmentChart = () => {
  const theme = useTheme();

  const grad1 = theme.palette.specialization.assessmentChart.grad1;
  const grad2 = theme.palette.specialization.assessmentChart.grad2;
  const grad3 = theme.palette.specialization.assessmentChart.grad3;

  return {
    grad1,
    grad2,
    grad3,
  }
}

export default useSkillsAssessmentChart;
