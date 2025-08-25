import { getTokenInHeaders } from '@utils/helpers';

const transformAuthResponse = ({ response, meta }) => {
  const headers = meta?.response?.headers;
  const { authToken, idToken } = getTokenInHeaders({ headers });

  if (!headers || !authToken || !idToken) {
    throw new Error();
  }

  return { authToken, idToken, userData: { ...response } };
};

export default transformAuthResponse;
