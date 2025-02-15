import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice.js';
import { styles } from './ChatMessage.styles';

const ChatMessage = ({ data }) => {
  const { senderId, receiverId, payload, status, dateTime, readMessageId } = data;

  const time = DateTime.fromISO(dateTime);
  const formattedTime = time.toFormat('HH:mm');

  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;

  const variant = receiverId === id ? 'receiver' : 'sender';

  // const icons = {
  //   message: true ? <DoneAllIcon /> : <DoneIcon />,
  //   sender: null,
  // };
  return (
    <Box sx={[styles.wrapper, styles[variant]]}>
      <Typography dangerouslySetInnerHTML={{ __html: payload }} variant='body' />
      <Box sx={styles.footer}>
        <Typography variant='caption1'>{formattedTime}</Typography>
        {/*{icons[variant]}*/}
      </Box>
    </Box>
  );
};

ChatMessage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatMessage;
