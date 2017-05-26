import { compose, branch, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormMissionSchema from './FormMissionSchema';
import FormMission from './FormMission';

const MISSION_FORM_QUERY = gql`
  query getMission($_id: ID!) {
    mission(_id: $_id) {
      _id
      start
      end
      isTrial
      isLastMission
      isLongMission
      user {
        _id
      }
      specification {
        _id
        name
      }
    }
  }
`;

const MISSION_FORM_SPECIFICATION_LIST_QUERY = gql`
  query allSpecifications {
    allSpecifications {
      _id
      name
    }
  }
`;


const update = compose(
  graphql(MISSION_FORM_QUERY),
  withFormModel(({ data: { mission } }) => {
    if (mission) {
      const { user, specification, ...rest } = mission;
      const newMission = {
        userId: user._id,
        specificationId: specification._id,
        ...rest,
      };
      return {
        mission: newMission,
      };
    }
    return {};
  }),
  graphql(gql`
    mutation updateMission($mission: MissionInput, $_id: ID!) {
      updateMission(mission: $mission, _id: $_id) {
        _id
      }
    }
  `),
  withHandlers({
    onSubmit: ({ mutate, schema, _id }) => ({ ...dirtyInput }) =>
      mutate({ variables: { ...(schema.clean(dirtyInput)), _id } }),
    onSubmitSuccess: ({ onSubmitSuccess }) => ({ data }) =>
      onSubmitSuccess(data.updateMission),
  }),
);

const create = compose(
  graphql(gql`
    mutation createMission($mission: MissionInput) {
      createMission(mission: $mission) {
        _id
      }
    }
  `, {
    options: {
      refetchQueries: [
        'getMissions',
      ],
    },
  }),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: schema.clean(dirtyInput),
      }),
    onSubmitSuccess: ({ onSubmitSuccess }) => ({ data }) =>
      onSubmitSuccess(data.createMission),
  }),
);

export default compose(
  withFormSchema({
    mission: {
      type: FormMissionSchema,
      optional: false,
    },
  }),
  branch(({ _id }) => !!_id, update, create),
  graphql(MISSION_FORM_SPECIFICATION_LIST_QUERY),
  withFormErrorHandlers,
  mapProps(({ _id, mutate, userId, data: { allSpecifications, loading }, ...rest }) => ({
    specificationOptions: !loading && allSpecifications && allSpecifications
      .concat([{ name: 'Pflichtenheft auswählen...', _id: '' }])
      .map(({ _id: value, name: label }) => ({ label, value })),
    ...rest,
  })),
  pure,
)(FormMission);
