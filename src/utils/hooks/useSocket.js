import {useEffect} from "react";

// Хук WebSocket
export function useSocket(url, onOpen) {
  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}${url}`);
    
    ws.addEventListener('open', (event) => {
      onOpen(event);
    });
    
    // Очищення ресурсу WebSocket при розмонтаженні компонента
    return () => {
      ws.close();
    };
  }, [url, onOpen]); // Додано залежності
}