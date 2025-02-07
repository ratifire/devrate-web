import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';
import CustomTooltip from '../CustomTooltip/index.js';
import { styles } from './StarMainSpecialization.styles.js';

const StarMainSpecialization = ({ title }) => {
  return (
    <CustomTooltip translate title={title}>
      <StarIcon sx={styles.star} />
    </CustomTooltip>
  );
};

StarMainSpecialization.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StarMainSpecialization;
