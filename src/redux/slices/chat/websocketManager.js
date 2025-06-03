import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let client = null;

export const initializeWebSocket = (userId, onMessage) => {
  const socket = new SockJS(`${import.meta.env.VITE_API_DEV_URL}/chat`);

  client = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
    onConnect: () => {
      client.subscribe(`/topic/messages/${userId}`, (message) => {
        const parsedMessage = JSON.parse(message.body);
        onMessage(parsedMessage);
      });
    },
    onStompError: (frame) => {
      console.error('STOMP error:', frame.headers.message);
    },
  });

  client.activate();
};

export const sendMessage = (content, receiverId, senderId) => {
  if (!client?.connected) return;

  client.publish({
    destination: '/app/chat',
    body: JSON.stringify({
      senderId,
      receiverId,
      payload: content,
      dateTime: new Date().toISOString(),
    }),
  });
};

export const deactivateWebSocket = () => {
  if (client) {
    client.deactivate();
    client = null;
  }
};
