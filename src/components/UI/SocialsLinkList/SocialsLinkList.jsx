import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import darkIcons from '../../../utils/constants/RightSection/darkThemeIcons';
import whiteIcons from '../../../utils/constants/RightSection/whiteThemeIcons';
import { ensureProtocol } from '../../../utils/helpers/ensureProtocol';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';
import { SOCIAL_TYPES } from './SocialTypes';

const SocialsLinkList = ({ socials, componentStyles }) => {
  const { mode } = useSelector((state) => state.theme);
  const icons = mode === DARK_THEME ? darkIcons : whiteIcons;

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
          // eslint-disable-next-line react/no-array-index-key
          <Link key={`${social.id}-${index}`} href={href} sx={componentStyles.link} target='_blank'>
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
    })
  ),
  componentStyles: PropTypes.object.isRequired,
};

export default SocialsLinkList;
