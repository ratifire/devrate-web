import { Gauge } from '@mui/x-charts';
import PropTypes from 'prop-types';
import { styles } from './LevelGauge.styles';

const LevelGauge = ({ gradient, ...props }) => {
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
      <defs>{gradient}</defs>
    </Gauge>
  );
};

LevelGauge.propTypes = {
  gradient: PropTypes.node.isRequired,
};

export default LevelGauge;
