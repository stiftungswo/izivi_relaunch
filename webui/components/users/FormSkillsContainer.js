import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormSkills from './FormSkills';

export const SKILLS = 'SKILLS';

const FRAGMENT_SKILLS = gql`
  fragment skillsFields on User {
    _id
    skills {
      workExperience
      drivingLicence
    }
  }
`;

export default compose(
  graphql(gql`
    query getSkills {
      me {
        ...skillsFields
      }
    }
    ${FRAGMENT_SKILLS}
  `),
  graphql(gql`
    mutation updateUserSkills($skills: UserSkillsInput) {
      updateUserSkills(skills: $skills) {
        isStepComplete(step: SKILLS)
        stepsPercentageComplete
        ...skillsFields
      }
    }
    ${FRAGMENT_SKILLS}
  `),
  withFormSchema({
    drivingLicence: {
      type: String,
      optional: false,
      label: 'Führerausweiskategorie',
      defaultValue: '',
    },
    workExperience: {
      type: String,
      optional: false,
      label: 'Beschreibe deine Berufserfahrung / CV',
    },
  }),
  withFormModel(({ data: { me } }) => (me && me.skills) || {}),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: {
          skills: schema.clean(dirtyInput),
        },
      }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({
    drivingLicenceOptions: [
      { label: 'Motorwagen (PW, Lastwagen, ...) ohne Anhänger', value: 'B' },
      { label: 'Motorwagen (PW, Lastwagen, ...) mit Anhänger', value: 'BE' },
      { label: 'Andere: Motorräder, Traktor, usw.', value: 'A' },
      { label: 'Keinen Führerausweis', value: '' }],
    ...rest,
  })),
  pure,
)(FormSkills);
