import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './SkillsItem.styles';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useUpdateSkillsMutation } from '../../../../../../../redux/services/skillsApiSlice';
import { useFormik } from 'formik';
import { SkillsItemSchema } from '../../../../../../../utils/valadationSchemas/index';
import CustomTooltip from '../../../../../../UI/CustomTooltip';

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
    <Box sx={[ styles.wrapper, flex ]}>
      <Box sx={styles.iconWrapper}>
        <form onSubmit={formik.handleSubmit}>
          <IconButton sx={styles.icon} type='submit' onClick={handlerClick}>
            {iconEye}
          </IconButton>
        </form>
      </Box>
      <Typography variant='body1' sx={styles.text}>
        <CustomTooltip title={name}>
        {name}
        </CustomTooltip>
      </Typography>
      <Typography variant="subtitle2" sx={styles.number}>
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
  flex: PropTypes.any
};

export default SkillsItem;
