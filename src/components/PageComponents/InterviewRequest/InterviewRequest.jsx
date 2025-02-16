import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetSpecializationByUserIdQuery,
  // useGetUserAllSpecializationQuery,
} from '../../../redux/specialization/specializationApiSlice.js';
import { selectCurrentUser } from '../../../redux/auth/authSlice.js';
// import { useGetInterviewRequestByMasteryIdQuery } from '../../../redux/services/interviewRequestApiSlice.js';
import Participant from './Participant';
import { styles } from './InterviewRequest.styles.js';
import { respondent } from './mockData.js';

const InterviewRequest = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;
  const { data: userAllSpecializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const [mastery, setMastery] = useState('');
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  // const { data: roles } = useGetInterviewRequestByMasteryIdQuery(mastery.id);
  // console.log(roles, 'roles');

  const candidate = respondent.find((item) => item.role === 'CANDIDATE');
  const interviewer = respondent.find((item) => item.role === 'INTERVIEWER');

  const handleChange = ({ target: { value } }) => {
    setMastery(value);
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
              value={mastery}
              variant='outlined'
              onChange={handleChange}
              onClose={handleClose}
              onOpen={handleOpen}
            >
              {userAllSpecializations?.map((item) => (
                <MenuItem key={item.id} sx={styles.selectItem} value={item}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>{mastery && <Participant data={candidate} />}</Box>
      <Box>{mastery && <Participant data={interviewer} />}</Box>
    </Box>
  );
};

export default InterviewRequest;
