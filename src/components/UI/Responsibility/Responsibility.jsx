import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './Responsibility.styles';

const Responsibility = ({ responsibility, tobeDeleted, responsibilityDeleteHandler }) => {
  return (
    <Box sx={tobeDeleted ? styles.responsibilityContainerwithBTN : styles.responsibilityContainer}>
      <Typography sx={styles.responsibilityText} variant='subtitle2'>
        {responsibility}
      </Typography>
      {tobeDeleted && (
        <IconButton sx={styles.icon} onClick={() => responsibilityDeleteHandler(responsibility)}>
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

Responsibility.propTypes = {
  responsibility: PropTypes.string,
  tobeDeleted: PropTypes.bool,
  responsibilityDeleteHandler: PropTypes.func,
};
export default Responsibility;
