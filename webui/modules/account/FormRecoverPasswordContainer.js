import { compose, pure, mapProps, withHandlers } from 'recompose';
import { forgotPassword } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import withFormSchema from '../../lib/withFormSchema';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import FormRecoverPassword from './FormRecoverPassword';

export default compose(
  withApollo,
  withFormSchema({
    email: {
      type: String,
      label: 'E-Mail Adresse',
    },
  }),
  withHandlers({
    onSubmit: ({ client }) => ({ email }) =>
      forgotPassword({ email }, client),
  }),
  withFormErrorHandlers,
  mapProps(({ client, ...rest }) => ({ ...rest })),
  pure,
)(FormRecoverPassword);
