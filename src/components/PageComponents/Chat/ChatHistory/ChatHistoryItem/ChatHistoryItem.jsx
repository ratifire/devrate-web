import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import UserAvatar from '../../../../UI/UserAvatar';
import { closeList, openChat } from '../../../../../redux/chat/chatSlice.js';
import { getLocaleFormattedDate } from '../../../../../utils/helpers/dateHandlers.js';
import { styles } from './ChatHistoryItem.styles.js';

const ChatHistoryItem = ({ data }) => {
  const dispatch = useDispatch();

  if (data.length === 0) return null;

  const {
    opponentUserId,
    opponentFirstName,
    opponentLastName,
    opponentPicture,
    lastMessage,
    lastMessageDate,
    isMatch,
  } = data;

  const formattedDate = getLocaleFormattedDate(lastMessageDate);

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
      <Box sx={isMatch ? styles.wrapperSearched : styles.wrapper} onClick={handlerOpenChat}>
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
            <Typography sx={styles.time} variant='caption3'>
              {formattedDate}
            </Typography>
          </Box>
          <Typography variant='caption3'>{lastMessage}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

ChatHistoryItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChatHistoryItem;
