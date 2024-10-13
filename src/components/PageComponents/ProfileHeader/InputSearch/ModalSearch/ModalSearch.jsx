import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DARK_THEME } from '../../../../../utils/constants/theme';
import { ErrorComponent, LoaderComponent } from '../../../../UI/Exceptions';
import UserAvatar from '../../../../UI/UserAvatar';
import { DARK_NOT_FOUND, LIGHT_NOT_FOUND } from '../constants';
import { styles } from './ModalSearch.styles';

const ModalSearch = ({ users, isError, isSpinner, onClose }) => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.theme);
  const imgUrl = mode === DARK_THEME ? DARK_NOT_FOUND : LIGHT_NOT_FOUND;
  
  if (isSpinner) {
    return (
      <Box sx={styles.box}>
        <LoaderComponent />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={styles.box}>
        <ErrorComponent />
      </Box>
    );
  }

  if (!users?.length) {
    return (
      <Box sx={styles.box}>
        <Typography variant='subtitle1' sx={styles.emptyTitle}>
          {t('header.notFound')}
        </Typography>
        <Box sx={{ ...styles.boxImg, backgroundImage: `url(${imgUrl})` }} />
      </Box>
    );
  }

  return (
    <Box sx={styles.box}>
      <List sx={styles.list}>
        {users.map(({ id, lastName, firstName, picture, mainSpecializationName }) => (
          <ListItem sx={styles.item} key={id}>
            <Box sx={styles.link} component={Link} onClick={onClose} key={id} to={`/profile/${id}`}>
              <Box>
                <Typography variant='subtitle2'>
                  {firstName} {lastName}
                </Typography>
                <Typography sx={styles.subtitle} variant='subtitle3'>
                  {mainSpecializationName}
                </Typography>
              </Box>
              <UserAvatar
                size={'sm'}
                userName={firstName}
                userFirstName={firstName}
                userLastName={lastName}
                correctStyle={styles.img}
                src={picture}
              />
            </Box>
            <Divider sx={styles.divider} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

ModalSearch.propTypes = {
  isError: PropTypes.bool.isRequired,
  isSpinner: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      picture: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

export default ModalSearch;
