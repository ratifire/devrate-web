import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let client = null;
let subscriptions = {};

export const getWebSocketClient = () => client;

export const initializeWebSocket = (currentUserId, onMessageReceived) => {
  if (client) return client;

  const socket = new SockJS(`${import.meta.env.VITE_API_DEV_URL}/chat`);
  client = new Client({
    reconnectDelay: 5000,
    heartbeatIncoming: 10000,
    heartbeatOutgoing: 10000,
    webSocketFactory: () => socket,
    onConnect: () => {
      subscriptions.messages = client.subscribe(`/topic/messages/${currentUserId}`, (message) => {
        onMessageReceived(JSON.parse(message.body));
      });
    },
    onDisconnect: () => {
      client = null;
    },
    onStompError: (frame) => {
      new Error('STOMP error:', frame.headers.message);
    },
  });
  client.activate();
  return client;
};

export const deactivateWebSocket = () => {
  if (client) {
    Object.values(subscriptions).forEach((sub) => sub.unsubscribe());
    subscriptions = {};
    client.deactivate();
    client = null;
  }
};

export const sendMessage = (message, receiverId, senderId) => {
  if (!client) return;

  client.publish({
    destination: '/app/chat',
    body: JSON.stringify({
      senderId,
      receiverId,
      payload: message.trim(),
      status: '',
      dateTime: new Date().toISOString(),
    }),
  });
};
