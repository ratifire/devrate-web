import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice.js';
import { formattedTime } from '../../../../../utils/helpers/dateHandlers.js';
import { styles } from './ChatMessage.styles';

const sender = 'sender';
const receiver = 'receiver';

const ChatMessage = ({ data }) => {
  const { receiverId, payload, dateTime } = data;
  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;
  const variant = receiverId === id ? receiver : sender;

  const time = formattedTime(dateTime);
  return (
    <Box sx={[styles.wrapper, styles[variant]]}>
      <Typography dangerouslySetInnerHTML={{ __html: payload }} variant='body' />
      <Box sx={styles.footer}>
        <Typography variant='caption1'>{time}</Typography>
      </Box>
    </Box>
  );
};

ChatMessage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatMessage;
