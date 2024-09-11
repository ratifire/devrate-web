import {useEffect, useState} from "react";

export function useSocket(url, onOpen) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`wss://server.devrate.org${url}`);
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