const getTokenInHeaders = ({ headers }) => {
  return {
    authToken: headers.get('authorization'),
    idToken: headers.get('id-token'),
  };
};

export default getTokenInHeaders;
