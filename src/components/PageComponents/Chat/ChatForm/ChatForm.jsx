// import { useEffect, useRef, useState } from 'react';
window.global = window;

import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Client } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import UserAvatar from '../../../UI/UserAvatar';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import Send from '../../../../assets/icons/send.svg?react';
import { array } from '../../../../utils/constants/testMessages';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { styles } from './ChatFrom.styles';
import ChatMessage from './ChatMessage';

// import { Client } from '@stomp/stompjs';

const ChatForm = () => {
  const chatWrapperRef = useRef(null);
  const textFieldRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);
  const [textFieldHeight, setTextFieldHeight] = useState(23); // Default minHeight
  const [message, setMessage] = useState(''); // Для збереження тексту
  const [isConnected, setIsConnected] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeChat({ chatElement: 'chat' }));
  };
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

  useEffect(() => {
    if (isUserAtBottom && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [array, isUserAtBottom]);

  const handleScroll = () => {
    if (chatWrapperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;

      const isAtBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
      setShowScrollButton(!isAtBottom);
      setIsUserAtBottom(isAtBottom);
    }
  };

  const handleScrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
      setIsUserAtBottom(true);
    }
  };

  const handleTextFieldChange = (e) => {
    setMessage(e.target.value);
    const height = e.target.scrollHeight;
    const maxHeight = 115;
    setTextFieldHeight(height < maxHeight ? height : maxHeight);
  };

  useEffect(() => {
    if (textFieldRef.current && chatWrapperRef.current) {
      const textFieldExtraHeight = textFieldHeight - 23;
      const newHeight = 532 - textFieldExtraHeight;
      chatWrapperRef.current.style.maxHeight = `${newHeight}px`;
    }
  }, [textFieldHeight]);

  // початок тестування чату
  const [client, setClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('https://localhost:8080/chat');
    // const socket = new WebSocket('ws://localhost:8080/chat');
    const newClient = new Client({
      webSocketFactory: () => socket, // Використовуйте SockJS
      // reconnectDelay: 5000, // Повторне підключення кожні 5 секунд у разі помилки
      onConnect: () => {
        // console.log('Connected to WebSocket');
        setIsConnected(true);
        newClient.subscribe('/topic/messages/8882', (message) => {
          // console.log('Received message:', JSON.parse(message.body));
          JSON.parse(message.body);
        });
      },
    });

    setClient(newClient);
    newClient.activate();

    return () => {
      if (newClient.connected) {
        newClient.deactivate();
      }
    };
  }, []);

  // console.log(client);
  // useEffect(() => {
  // Ensure client.activate() only if client is properly initialized
  // if (client.current && !isConnected) {
  //   client.activate();
  // }

  // return () => {
  //   if (client.current && client.current.connected) {
  //     client.current.deactivate();
  //   }
  // };
  // }, [isConnected]);

  const handleSubmitMessages = (e) => {
    e.preventDefault();
    if (!isConnected || !message.trim()) {
      // console.warn('STOMP client is not connected or message is empty');
      return;
    }

    client.publish({
      destination: '/app/chat', // Кінцева точка на сервері
      body: JSON.stringify({
        sender: id, // ID поточного користувача
        content: message.trim(),
        recipient: 'recipient-id', // ID отримувача
        topicName: '8882', // Тема
      }),
    });

    setMessage(''); // Очищення текстового поля після відправки
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <UserAvatar
          radius='circle'
          size='m'
          src={userPicture}
          userFirstName={firstName}
          userLastName={lastName}
          userName={`${firstName} ${lastName}`}
        />
        <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
        <IconButton aria-label='Close Сhat' sx={styles.btnIcon} type='button' onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box ref={chatWrapperRef} sx={styles.chatWrapper} onScroll={handleScroll}>
        {array?.map((item) => (
          <ChatMessage key={item.id} read={item.read} text={item.text} time={item.time} variant={item.type} />
        ))}
        {showScrollButton && (
          <IconButton aria-label='Scroll to bottom' sx={styles.btnIconScroll} onClick={handleScrollToBottom}>
            <KeyboardArrowDownIcon />
          </IconButton>
        )}
      </Box>
      <form onSubmit={handleSubmitMessages}>
        <Box sx={styles.chatForm}>
          <TextField
            ref={textFieldRef}
            fullWidth
            multiline
            maxRows={5}
            minRows={1}
            placeholder='Напишіть повідомлення'
            sx={styles.textArea}
            value={message}
            variant='outlined'
            onChange={handleTextFieldChange}
          />
          <IconButton sx={styles.btnSend} type='submit'>
            <Send />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default ChatForm;
//
// import { useEffect, useRef, useState } from 'react';
// import { Box, IconButton, TextField, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import CloseIcon from '@mui/icons-material/Close';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { Client } from '@stomp/stompjs';
// import UserAvatar from '../../../UI/UserAvatar';
// import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
// import { selectCurrentUser } from '../../../../redux/auth/authSlice';
// import Send from '../../../../assets/icons/send.svg?react';
// import { array } from '../../../../utils/constants/testMessages';
// import { closeChat } from '../../../../redux/chat/chatSlice';
// import { styles } from './ChatFrom.styles';
// import ChatMessage from './ChatMessage';
//
// const ChatForm = () => {
//   const chatWrapperRef = useRef(null);
//   const textFieldRef = useRef(null);
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const [isUserAtBottom, setIsUserAtBottom] = useState(true);
//   const [textFieldHeight, setTextFieldHeight] = useState(23); // Default minHeight
//   const [message, setMessage] = useState(''); // Для збереження тексту
//   const [isConnected, setIsConnected] = useState(false);
//   const dispatch = useDispatch();
//   const handleClose = () => {
//     dispatch(closeChat({ chatElement: 'chat' }));
//   };
//   const { data: info } = useSelector(selectCurrentUser);
//   const { id, firstName, lastName } = info;
//   const { data } = useGetAvatarUserQuery(id);
//   const userAvatar = data || {};
//   const { userPicture } = userAvatar;
//
//   useEffect(() => {
//     if (isUserAtBottom && chatWrapperRef.current) {
//       chatWrapperRef.current.scrollTo({
//         top: chatWrapperRef.current.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }, [array, isUserAtBottom]);
//
//   const handleScroll = () => {
//     if (chatWrapperRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;
//
//       const isAtBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
//       setShowScrollButton(!isAtBottom);
//       setIsUserAtBottom(isAtBottom);
//     }
//   };
//
//   const handleScrollToBottom = () => {
//     if (chatWrapperRef.current) {
//       chatWrapperRef.current.scrollTo({
//         top: chatWrapperRef.current.scrollHeight,
//         behavior: 'smooth',
//       });
//       setIsUserAtBottom(true);
//     }
//   };
//
//   const handleTextFieldChange = (e) => {
//     setMessage(e.target.value);
//     const height = e.target.scrollHeight;
//     const maxHeight = 115;
//     setTextFieldHeight(height < maxHeight ? height : maxHeight);
//   };
//
//   useEffect(() => {
//     if (textFieldRef.current && chatWrapperRef.current) {
//       const textFieldExtraHeight = textFieldHeight - 23;
//       const newHeight = 532 - textFieldExtraHeight;
//       chatWrapperRef.current.style.maxHeight = `${newHeight}px`;
//     }
//   }, [textFieldHeight]);
//
//   // початок тестування чату
//   const [client, setClient] = useState(null);
//
//   useEffect(() => {
//     const newClient = new Client({
//       brokerURL: 'ws://localhost:8080/chat',
//       debug: (str) => {
//         console.log(str);
//       },
//       onConnect: () => {
//         console.log('Connected from WebSocket');
//         setIsConnected(true);
//         newClient.subscribe('topic/8882/messages', (message) => {
//           console.log(JSON.parse(message.body));
//         });
//       },
//     });
//     setClient(newClient);
//     newClient.activate();
//   }, []);
//   // console.log(client);
//   // useEffect(() => {
//   // Ensure client.activate() only if client is properly initialized
//   // if (client.current && !isConnected) {
//   //   client.activate();
//   // }
//
//   // return () => {
//   //   if (client.current && client.current.connected) {
//   //     client.current.deactivate();
//   //   }
//   // };
//   // }, [isConnected]);
//
//   const handleSubmitMessages = (e) => {
//     e.preventDefault();
//     // console.log(!isConnected, isConnected);
//     // console.log(!client.current, client.current);
//     if (!isConnected) {
//       // console.error('STOMP client is not connected.');
//       return;
//     }
//     if (!message.trim()) return; // Don't send empty messages
//
//     // const sender = id; // Current user ID
//     // const recipient = 'bob'; // Recipient ID or topic name
//     // const topicName = '8882'; // Topic name
//     console.log(id);
//     client.publish({
//       destination: '/app/chat', // Кінцева точка на сервері
//       body: JSON.stringify({
//         sender: id, // ID поточного користувача
//         content: message.trim(),
//         recipient: '8882', // ID отримувача
//         topicName: '8882', // Тема
//       }),
//     });
//     setMessage('');
//   };
//
//   return (
//     <Box sx={styles.container}>
//       <Box sx={styles.wrapper}>
//         <UserAvatar
//           radius='circle'
//           size='m'
//           src={userPicture}
//           userFirstName={firstName}
//           userLastName={lastName}
//           userName={`${firstName} ${lastName}`}
//         />
//         <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
//         <IconButton aria-label='Close Сhat' sx={styles.btnIcon} type='button' onClick={handleClose}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <Box ref={chatWrapperRef} sx={styles.chatWrapper} onScroll={handleScroll}>
//         {array?.map((item) => (
//           <ChatMessage key={item.id} read={item.read} text={item.text} time={item.time} variant={item.type} />
//         ))}
//         {showScrollButton && (
//           <IconButton aria-label='Scroll to bottom' sx={styles.btnIconScroll} onClick={handleScrollToBottom}>
//             <KeyboardArrowDownIcon />
//           </IconButton>
//         )}
//       </Box>
//       <form onSubmit={handleSubmitMessages}>
//         <Box sx={styles.chatForm}>
//           <TextField
//             ref={textFieldRef}
//             fullWidth
//             multiline
//             maxRows={5}
//             minRows={1}
//             placeholder='Напишіть повідомлення'
//             sx={styles.textArea}
//             variant='outlined'
//             onChange={handleTextFieldChange}
//           />
//           <IconButton sx={styles.btnSend} type='submit'>
//             <Send />
//           </IconButton>
//         </Box>
//       </form>
//     </Box>
//   );
// };
//
// export default ChatForm;

// import { useState } from 'react';
// import { Box, IconButton, TextField, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import CloseIcon from '@mui/icons-material/Close';
// import { useSubscription, useStompClient } from 'react-stomp-hooks'; // Використовуємо useStompClient замість usePublish
// import Send from '../../../../assets/icons/send.svg?react';
// import UserAvatar from '../../../UI/UserAvatar';
// import { selectCurrentUser } from '../../../../redux/auth/authSlice';
// import { closeChat } from '../../../../redux/chat/chatSlice';
// import { styles } from './ChatFrom.styles.js';
// // import ChatMessage from './ChatMessage';
//
// const ChatForm = () => {
//   const [message, setMessage] = useState('');
//   const dispatch = useDispatch();
//
//   const { data: info } = useSelector(selectCurrentUser);
//   const { id, firstName, lastName } = info;
//
//   // Використовуємо useStompClient для публікації повідомлень
//   const stompClient = useStompClient();
//
//   const handleClose = () => {
//     dispatch(closeChat({ chatElement: 'chat' }));
//   };
//
//   // Обробник надсилання повідомлення
//   const handleSubmitMessages = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;
//
//     if (stompClient) {
//       stompClient.publish({
//         destination: '/app/chat',
//         body: JSON.stringify({
//           sender: id,
//           content: message.trim(),
//           recipient: '8882',
//           topicName: '8882',
//         }),
//       });
//     }
//
//     setMessage('');
//   };
//
//   // Підписка на повідомлення
//   useSubscription(`/topic/messages/8882`, (msg) => {
//     const newMessage = JSON.parse(msg.body);
//     console.log('Received message:', newMessage);
//     // Оновіть ваш стан або додайте нове повідомлення до списку
//   });
//
//   return (
//     <Box sx={styles.container}>
//       <Box sx={styles.wrapper}>
//         <UserAvatar
//           radius='circle'
//           size='m'
//           userFirstName={firstName}
//           userLastName={lastName}
//           userName={`${firstName} ${lastName}`}
//         />
//         <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
//         <IconButton aria-label='Close Chat' sx={styles.btnIcon} onClick={handleClose}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <form onSubmit={handleSubmitMessages}>
//         <Box sx={styles.chatForm}>
//           <TextField
//             fullWidth
//             multiline
//             placeholder='Напишіть повідомлення'
//             sx={styles.textArea}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <IconButton sx={styles.btnSend} type='submit'>
//             <Send />
//           </IconButton>
//         </Box>
//       </form>
//     </Box>
//   );
// };
//
// export default ChatForm;
