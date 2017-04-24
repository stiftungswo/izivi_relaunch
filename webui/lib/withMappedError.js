import { compose, withHandlers, withState } from 'recompose';

export default compose(
  withState('mappedError', 'updateMappedError', null),
  withHandlers({
    mapError: ({ updateMappedError }) => (error) => {
      const graphQLError = error.graphQLErrors[0];
      const message = graphQLError.message;
      if (message === 'User not found [403]') {
        updateMappedError(new Error('Benutzer nicht gefunden'));
        return;
      } else if (message === 'Username already exists. [403]') {
        updateMappedError(new Error('Benutzer existiert bereits im System, zurücksetzen?'));
        return;
      } else if (message === 'Email already exists. [403]') {
        updateMappedError(new Error('E-Mail existiert bereits im System, zurücksetzen?'));
        return;
      }
      if (graphQLError) {
        updateMappedError(graphQLError);
      } else {
        updateMappedError(error);
      }
    },
  }),
);
