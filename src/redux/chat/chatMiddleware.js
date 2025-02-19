import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { addMessage } from './chatSlice.js';

let client = null;

const chatMiddleware = (store) => (next) => (action) => {
  if (action.type === 'chat/connectToChat') {
    const { userId } = action.payload;

    const socket = new SockJS('https://server.skillzzy.com/chat');
    client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        client.subscribe(`/topic/messages/${userId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          store.dispatch(addMessage(newMessage));
        });
      },
      onDisconnect: () => {
        console.info('client disconnected');
      },
    });

    client.activate();
  }

  if (action.type === 'chat/sendMessage') {
    const message = action.payload;
    if (client && client.connected) {
      client.publish({
        destination: 'app/chat',
        body: JSON.stringify(message),
      });
    } else {
      console.info('client is not connected');
    }
  }

  if (action.type === 'chat/disconnectFromChat') {
    if (client && client.connected) client.deactivate();
  }
  return next(action);
};

export default chatMiddleware;
