import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import UserAvatar from '../../../../UI/UserAvatar';
import { closeList, openChat } from '../../../../../redux/chat/chatSlice.js';
import { styles } from './ChatUser.styles';

const ChatUser = ({ data }) => {
  const dispatch = useDispatch();

  if (data.length === 0) return null;

  const { opponentUserId, opponentFirstName, opponentLastName, opponentPicture, lastMessage, lastMessageDate } = data;

  const formattedDate = DateTime.fromISO(lastMessageDate).toFormat('d MMM', { locale: 'uk' });

  const handlerOpenChat = () => {
    dispatch(closeList());
    dispatch(
      openChat({
        id: opponentUserId,
        firstName: opponentFirstName,
        lastName: opponentLastName,
        userPicture: opponentPicture,
      })
    );
  };

  return (
    <Box sx={styles.bg}>
      <Box sx={styles.wrapper} onClick={handlerOpenChat}>
        <UserAvatar
          radius='circle'
          size='s'
          src={opponentPicture}
          userFirstName={opponentFirstName}
          userLastName={opponentLastName}
        />
        <Box sx={styles.text}>
          <Box sx={styles.info}>
            <Typography variant='subtitle2'>{`${opponentFirstName} ${opponentLastName}`}</Typography>
            <Typography variant='caption3'>{formattedDate}</Typography>
          </Box>
          <Typography variant='caption3'>{lastMessage}</Typography>
        </Box>
        {/*<Typography sx={styles.badge} variant='caption3'>*/}
        {/*  22*/}
        {/*</Typography>*/}
      </Box>
    </Box>
  );
};

ChatUser.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatUser;
