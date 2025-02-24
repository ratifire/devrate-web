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

const useQueryParams = () => new URLSearchParams(window.location.search);

const InterviewRequest = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const userId = info?.id;
  const [mastery, setMastery] = useState('');
  const [, setOpen] = useState(false);
  const { t } = useTranslation();
  const query = useQueryParams();
  const masteryFromUrl = query.get('mastery');

  const { data: specializations, isLoading, isError } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });

  useEffect(() => {
    if (isLoading || isError || !specializations?.length) {
      setMastery('');
      return;
    }

    const foundMastery = specializations.find(({ id }) => String(id) === masteryFromUrl);
    const defaultMastery =
      foundMastery?.id || specializations.find(({ main }) => main)?.id || specializations[0]?.id || '';
    setMastery(defaultMastery);
    addQueryParamToUrl(defaultMastery);
  }, [specializations, masteryFromUrl, isLoading, isError]);

  const { data: userData } = useGetInterviewRequestByMasteryIdQuery(
    specializations?.find((item) => item.id === mastery)?.mainMasteryId || '',
    { skip: !mastery }
  );

  const addQueryParamToUrl = (mastery) => {
    const params = new URLSearchParams(window.location.search);
    mastery ? params.set('mastery', mastery) : params.delete('mastery');
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  const handleChange = (event) => {
    const newMastery = event.target.value;
    setMastery(newMastery);
    addQueryParamToUrl(newMastery);
  };

  const specializationObject = specializations?.find((item) => item.id === mastery) || null;

  const getUserByRole = (role) => {
    return userData?.find(({ role: userRole }) => userRole === role) || null;
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant='h4'>Requests</Typography>
        {isLoading ? (
          <Typography sx={styles.loading}>Loading specializations...</Typography>
        ) : isError || !specializations?.length ? (
          <Typography sx={styles.noSpecializations}>No specializations available</Typography>
        ) : (
          <FormControl>
            <InputLabel sx={styles.label}>{t('Specializations')}</InputLabel>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              MenuProps={{ PaperProps: { sx: styles.selectPaper } }}
              sx={styles.select}
              value={mastery}
              onChange={handleChange}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
            >
              {specializations.map(({ id, name, main }) => (
                <MenuItem key={id} sx={styles.selectItem} value={id}>
                  {name}{' '}
                  {main && (
                    <Typography component='span' sx={{ color: 'gold' }}>
                      ★
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>

      <Box>
        {getUserByRole('CANDIDATE') && (
          <Participant
            data={getUserByRole('CANDIDATE')}
            specialization={specializationObject}
            userId={getUserByRole('CANDIDATE')?.id}
          />
        )}
        {getUserByRole('INTERVIEWER') && (
          <Participant
            data={getUserByRole('INTERVIEWER')}
            specialization={specializationObject}
            userId={getUserByRole('INTERVIEWER')?.id}
          />
        )}
      </Box>
    </Box>
  );
};

export default InterviewRequest;
