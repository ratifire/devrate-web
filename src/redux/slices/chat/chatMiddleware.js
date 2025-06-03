import { CHAT_ACTIONS } from './typeAction.js';
import { connectWebsocket, disconnectWebsocket, submitMessage, messagesList, openBadge } from './chatSlice';
import { initializeWebSocket, deactivateWebSocket, sendMessage } from './websocketManager';

const chatMiddleware = (store) => (next) => (action) => {
  const state = store.getState().chat;
  let isDispatchAllowed = true;

  const safeDispatch = (action) => {
    if (isDispatchAllowed) {
      setTimeout(() => store.dispatch(action), 0);
    }
  };

  switch (action.type) {
    case CHAT_ACTIONS.CONNECT: {
      const messageHandler = (newMessages) => {
        if (!isDispatchAllowed) return;

        try {
          safeDispatch(messagesList({ newMessages }));
          if (newMessages.senderId !== state.currentUserId) {
            safeDispatch(openBadge());
          }
        } catch (error) {
          console.error('Error handling message:', error);
        }
      };

      initializeWebSocket(state.currentUserId, messageHandler);
      return next(connectWebsocket());
    }

    case CHAT_ACTIONS.DISCONNECT:
      isDispatchAllowed = false;
      deactivateWebSocket();
      return next(disconnectWebsocket());

    case CHAT_ACTIONS.SEND_MESSAGE:
      sendMessage(action.payload.message, state.opponentUserInfo.id, state.currentUserId);
      return next(submitMessage(action.payload));

    default:
      return next(action);
  }
};

export const connectChat = () => ({ type: CHAT_ACTIONS.CONNECT });
export const disconnectChat = () => ({ type: CHAT_ACTIONS.DISCONNECT });
export const sendChatMessage = (message) => ({
  type: CHAT_ACTIONS.SEND_MESSAGE,
  payload: { message },
});

export default chatMiddleware;
