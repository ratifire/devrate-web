import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './EmptyExperienceTab.style';
import PropTypes from 'prop-types';
import { ButtonDef } from '../../../../FormsComponents/Buttons';

const WorkExperienceEmptyItem = ({ tab, profileType, imgUrl }) => {
  const { t } = useTranslation();


  return (
    <Box sx={{...styles.emptyContainer, backgroundImage: `url(${imgUrl})`}}>
      <Typography variant="h6" sx={styles.title}>
        {t(`profile.experience.${tab}.emptyTabName.title`)}
      </Typography>

          {profileType === 'personal' && (
            <>
              <Typography variant="body" sx={styles.description}>
                {t(`profile.experience.${tab}.emptyTabName.subTitle`)}
              </Typography>

              <ButtonDef
                type='button'
                variant='contained'
                label={`profile.experience.${tab}.emptyTabName.button`}
                correctStyle={styles.button}
              />
            </>

          )}

    </Box>
  );
};

WorkExperienceEmptyItem.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default WorkExperienceEmptyItem;
