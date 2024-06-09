import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import icons from '../../../utils/constants/userSocials';

const SocialsLinkList = ({ socials, componentStyles }) => {
  const ensureProtocol = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <>
      {socials &&
        socials.map((social, index) => {
          const IconComponent = icons[social.type];
          let href;
          if (social.type === 'EMAIL') {
            href = `mailto:${social.value}`;
          } else if (social.type === 'PHONE_NUMBER') {
            href = `tel:${social.value}`;
          } else {
            href = ensureProtocol(social.value);
          }
          return (
            <Link key={`${social.id}-${index}`} href={href} sx={componentStyles.link} target='_blank'>
              {IconComponent ? <IconComponent /> : 'Invalid icon'}
            </Link>
          );
        })}
    </>
  );
};

SocialsLinkList.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  componentStyles: PropTypes.object.isRequired,
};

export default SocialsLinkList;
