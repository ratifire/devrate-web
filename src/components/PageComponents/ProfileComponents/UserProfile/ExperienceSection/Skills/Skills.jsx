import React, { useState, useEffect } from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { styles } from './Skills.styles';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../../../../redux/specialization/specializationApiSlice';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';
import SkillsItem from './SkillsItem';
import CustomTooltip from '../../../../../UI/CustomTooltip';
import TextAreaSearch from '../../../../../FormsComponents/Inputs/TextAreaSearch';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';

const Skills = ({ id, tab, profileType, imgUrl }) => {
  
  const [specCurrent, setSpecCurrent] = useState('');
  const [open, setOpen] = useState(false);
  const [srtSearch, setSrtSearch] = useState('');
  
  
  const { data: specializations, isLoading } = useGetSpecializationByUserIdQuery(id);
  
  const selectedSpecialization = specializations?.find((s) => s.name === specCurrent);
  
  const { data: specializationsLevel } = useGetMainMasteryBySpecializationIdQuery(selectedSpecialization?.id);
  const level = specializationsLevel?.level || 'N/A';
  const { data: skills = [] } = useGetHardSkillsByMasteryIdQuery(
    { id, masteryId: specializationsLevel?.id },
    { skip: !specializationsLevel?.id },
  );
  const hardSkill = skills.filter((item) => item.hidden === true);
  const count = hardSkill.length > 1 ? 2 : 1;
  
  useEffect(() => {
    if (specializations && specializations.length > 0) {
      const mainSpecialization = specializations.find((item) => item.main);
      if (mainSpecialization) {
        setSpecCurrent(mainSpecialization.name);
      }
    }
  }, [specializations]);
  
  const handleChange = (event) => {
    const value = event.target.value;
    setSpecCurrent(value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSrtSearch(value);
  };

  if (isLoading || !specializations || specializations.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={open ? styles.skillBg : styles.skill}>
        <Box sx={styles.info}>
          <Box sx={styles.wrapperSelect}>
            {selectedSpecialization?.main &&
              <CustomTooltip title="profile.experience.skills.star" translate={true}>
                <StarIcon sx={styles.star} />
              </CustomTooltip>}
            <Select
              sx={styles.select}
              value={specCurrent}
              onChange={handleChange}
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              IconComponent={KeyboardArrowDownIcon}
              variant="standard"
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: styles.selectPaper,
                  },
                },
              }}
            >
              {specializations && specializations.map((item) => (
                <MenuItem key={item.id} value={item.name} sx={styles.selectItem}>
                  {item.name}
                  {item.main && <StarIcon sx={styles.selectItemStar} />}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography sx={styles.text} className={level} variant="body">Level {level}</Typography>
        </Box>
        <Box sx={{ ...styles.list, columnCount: count }}>
          {hardSkill?.map((item) => <SkillsItem key={item.id} data={item} />)}
        </Box>
      </Box>
      <Box sx={styles.search}>
        <TextAreaSearch
          value={srtSearch}
          handleChange={handleChangeSearch}
        />
        <IconButton sx={styles.btnIcon}>
          ds
        </IconButton>
      </Box>
    </Box>
  );
};

Skills.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Skills;