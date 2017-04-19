import { compose, withHandlers, withState, renderComponent, branch } from 'recompose';
import FormError from '../components/FormError';

const errorState = withState('serverError', 'updateServerError', '');
const handlers = withHandlers({
  onSubmitFailure: ({ updateServerError }) => (error) => {
    const message = error.graphQLErrors[0].message;
    if (message === 'User not found [403]') {
      updateServerError('Benutzer nicht gefunden');
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
