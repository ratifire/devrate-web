import { Gauge } from '@mui/x-charts';
import PropTypes from 'prop-types';
import { styles } from './LevelGauge.styles';

const LevelGauge = ({ gradient, colorGrad, fz, transformX, height, ...props }) => {
  return (
    <Gauge
      {...props}
      cornerRadius='90%'
      endAngle={90}
      innerRadius='80%'
      outerRadius='100%'
      startAngle={-90}
      sx={styles.gauge({ colorGrad, fz, transformX, height })}
    >
      <defs>{gradient}</defs>
    </Gauge>
  );
};

LevelGauge.propTypes = {
  gradient: PropTypes.node.isRequired,
  colorGrad: PropTypes.string.isRequired,
  fz: PropTypes.number.isRequired,
  transformX: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default LevelGauge;
