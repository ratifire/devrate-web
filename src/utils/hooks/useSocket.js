import {useEffect, useState} from "react";

export function useSocket(url, onOpen) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const wsUrl = `${process.env.REACT_APP_WS_URL}${url}`;
    console.log('Connecting to WebSocket:', wsUrl);
    const ws = new WebSocket(wsUrl);
    ws.addEventListener('open', event => {
      setSocket(event.target);
      onOpen(event);
    });

    ws.addEventListener('error', (error) => {
      console.error('WebSocket error:', error); // Логирование ошибки WebSocket
    });

    return () => {
      socket?.close();
      setSocket(null);
    }
  }, [url]);
}