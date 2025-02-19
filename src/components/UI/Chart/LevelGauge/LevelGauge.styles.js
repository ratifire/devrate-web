import { gaugeClasses } from '@mui/x-charts';

export const styles = {
  gauge: ({ colorGrad, fz, transformX, height }) => ({
    padding: 0,
    height: `${height}px`,
    '.MuiGauge-valueArc': {
      fill: `url(#${colorGrad})`,
      strokeWidth: 12,
    },
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: `${fz}px`,
      transform: `translate(0px, ${transformX}px)`,
    },
  }),
};
