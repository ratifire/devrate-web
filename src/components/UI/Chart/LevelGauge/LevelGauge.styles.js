import { gaugeClasses } from '@mui/x-charts';

export const styles = {
  gauge: {
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
  },
};
