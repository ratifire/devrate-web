import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { t } from 'i18next';
import { lightIcons, darkIcons, getIconsByType } from '../../../utils/constants/ProfileContacts/';
import { useGetUserContactsQuery } from '../../../redux/user/contacts/contactsApiSlice.js';
import { selectCurrentUser } from '../../../redux/auth/authSlice.js';
import { styles } from '../../PageComponents/ProfileComponents/PersonalProfile/RightSection/RightSection.styles.js';
import { constructUrlByType } from '../../../utils/helpers/urlHelpers.js';
const icons = { dark: darkIcons, light: lightIcons };

const SocialsLinkList = ({ gap = 2, componentStyles, socials, id }) => {
  const { mode } = useSelector((state) => state.theme);
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { data: userContacts } = useGetUserContactsQuery(userId);

  const arr = id ? socials : userContacts;

  return (
    <Box gap={gap} sx={styles.wrapperLink}>
      {arr && arr.length ? (
        arr.map(({ type, value, id }) => {
          const IconComponent = getIconsByType(type, icons[mode]);
          const href = constructUrlByType(type, value);

          return (
            <Link key={id} href={href} sx={componentStyles.link} target='_blank'>
              <IconComponent />
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
