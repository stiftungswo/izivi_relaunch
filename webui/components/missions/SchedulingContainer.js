import { compose, withProps, withState, withHandlers } from 'recompose';
import moment from 'moment';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';
import Scheduling from './Scheduling';

export default compose(
  // graphql(gql`
  //   query getProfileProgress {
  //     me {
  //       _id
  //       stepsPercentageComplete
  //       avatar {
  //         url
  //       }
  //     }
  //   }
  // `),
  withState('year', 'updateYear', moment().year()),
  withState('split', 'updateSplit', 'specification'),
  withHandlers({
    changeYear: ({ updateYear }) => (_, newYear) => {
      updateYear(newYear.value);
    },
    changeSplit: ({ updateSplit }) => (_, newSplit) => {
      updateSplit(newSplit.value);
    },
  }),
  withProps({
    yearOptions: [
      {
        text: '2017',
        value: 2017,
      },
    ],
    splitOptions: [
      {
        text: 'aufgeteilt nach Pflichtenheft',
        value: 'specification',
      },
      {
        text: 'zusammengefasst',
        value: 'mingled',
      },
    ],
  }),
  // mapProps(({ data: { me } }) => ({
  //   avatarUrl: (me && me.avatar && me.avatar.url) || '/static/square-image.png',
  //   stepsPercentageComplete: (me && me.stepsPercentageComplete) || 0 }),
  // ),
  // pure,
)(Scheduling);
