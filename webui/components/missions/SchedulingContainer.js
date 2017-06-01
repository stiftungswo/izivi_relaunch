import { compose, withProps, withState, withHandlers, mapProps, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import Scheduling from './Scheduling';

const yearToday = moment().year() - 15 - -5;
const yearOptions = [...(Array(15))].map((_, index) => ({
  text: yearToday + index,
  value: yearToday + index,
}));

const SCHEDULING_SPECIFICATION_LIST_QUERY = gql`
  query allSpecifications {
    allSpecifications {
      _id
      name
    }
  }
`;

export default compose(
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
  withProps(({ split }) => ({
    yearOptions,
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
    isSplitMode: split === 'specification',
  })),
  graphql(SCHEDULING_SPECIFICATION_LIST_QUERY),
  mapProps(({ data: { allSpecifications, loading }, ...rest }) => ({
    specifications: !loading && allSpecifications && allSpecifications,
    ...rest,
  })),
  pure,
)(Scheduling);
