import { darkIcons, getIconsByType, lightIcons } from '@utils/constants/ProfileContacts/index.js';
import { constructUrlByType } from '@utils/helpers/urlHelpers.js';
import { IconButton, Link } from '@mui/material';
import CustomTooltip from '@components/UI/CustomTooltip/index.js';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useCopyToClipboard from '@utils/hooks/useCopyToClipboard.js';
import PropTypes from 'prop-types';

const icons = { dark: darkIcons, light: lightIcons };

const SocialLink = ({ type, value, componentStyles }) => {
  const { mode } = useSelector((state) => state.theme);
  const { t } = useTranslation();
  const copyToClipboard = useCopyToClipboard();
  const IconComponent = getIconsByType(type, icons[mode]);
  const href = constructUrlByType(type, value);
  const linkProps = type !== 'EMAIL' && type !== 'PHONE_NUMBER' ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (type === 'EMAIL') {
    return (
      <IconButton disableRipple sx={[componentStyles.link, { padding: 0 }]} onClick={() => copyToClipboard(value)}>
        <CustomTooltip title={t(`profile.right.tooltips.${type}`)}>
          <IconComponent />
        </CustomTooltip>
      </IconButton>
    );
  }

  return (
    <Link href={href} sx={componentStyles.link} {...linkProps}>
      <CustomTooltip title={t(`profile.right.tooltips.${type}`)}>
        <IconComponent />
      </CustomTooltip>
    </Link>
  );
};

SocialLink.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  componentStyles: PropTypes.object.isRequired,
};

export default SocialLink;
