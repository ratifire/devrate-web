import { Box } from '@mui/material';
import MenuV2 from '@components/PageComponents/Menu/MenuV2.jsx';
import ProfileHeader from '@components/PageComponents/ProfileHeader';
import PropTypes from 'prop-types';
import styles from './LayoutWithSidebar.styles';

const LayoutWithSidebar = ({ children }) => {
  return (
    <Box sx={styles.root}>
      <ProfileHeader />

      <Box sx={styles.contentContainer}>
        <MenuV2 />
        <Box component='main' sx={styles.mainContent}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

LayoutWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithSidebar;
