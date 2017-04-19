import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { getLoginToken } from 'meteor-apollo-accounts';

let apolloClient = null;

function doInitClient(headers, initialState) {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3010/graphql',
    // opts: {
    //   credentials: 'same-origin',
    //   // Pass headers here if your graphql server requires them
    // },
  });
  networkInterface.use([{
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers.authorization = await getLoginToken() || null;
      next();
    },
  }]);
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject(result) {
      if (result._id && result.__typename) { // eslint-disable-line
        const dataId = result.__typename + result._id; // eslint-disable-line
        return dataId;
      }
      return null;
    },
    networkInterface,
  });
}

export default (headers, initialState = {}) => {
  if (!process.browser) {
    return doInitClient(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = doInitClient(headers, initialState);
  }
  return apolloClient;
};
