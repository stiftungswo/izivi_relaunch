import { compose, withHandlers, withState, renderComponent, branch } from 'recompose';
import FormError from './FormError';

const errorState = withState('serverError', 'updateServerError', '');
const handlers = withHandlers({
  onSubmitFailure: ({ updateServerError }) => (error) => {
    const message = error.graphQLErrors[0].message;
    if (message === 'User not found [403]') {
      updateServerError('Benutzer nicht gefunden');
      return;
    } else if (message === 'Username already exists. [403]') {
      updateServerError('Benutzer existiert bereits im System, zurücksetzen?');
      return;
    } else if (message === 'Email already exists. [403]') {
      updateServerError('E-Mail existiert bereits im System, zurücksetzen?');
      return;
    }
    updateServerError(error.message);
  },
  resetError: ({ updateServerError }) => () => {
    updateServerError(null);
  },
});

export default compose(
  errorState,
  handlers,
  branch(({ serverError }) => !!serverError, renderComponent(FormError)),
);
