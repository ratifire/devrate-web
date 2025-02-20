import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSpecializationByUserIdQuery } from '../../../redux/specialization/specializationApiSlice.js';
import { selectCurrentUser } from '../../../redux/auth/authSlice.js';
import { useGetInterviewRequestByMasteryIdQuery } from '../../../redux/services/interviewRequestApiSlice.js';
import Participant from './Participant';
import { styles } from './InterviewRequest.styles.js';

const InterviewRequest = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;
  const [mastery, setMastery] = useState('');
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });

  const { data: userData } = useGetInterviewRequestByMasteryIdQuery(mastery?.mainMasteryId, {
    skip: !mastery.mainMasteryId,
  });

  const getUserByRole = (userData, role) => userData?.filter((item) => item.role === role).at(0) || null;

  const candidate = getUserByRole(userData, 'CANDIDATE');
  const interviewer = getUserByRole(userData, 'INTERVIEWER');

  useEffect(() => {
    if (specializations && specializations.length > 0) {
      const mainSpecialization = specializations.find((item) => item.main);
      if (mainSpecialization) {
        setMastery(mainSpecialization);
      }
    }
  }, [specializations]);

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
              {specializations?.map((item) => (
                <MenuItem key={item.id} sx={styles.selectItem} value={item}>
                  {item.name}{' '}
                  {item.main && (
                    <Typography component='span' sx={{ color: 'gold' }}>
                      ★
                    </Typography>
                  )}{' '}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>{candidate && <Participant data={candidate} specialization={mastery} userId={userData} />}</Box>
      <Box>{interviewer && <Participant data={interviewer} specialization={mastery} userId={userData} />}</Box>
    </Box>
  );
};

export default InterviewRequest;
