import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateSkillsMutation } from '@redux/api/slices/skillsApiSlice.js';
import { refetchSkills } from '@redux/slices/updateTab/updateTabSlice.js';
import CustomTooltip from '@components/UI/CustomTooltip';
import { styles } from './SkillsItem.styles';

const SkillsItem = ({ data, flex }) => {
  const { id, name, averageMark, hidden } = data;
  const [hiddenSkill, setHiddenSkill] = useState(hidden);
  const mark = Math.round(averageMark);
  const [updateSkills] = useUpdateSkillsMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setHiddenSkill(hidden);
  }, [data]);

  const handlerClick = async () => {
    setHiddenSkill(!hiddenSkill);
    await updateSkills({ id, hide: !hidden }).unwrap();
    dispatch(refetchSkills());
  };

  const iconEye = hiddenSkill ? (
    <VisibilityOutlinedIcon sx={styles.eye} />
  ) : (
    <VisibilityOffOutlinedIcon sx={styles.eyeHidden} />
  );

  return (
    <Box sx={[styles.wrapper, flex]}>
      <Box sx={styles.iconWrapper}>
        <IconButton sx={styles.icon} type='button' onClick={handlerClick}>
          {iconEye}
        </IconButton>
      </Box>
      <Typography sx={styles.text} variant='body1'>
        <CustomTooltip title={name}>{name}</CustomTooltip>
      </Typography>
      <Typography sx={styles.number} variant='subtitle2'>
        {mark}
      </Typography>
    </Box>
  );
};

SkillsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    averageMark: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
  }).isRequired,
  flex: PropTypes.any,
};

export default SkillsItem;
