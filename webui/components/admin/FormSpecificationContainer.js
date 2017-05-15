import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
// import withFormModel from '../../lib/withFormModel';
import FormSpecificationSchema from '../../lib/common/schema/specification';
import FormSpecification from './FormSpecification';

export default compose(
  graphql(gql`
    mutation createSpecification($specification: CreateSpecificationInput) {
      createSpecification(specification: $specification) {
        _id
      }
    }
  `),
  withFormSchema({
    specification: {
      type: FormSpecificationSchema,
      optional: false,
    },
  }),
  // withFormModel(({ data: { me } }) => ({
  //   specification: (me && me.specification) || null,
  // })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormSpecification);
