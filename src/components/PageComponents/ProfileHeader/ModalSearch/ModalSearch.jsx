/* eslint-disable */
import { Box, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './ModalSearch.styles';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';

const ModalSearch = ({ users, isError, isSpinner }) => {
  return (
    <Box sx={styles.box}>
      {isError && <ErrorComponent />}
      {isSpinner && <LoaderComponent />}
      <List sx={styles.list}>
        {users.map((v) => (
          <ListItem sx={styles.item} key={v.id}>
            <Link key={v.id} to={`/profile/${v.id}`}>
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })
  ),
};

export default ModalSearch;
