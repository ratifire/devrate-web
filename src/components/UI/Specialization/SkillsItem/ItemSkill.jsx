import { Box, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '../../../UI/CustomTooltip';
import LinearProgressWithLabel from '../../../UI/LinearProgressWithLabel';
import { CustomArrowCircleDownIcon } from './CustomArrowCircleDownIcon';
import { CustomArrowCircleUpIcon } from './CustomArrowCircleUpIcon';
import { styles } from './ItemSkill.styles';

const ItemSkill = ({ name, value, grows }) => {
  const icon = grows ? <CustomArrowCircleUpIcon /> : <CustomArrowCircleDownIcon />;

  return (
    <>
      <Box sx={styles.skillContainer}>
        <Box sx={styles.iconWrapper}>
          {icon}
          <CustomTooltip title={name}>
            <Typography variant='subtitle2'>{name}</Typography>
          </CustomTooltip>
        </Box>
        <LinearProgressWithLabel orientation='horizontal' size='s' value={value} />
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

ItemSkill.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  grows: PropTypes.bool.isRequired,
};

export default ItemSkill;
