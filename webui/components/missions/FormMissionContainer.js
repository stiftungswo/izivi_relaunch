import { compose, branch, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormMissionSchema from './FormMissionSchema';
import FormMission from './FormMission';

const update = compose(
  graphql(gql`
    query getMission($_id: ID!) {
      mission(_id: $_id) {
        _id
        start
        end
        isFirstMission
        isLastMission
        isLongMission
        trialDay
        user {
          _id
        }
        specification {
          _id
          name
        }
      }
    }
  `),
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
  `),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: schema.clean(dirtyInput),
        update: (store, { data: { createMission } }) => {
          // this is updating the mission list query result manually if already executed
          // lists don't update automatically at the moment
          // we have to do this until apollo comes up with proper cache invalidation
          const query = gql`
            query updateListCacheIfAvailable {
              allMissions {
                _id
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
          const data = store.readQuery({ query });
          data.allMissions.push(createMission);
          store.writeQuery({ query, data });
        },
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
  graphql(gql`
    query allSpecifications {
      allSpecifications {
        _id
        name
      }
    }
  `),
  withFormErrorHandlers,
  mapProps(({ _id, mutate, userId, data: { allSpecifications, loading }, ...rest }) => ({
    specificationOptions: !loading && allSpecifications && allSpecifications
      .concat([{ name: 'Pflichtenheft auswählen...', _id: '' }])
      .map(({ _id: value, name: label }) => ({ label, value })),
    ...rest,
  })),
  pure,
)(FormMission);
