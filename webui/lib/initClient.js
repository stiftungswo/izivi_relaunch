import { ApolloClient, createNetworkInterface } from 'react-apollo';

let apolloClient = null;

function doInitClient(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:3010/graphql',
      opts: {
        credentials: 'same-origin',
        // Pass headers here if your graphql server requires them
      },
    }),
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
