import { CHAT_ACTIONS } from './typeAction.js';
import { connectWebsocket, disconnectWebsocket, submitMessage, messagesList, openBadge } from './chatSlice';
import { initializeWebSocket, deactivateWebSocket, sendMessage } from './websocketManager';

const chatMiddleware = (store) => (next) => (action) => {
  const state = store.getState().chat;

  switch (action.type) {
    case CHAT_ACTIONS.CONNECT:
      initializeWebSocket(state.currentUserId, (newMessages) => {
        store.dispatch(messagesList({ newMessages }));
        if (newMessages.senderId !== state.currentUserId) store.dispatch(openBadge());
      });
      return next(connectWebsocket());

    case CHAT_ACTIONS.DISCONNECT:
      deactivateWebSocket();
      return next(disconnectWebsocket());

    case CHAT_ACTIONS.SEND_MESSAGE:
      sendMessage(action.payload.message, state.opponentUserInfo.id, state.currentUserId);
      return next(submitMessage(action.payload));

    default:
      return next(action);
  }
};

export default chatMiddleware;

// Action creators
export const connectChat = () => ({ type: CHAT_ACTIONS.CONNECT });
export const disconnectChat = () => ({ type: CHAT_ACTIONS.DISCONNECT });
export const sendChatMessage = (message) => ({
  type: CHAT_ACTIONS.SEND_MESSAGE,
  payload: { message },
});
