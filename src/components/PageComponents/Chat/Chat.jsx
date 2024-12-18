import { Badge, Box, IconButton, Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { openChat } from '../../../redux/chat/chatSlice';
import { styles } from './Chat.styles';
import ChatForm from './ChatForm';

const Chat = () => {
  const { chat } = useSelector((state) => state.chat);

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openChat({ chatElement: 'chat' }));
  };

  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={handleOpen}>
        <Badge invisible color='error' overlap='circular' sx={styles.badge} variant='dot'>
          <Message />
        </Badge>
      </IconButton>
      {/*<Popover*/}
      {/*  anchorEl={bellButton}*/}
      {/*  anchorOrigin={{*/}
      {/*    vertical: 'bottom',*/}
      {/*    horizontal: 'right',*/}
      {/*  }}*/}
      {/*  open={open}*/}
      {/*  transformOrigin={{*/}
      {/*    vertical: 'top',*/}
      {/*    horizontal: 'right',*/}
      {/*  }}*/}
      {/*  onClose={chatClose}*/}
      {/*>*/}
      {/*  {elem}*/}
      {/*</Popover>*/}
      <Fade in={chat}>
        <Box sx={styles.position}>
          <ChatForm />
        </Box>
      </Fade>
    </>
  );
};

export default Chat;
