import { Box } from '@mui/material';
import styles from './Notification.styles';
import NotificationItem from './NotificationItem';

const notificationList = ({ data, isLoading }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.scrollWrapper}>
        {!isLoading && data?.map((item) => <NotificationItem key={item.id} data={item} />)}
      </Box>
    </Box>
  );
};

export default notificationList;
