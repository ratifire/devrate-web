import PropTypes from 'prop-types';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { t } from 'i18next';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetUserContactsQuery } from '@redux/api/slices/user/contacts/contactsApiSlice.js';
import { lightIcons, darkIcons, getIconsByType } from '@utils/constants/ProfileContacts/';
import { constructUrlByType } from '@utils/helpers/urlHelpers.js';
import { styles } from '@components/PageComponents/ProfileComponents/PersonalProfile/RightSection/RightSection.styles.js';
import CustomTooltip from '@components/UI/CustomTooltip/index.js';
import { useSnackbar } from 'notistack';

const icons = { dark: darkIcons, light: lightIcons };

const SocialsLinkList = ({ gap = 2, componentStyles, socials, id }) => {
  const { mode } = useSelector((state) => state.theme);
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { data: userContacts } = useGetUserContactsQuery(userId);
  const { enqueueSnackbar } = useSnackbar();

  const arr = id ? socials : userContacts;
  const handleCopy = async (dataToCopy) => {
    try {
      await navigator.clipboard.writeText(dataToCopy);
      enqueueSnackbar(t('clipboardMessage.success'), { variant: 'success' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('clipboardMessage.error'), { variant: 'error' });
    }
  };

  return (
    <Box gap={gap} sx={styles.wrapperLink}>
      {arr && arr.length ? (
        arr.map(({ type, value, id }) => {
          const IconComponent = getIconsByType(type, icons[mode]);
          const href = constructUrlByType(type, value);
          const linkProps =
            type !== 'EMAIL' && type !== 'PHONE_NUMBER' ? { target: '_blank', rel: 'noopener noreferrer' } : {};
          if (type === 'EMAIL') {
            return (
              <IconButton
                key={id}
                disableRipple
                sx={[componentStyles.link, { padding: 0 }]}
                onClick={() => handleCopy(value)}
              >
                <CustomTooltip title={t(`profile.right.tooltips.${type}`)}>
                  <IconComponent />
                </CustomTooltip>
              </IconButton>
            );
          }

          return (
            <Link key={id} href={href} sx={componentStyles.link} {...linkProps}>
              <CustomTooltip title={t(`profile.right.tooltips.${type}`)}>
                <IconComponent />
              </CustomTooltip>
            </Link>
          );
        })
      ) : (
        <Typography variant='body1'>{t('profile.right.empty.emptyContacts')}</Typography>
      )}
    </Box>
  );
};

SocialsLinkList.propTypes = {
  gap: PropTypes.number,
  componentStyles: PropTypes.object.isRequired,
  socials: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default SocialsLinkList;
