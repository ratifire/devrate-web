import { Gauge } from '@mui/x-charts';
import PropTypes from 'prop-types';
import { styles } from './LevelGauge.styles';

const LevelGauge = ({ grad1, grad2, grad3, grad4, ...props }) => {
  return (
    <Gauge
      {...props}
      cornerRadius='90%'
      endAngle={90}
      innerRadius='80%'
      outerRadius='100%'
      startAngle={-90}
      sx={styles.gauge}
    >
      <defs>
        <linearGradient id='gradient' x1='0%' x2='100%' y1='0%' y2='0%'>
          <stop offset='0.04%' style={{ stopColor: grad1, stopOpacity: 1 }} />
          <stop offset='26.65%' style={{ stopColor: grad2, stopOpacity: 1 }} />
          <stop offset='57.07%' style={{ stopColor: grad3, stopOpacity: 1 }} />
          <stop offset='90.86%' style={{ stopColor: grad4, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </Gauge>
  );
};

LevelGauge.propTypes = {
  grad1: PropTypes.string,
  grad2: PropTypes.string,
  grad3: PropTypes.string,
  grad4: PropTypes.string,
};

export default LevelGauge;
