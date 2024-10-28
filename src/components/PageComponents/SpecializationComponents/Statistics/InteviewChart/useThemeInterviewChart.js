import { useTheme } from '@mui/material/styles';

const useThemeInterviewChart = () => {
  const theme = useTheme()

  const conductedGrad1 = theme.palette.specialization.interviewChart.conductedGrad1;
  const conductedGrad2 = theme.palette.specialization.interviewChart.conductedGrad2;
  const conductedGrad3 = theme.palette.specialization.interviewChart.conductedGrad3;

  const passedGrad1 = theme.palette.specialization.interviewChart.passedGrad1;
  const passedGrad2 = theme.palette.specialization.interviewChart.passedGrad2;
  const passedGrad3 = theme.palette.specialization.interviewChart.passedGrad3;

  return {
    conductedGrad1,
    conductedGrad2,
    conductedGrad3,
    passedGrad1,
    passedGrad2,
    passedGrad3,
  }
}

export default useThemeInterviewChart;
