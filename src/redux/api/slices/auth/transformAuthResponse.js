import accountStatus from '@utils/constants/accountStatus';
import { getTokenInHeaders } from '@utils/helpers';

const transformAuthResponse = ({ response, meta }) => {
  const statusAuth = response?.status;

  if (statusAuth === accountStatus.INACTIVE) {
    return { userData: { statusAuth } };
  }

  const headers = meta?.response?.headers;
  const userInfo = response?.userInfo;
  const { authToken, idToken } = getTokenInHeaders({ headers });

  if (!headers || !statusAuth === accountStatus.ACTIVE || !authToken || !idToken) {
    throw new Error();
  }

  return { authToken, idToken, userData: { statusAuth, ...userInfo } };
};

export default transformAuthResponse;
