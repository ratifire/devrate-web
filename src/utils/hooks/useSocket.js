import {useEffect, useState} from "react";

export function useSocket(url, onOpen) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}`);
    ws.addEventListener('open', event => {
      setSocket(event.target);
      onOpen(event);
    });

    return () => {
      socket?.close();
      setSocket(null);
    }
  }, []);
}