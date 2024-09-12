import {useEffect, useState} from "react";

export function useSocket(url, onOpen) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}${url}`);

    const handleOpen = (event) => {
      setSocket(event.target);
      onOpen(event);
      console.log('Соединение установлено'); // Optional logging for debugging
    };

    const handleError = (error) => {
      console.error('Ошибка соединения:', error); // Log connection errors
    };

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('error', handleError);

    return () => {
      socket?.close();
      setSocket(null);
    }
  }, []);
}