import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SocialsLinkList = ({ socials, componentStyles }) => {
  return (
    <>
      {socials.map((social, index) => (
        <Link key={index} to={social.url} component={RouterLink} sx={componentStyles.link} target={social.target}>
          <social.icon />
        </Link>
      ))}
    </>
  );
};

SocialsLinkList.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object),
  componentStyles: PropTypes.object,
};

export default SocialsLinkList;
