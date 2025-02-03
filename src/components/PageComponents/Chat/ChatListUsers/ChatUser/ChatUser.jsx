import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserAvatar from '../../../../UI/UserAvatar';
import { closeList, openChat } from '../../../../../redux/chat/chatSlice.js';
import { styles } from './ChatUser.styles';

const ChatUser = ({ data }) => {
  const { firstName, lastName, userPicture, time, lastMessages, userId } = data;

  const dispatch = useDispatch();
  const handlerOpenChat = () => {
    dispatch(closeList());
    dispatch(openChat({ opponentUserId: userId }));
    console.log(userId, 'id ChatUser');
  };

  return (
    <Box sx={styles.bg}>
      <Box sx={styles.wrapper} onClick={handlerOpenChat}>
        <UserAvatar radius='circle' size='s' src={userPicture} userFirstName={firstName} userLastName={lastName} />
        <Box sx={styles.text}>
          <Box sx={styles.info}>
            <Typography variant='subtitle2'>{`${firstName} ${lastName}`}</Typography>
            <Typography variant='caption3'>{time}</Typography>
          </Box>
          <Typography variant='caption3'>{lastMessages}</Typography>
        </Box>
        <Typography sx={styles.badge} variant='caption3'>
          22
        </Typography>
      </Box>
    </Box>
  );
};

ChatUser.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatUser;
