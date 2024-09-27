import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './EmptyExperienceTab.style';
import PropTypes from 'prop-types';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { openModal } from '../../../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { setButtonState } from '../../../../../redux/addButton/addButtonSlice';
import { Link } from 'react-router-dom';
import links from '../../../../../router/links';



const ExperienceEmptyItem = ({ tab, profileType, imgUrl, isData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setButtonState({tab, hasData: false}));
  }, [isData]);


  const handleOpenModal = () => {
    dispatch(openModal({ modalName: tab }));
  };

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
              {tab !== 'skills' ?
                <ButtonDef
                  type='button'
                  variant='contained'
                  label={`profile.experience.${tab}.emptyTabName.button`}
                  correctStyle={styles.button}
                  handlerClick={handleOpenModal}

                /> :

                <Link to={links.specializations}>
                  <Typography>
                    {t(`profile.experience.${tab}.emptyTabName.button`)}
                  </Typography>
                </Link>
              }

            </>

          )}

    </Box>
  );
};

ExperienceEmptyItem.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isData: PropTypes.bool,
};

export default ExperienceEmptyItem;
