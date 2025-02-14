import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserAllSpecializationQuery } from '../../../redux/specialization/specializationApiSlice.js';
import { selectCurrentUser } from '../../../redux/auth/authSlice.js';
import Respondent from './Respondent/Respondent.jsx';
import { styles } from './InterviewRequest.styles.js';
import Interviewer from './Interviwer/index.js';

const InterviewRequest = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;
  const { data: userAllSpecializations } = useGetUserAllSpecializationQuery(id, { skip: !id });
  const [specCurrent, setSpecCurrent] = useState('');
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (userAllSpecializations && userAllSpecializations.length > 0) {
      const mainSpecialization = userAllSpecializations.find((item) => item.mainSpecialization);
      if (mainSpecialization) {
        setSpecCurrent(mainSpecialization.specializationName);
      }
    }
  }, [userAllSpecializations]);

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

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant={'h4'}> Requests </Typography>
        <Box>
          <FormControl>
            <InputLabel htmlFor={id} sx={styles.label}>
              {t('Specializations')}
            </InputLabel>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: styles.selectPaper,
                  },
                },
              }}
              label={'Specializations'}
              open={open}
              sx={styles.select}
              value={specCurrent}
              variant='outlined'
              onChange={handleChange}
              onClose={handleClose}
              onOpen={handleOpen}
            >
              {userAllSpecializations?.map((item) => (
                <MenuItem key={item.specializationName} sx={styles.selectItem} value={item.specializationName}>
                  {item.specializationName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        {' '}
        <Respondent />
      </Box>

      <Box>
        {' '}
        <Interviewer />
      </Box>
    </Box>
  );
};

export default InterviewRequest;
