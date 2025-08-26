import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetUserContactsQuery } from '@redux/api/slices/user/contacts/contactsApiSlice.js';
import { styles } from '@components/PageComponents/ProfileComponents/PersonalProfile/RightSection/RightSection.styles.js';
import { useTranslation } from 'react-i18next';
import SocialLink from '../SocialLink/index.js';

const SocialsLinkList = ({ gap = 2, componentStyles, socials, id }) => {
  const { t } = useTranslation();
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { data: userContacts } = useGetUserContactsQuery(userId);
  const arr = id ? socials : userContacts;

  return (
    <Box gap={gap} sx={styles.wrapperLink}>
      {arr && arr.length > 0 ? (
        arr.map(({ type, value, id }) => (
          <SocialLink key={id} componentStyles={componentStyles} type={type} value={value} />
        ))
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
