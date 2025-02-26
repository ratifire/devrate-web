import { useTheme } from '@mui/material/styles';

const useColorPartEvalChart = () => {
  const theme = useTheme();

  return {
    leftGrad1: theme.palette.partEvalChart.leftGrad1,
    leftGrad2: theme.palette.partEvalChart.leftGrad2,
    leftGrad3: theme.palette.partEvalChart.leftGrad3,
    rightGrad1: theme.palette.partEvalChart.rightGrad1,
    rightGrad2: theme.palette.partEvalChart.rightGrad2,
    rightGrad3: theme.palette.partEvalChart.rightGrad3,
    color: theme.palette.partEvalChart.color,
  };
};

export default useColorPartEvalChart;
