import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsItem.styles';

const SkillsItem = ({ data, isSorted }) => {
  const { averageMark, name } = data;

  return (
    <Box sx={isSorted ? styles.wrapperSorted : styles.wrapper}>
      <Typography sx={styles.text} variant='body'>
        <CustomTooltip title={name}>{name}</CustomTooltip>
      </Typography>
      <Typography sx={styles.number} variant='subtitle2'>
        {Math.round(averageMark)}
      </Typography>
    </Box>
  );
};

SkillsItem.propTypes = {
  data: PropTypes.object.isRequired,
  isSorted: PropTypes.bool.isRequired,
};
SkillsItem.defaultProps = {
  isSorted: false,
};
export default SkillsItem;
