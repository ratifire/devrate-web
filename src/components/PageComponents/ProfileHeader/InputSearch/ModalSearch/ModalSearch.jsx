/* eslint-disable */
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ErrorComponent, LoaderComponent } from '../../../../UI/Exceptions';
import { styles } from './ModalSearch.styles';
import UserAvatar from '../../../../UI/UserAvatar';
import { useSelector } from 'react-redux';
import { DARK_THEME } from '../../../../../utils/constants/theme';
import { DARK_NOT_FOUND, LIGHT_NOT_FOUND } from '../constants';

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

  if (!users.length) {
    return (
      <Box sx={styles.box}>
        <Typography variant='subtitle1' sx={styles.emptyTitle}>{t('header.notFound')}</Typography>
        <Box sx={{ ...styles.boxImg, backgroundImage: `url(${imgUrl})` }}/>
      </Box>
    );
  }

  return (
    <Box sx={styles.box}>
      <List sx={styles.list}>
        {users.map((v) => (
          <ListItem sx={styles.item} key={v.id}>
            <Box>
              <Link onClick={onClose} key={v.id} to={`/profile/${v.id}`}>
                <Box>
                  <Typography variant='subtitle2'>
                    {v.firstName} {v.lastName}
                  </Typography>
                  <Typography sx={styles.subtitle} variant='subtitle3'>
                    {v.status}
                  </Typography>
                </Box>
                <UserAvatar
                  size={'sm'}
                  userName={v.firstName}
                  userFirstName={v.firstName}
                  userLastName={v.lastName}
                  correctStyle={styles.img}
                  src={v.picture}
                />
              </Link>
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
