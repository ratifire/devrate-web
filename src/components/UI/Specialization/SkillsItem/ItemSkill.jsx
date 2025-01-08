import { Box, Divider } from '@mui/material';
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
          <CustomTooltip title={name} variant='subtitle2'>
            {name}
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
