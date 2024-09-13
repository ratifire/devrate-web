import { useEffect, useState } from "react";

export function useSocket(url, onOpen, port = 443) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Формируем URL с принудительным портом и выводим в лог
    const wsUrl = `${process.env.REACT_APP_WS_URL.replace(/(:\d+)?$/, '')}:${port}${url}`;
    console.log('WebSocket URL:', wsUrl); // Логируем конечный URL WebSocket

    const ws = new WebSocket(wsUrl);

    ws.addEventListener('open', event => {
      console.log('WebSocket открыт:', event); // Логируем событие открытия
      setSocket(event.target);
      onOpen(event);
    });

    ws.addEventListener('error', (error) => {
      console.error('Ошибка WebSocket:', error); // Логируем ошибки соединения
    });

    return () => {
      console.log('Закрытие WebSocket:', wsUrl); // Логируем закрытие соединения
      socket?.close();
      setSocket(null);
    }
  }, [url, port]);

  return socket;
}
