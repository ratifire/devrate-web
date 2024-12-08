import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { openModal } from '../../../../../redux/modal/modalSlice';
import { setButtonState } from '../../../../../redux/addButton/addButtonSlice';
import links from '../../../../../router/links';
import { DARK_THEME } from '../../../../../utils/constants/Theme/theme';
import { styles } from './EmptyExperienceTab.styles';

const ExperienceEmptyItem = ({ tab, profileType, imgUrl, isData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const img = mode === DARK_THEME ? imgUrl.dark : imgUrl.white;

  useEffect(() => {
    dispatch(setButtonState({ tab, hasData: false }));
  }, [isData]);

  const handleOpenModal = () => {
    dispatch(openModal({ modalName: tab }));
  };

  return (
    <Box sx={{ ...styles.emptyContainer, backgroundImage: `url(${img})` }}>
      {profileType === 'personal' ? (
        <Typography sx={styles.title} variant='h6'>
          {t(`profile.experience.${tab}.emptyTabName.title`)}
        </Typography>
      ) : profileType === 'user' ? (
        <Typography sx={styles.title} variant='h6'>
          {t(`profile.experience.${tab}.emptyTabName.userProfile.title`)}
        </Typography>
      ) : null}

      {profileType === 'personal' && (
        <>
          <Typography sx={styles.description} variant='body'>
            {t(`profile.experience.${tab}.emptyTabName.subTitle`)}
          </Typography>
          {tab !== 'skills' ? (
            <ButtonDef
              correctStyle={styles.button}
              handlerClick={handleOpenModal}
              label={`profile.experience.${tab}.emptyTabName.button`}
              type='button'
              variant='contained'
            />
          ) : (
            <Box sx={styles.linkWrapper}>
              <Link to={links.specializations}>{t(`profile.experience.${tab}.emptyTabName.button`)}</Link>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

ExperienceEmptyItem.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.object.isRequired,
  isData: PropTypes.bool,
};

export default ExperienceEmptyItem;
