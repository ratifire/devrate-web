import { Box, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';
import { styles } from './ModalSearch.styles';

const ModalSearch = ({ users, isError, isSpinner, onClose }) => {
  const { t } = useTranslation();

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
        <Typography>{t('header.notFound')}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.box}>
      <List sx={styles.list}>
        {users.map((v) => (
          <ListItem sx={styles.item} key={v.id}>
            <Link onClick={onClose} key={v.id} to={`/profile/${v.id}`}>
              <Typography>
                {v.firstName} {v.lastName}
              </Typography>
            </Link>
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
    })
  ),
};

export default ModalSearch;
