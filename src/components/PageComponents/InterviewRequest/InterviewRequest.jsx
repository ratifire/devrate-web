import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetInterviewRequestByMasteryIdQuery } from '@redux/api/slices/interviewRequestApiSlice.js';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import EmptyInterviewTab from '@pages/InterviewPages/EmptyInterviewTab/index.js';
import Participant from './Participant';
import { styles } from './InterviewRequest.styles.js';

const useQueryParams = () => new URLSearchParams(window.location.search);

const InterviewRequest = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const userId = info?.id;
  const [mastery, setMastery] = useState('');
  const { t } = useTranslation();
  const query = useQueryParams();
  const masteryFromUrl = query.get('mastery');

  const { data: specializations, isLoading, isError } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });
  const { data: userData, isLoading: isUserDataLoading } = useGetInterviewRequestByMasteryIdQuery(
    { masteryId: specializations?.find((item) => item.id === mastery)?.mainMasteryId || '' },
    { skip: !mastery }
  );

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
  }, []);

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
    <Box>
      <Box sx={styles.header}>
        <Typography variant='h4'>{t('interviewRequest.title')}</Typography>
        {isLoading ? (
          <Typography>{t('interviewRequest.loading')}</Typography>
        ) : isError || !specializations?.length ? (
          <Typography>{t('interviewRequest.noSpecializationsAvailable')}</Typography>
        ) : (
          <FormControl>
            <InputLabel shrink sx={styles.label}>
              {t('interviewRequest.selectSpecializations')}
            </InputLabel>
            <Select
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: styles.dropdownPaper,
                  },
                  sx: styles.selectField,
                },
              }}
              label={t('interviewRequest.selectSpecializations')}
              sx={styles.select}
              value={mastery}
              variant='outlined'
              onChange={handleChange}
            >
              {specializations.map(({ id, name, main }) => (
                <MenuItem key={id} sx={styles.selectItem} value={id}>
                  {name}{' '}
                  {main && (
                    <Typography component='span' sx={{ color: '#B78AF7' }}>
                      ★
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
      {(!userData || !userData?.length) && !isUserDataLoading ? (
        <EmptyInterviewTab isSpecializations svg={emptyInterviewTabsPictures.emptyReqestPic} tab='Request' />
      ) : (
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
      )}
    </Box>
  );
};

export default InterviewRequest;
