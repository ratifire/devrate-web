import { Box } from '@mui/material';
import mockRequest from '../mockData.js';
import styles from './RequestHeader.styles.js';

const RequestHeader = () => {
  return (
    <Box sx={styles.container}>
      <RequestHeader description={mockRequest.description} role={mockRequest.role} title={mockRequest.title} />
    </Box>
  );
};

export default RequestHeader;
