import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useFormik } from 'formik';
import { useUpdateSkillsMutation } from '../../../../../../../redux/services/skillsApiSlice';
import { SkillsItemSchema } from '../../../../../../../utils/validationSchemas/index';
import CustomTooltip from '../../../../../../UI/CustomTooltip';
import { styles } from './SkillsItem.styles';

const SkillsItem = ({ data, flex }) => {
  const { id, name, averageMark, hidden } = data;
  const [hiddenSkill, setHiddenSkill] = useState(hidden);
  const mark = Math.round(averageMark);

  const [updateSkills] = useUpdateSkillsMutation();

  const onSubmit = () => {
    updateSkills({
      id,
      hide: hiddenSkill,
    });
  };
  const formik = useFormik({
    initialValues: {
      hidden: hiddenSkill,
    },
    validationSchema: SkillsItemSchema,
    onSubmit,
  });
  const iconEye = hiddenSkill ? (
    <VisibilityOutlinedIcon sx={styles.eye} />
  ) : (
    <VisibilityOffOutlinedIcon sx={styles.eyeHidden} />
  );
  const handlerClick = () => {
    setHiddenSkill(!hiddenSkill);
  };
  return (
    <Box sx={[styles.wrapper, flex]}>
      <Box sx={styles.iconWrapper}>
        <form onSubmit={formik.handleSubmit}>
          <IconButton sx={styles.icon} type='submit' onClick={handlerClick}>
            {iconEye}
          </IconButton>
        </form>
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
