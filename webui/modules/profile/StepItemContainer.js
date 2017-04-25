import { compose, pure, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import StepItem from './StepItem';

export default compose(
  graphql(gql`
    query checkIfCurrentUserCompletedStep($step: UserProfileStep!) {
      me {
        _id
       isProfileStepComplete(step: $step)
     }
   }`),
  withProps(({ data: { me = null, loading = true } }) => ({
    completed: me && me.isProfileStepComplete,
    loading,
  })),
  pure,
)(StepItem);
