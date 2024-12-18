import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './SliderAssessmentBox.styles';

const SliderAssessmentBox = ({ children, size }) => {
  return <Box sx={(theme) => styles.box(theme, size)}>{children}</Box>;
};

SliderAssessmentBox.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

SliderAssessmentBox.defaultProps = {
  size: 'small',
};

export default SliderAssessmentBox;
