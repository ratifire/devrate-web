import { Badge, Box, IconButton, Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { StompSessionProvider } from 'react-stomp-hooks';
import Message from '../../../assets/icons/message.svg?react';
import { openChat } from '../../../redux/chat/chatSlice';
import { styles } from './Chat.styles';
import ChatForm from './ChatForm';
const Chat = () => {
  const { chat } = useSelector((state) => state.chat);

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openChat({ chatElement: 'chat' }));
  };
  //

  // const stompClient = new Client({
  //   // headers: { [header]: token },
  //   brokerURL: "ws://host.docker.internal:8080/chat", // Змініть на ваш реальний WebSocket URL
  //   connectHeaders: {},
  //   onConnect: () => {
  //     setConnected(true);
  //     console.log("Connected");
  //     // Підписка на повідомлення
  //     // ws://localhost:8080/chat
  //     stompClient.subscribe("user/queue/messages", (message) => {
  //       // stompClient.subscribe("topic/messages/8881", (message) => {
  //       showMessageOutput(JSON.parse(message.body));
  //     });
  //   },
  //   onStompError: (error) => {
  //     console.error("STOMP Error:", error);
  //   },
  // });
  // stompClient.activate();
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
          {/*<StompSessionProvider*/}
          {/*  debug={(str) => console.log(str)}*/}
          {/*  reconnectDelay={200} // Автопідключення після 200 мс*/}
          {/*  url='ws://localhost:8080/chat' // Ваша URL WebSocket*/}
          {/*  onConnect={() => console.log('Connected to WebSocket')}*/}
          {/*>*/}
          <ChatForm />
          {/*</StompSessionProvider>*/}
        </Box>
      </Fade>
    </>
  );
};

export default Chat;
