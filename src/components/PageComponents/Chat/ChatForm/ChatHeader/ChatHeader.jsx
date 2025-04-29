import { Box, IconButton, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import UserAvatar from '@components/UI/UserAvatar/index.js';
import CloseIcon from '@mui/icons-material/Close';
import { closeChat } from '@redux/slices/chat/chatSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useMoveChat } from '@components/PageComponents/Chat/hooks/index.js';
import PropTypes from 'prop-types';
import { styles } from './ChatHeader.styles.js';

const ChatHeader = ({ chatPositionRef }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeChat());
  const handleMouseDown = useMoveChat(chatPositionRef);
  const { opponentUserInfo } = useSelector((state) => state.chat);
  const { id: opponentUserId, firstName, lastName, userPicture } = opponentUserInfo;

  return (
    <Box sx={styles.wrapper}>
      <Link component={RouterLink} sx={styles.linkAvatar} to={`/profile/${opponentUserId}`}>
        <UserAvatar radius='circle' size='m' src={userPicture} userFirstName={firstName} userLastName={lastName} />
      </Link>
      <Box sx={styles.wrapperName} onMouseDown={handleMouseDown}>
        <Link component={RouterLink} sx={styles.linkName} to={`/profile/${opponentUserId}`}>
          <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
        </Link>
      </Box>
      <IconButton aria-label='Close Сhat' sx={styles.btnIcon} type='button' onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

ChatHeader.propTypes = {
  chatPositionRef: PropTypes.any,
};

export default ChatHeader;
