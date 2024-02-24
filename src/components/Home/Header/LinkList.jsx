import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import styles from './Header.styles';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LinkList = ({ links }) => {
  const { t } = useTranslation();

  return (
    <>
      {links.map(({ name, path, target }) => (
        <Link key={path} to={path} target={target} component={RouterLink} sx={styles.link}>
          {t(name)}
        </Link>
      ))}
    </>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default LinkList;
