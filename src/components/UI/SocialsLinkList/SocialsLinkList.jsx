import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import icons from '../../../utils/constants/userSocials';
import { SOCIAL_TYPES } from './SocialTypes';
import { ensureProtocol } from '../../../utils/helpers/ensureProtocol';

const SocialsLinkList = ({ socials, componentStyles }) => {

  return socials ? (
    <>
      {socials.map((social, index) => {
        const IconComponent = icons[social.type] || icons['DEFAULT'];
        let href;
        if (social.type === SOCIAL_TYPES.EMAIL) {
          href = `mailto:${social.value}`;
        } else if (social.type === SOCIAL_TYPES.PHONE_NUMBER) {
          href = `tel:${social.value}`;
        } else {
          href = ensureProtocol(social.value);
        }
        return (
          <Link key={`${social.id}-${index}`} href={href} sx={componentStyles.link} target="_blank">
            <IconComponent />
          </Link>
        );
      })}
    </>
  ) : null;
};

SocialsLinkList.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  componentStyles: PropTypes.object.isRequired,
};

export default SocialsLinkList;
