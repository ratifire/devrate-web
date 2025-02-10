import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const useWebSocket = (currentUserId, onMessageReceived) => {
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (!currentUserId) return; // Не підключатися, якщо користувач не залогінений

    const socket = new SockJS('https://server.skillzzy.com/chat');
    const newClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        setIsConnected(true);
        newClient.subscribe(`/topic/messages/${currentUserId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          onMessageReceived(newMessage); // Викликати callback для обробки нового повідомлення
        });
      },
      onDisconnect: () => {
        setIsConnected(false);
      },
    });

    setClient(newClient);
    newClient.activate();

    return () => {
      if (newClient.connected) {
        newClient.deactivate();
      }
    };
  }, [currentUserId, onMessageReceived]);

  return { isConnected, client };
};

export default useWebSocket;
