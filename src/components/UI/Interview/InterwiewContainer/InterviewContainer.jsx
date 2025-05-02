import { Box, Container, Paper } from '@mui/material';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';
import { styles } from './InterviewContainer.styles.js';

const InterviewContainer = ({ children }) => (
  <Container maxWidth='xl' sx={styles.container}>
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.box}>
        <Paper>{children}</Paper>
      </Box>
      <Outlet />
    </Box>
  </Container>
);

InterviewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InterviewContainer;
