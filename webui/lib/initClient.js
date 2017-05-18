import { ApolloClient } from 'react-apollo';
import { getLoginToken, onTokenChange } from 'meteor-apollo-accounts';
import createNetworkInterface from './createNetworkInterface';

let apolloClient = null;

function doInitClient(headers, initialState) {
  const networkInterface = createNetworkInterface({
    uri: process.env.GRAPHQL_ENDPOINT,
    opts: {
      credentials: 'same-origin',
    },
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
        const dataId = `${result.__typename}:${result._id}`; // eslint-disable-line
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
  onTokenChange(() => {
    console.log('token did change'); // eslint-disable-line
    apolloClient.resetStore();
  });
  return apolloClient;
};
