/* eslint-disable */
import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './ModalSearch.styles'
import { Link } from 'react-router-dom';

const ModalSearch = ({ users }) => {
  return (
    <Box sx={styles.box}>
      <ul>
        {users.map((v) => (
          <li key={v.id}>
            <Link key={v.id} to={`/profile/${v.id}`}>
              <h2>{v.firstName} {v.lastName}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  )
}

ModalSearch.propTypes = {
  users: PropTypes.arrayOf((
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })
  )),
}

export default ModalSearch;