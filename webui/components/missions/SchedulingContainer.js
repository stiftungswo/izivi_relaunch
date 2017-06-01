import { compose, withProps, withState, withHandlers, mapProps, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import Scheduling from './Scheduling';

const SPLIT_TYPE_SPECIFICATION = 'specification';
const SPLIT_TYPE_MINGLED = 'mingled';
const SCHEDULING_SPECIFICATION_LIST_QUERY = gql`
  query allSpecifications {
    allSpecifications(onlyActive: true) {
      _id
      name
    }
  }
`;

const yearOptions = () => {
  const yearToday = moment().year() - 15 - -5;
  return [...(Array(15))].map((_, index) => ({
    text: yearToday + index,
    value: yearToday + index,
  }));
};


export default compose(
  withState('year', 'updateYear', moment().year()),
  withState('split', 'updateSplit', SPLIT_TYPE_SPECIFICATION),
  withHandlers({
    changeYear: ({ updateYear }) => (_, newYear) => {
      updateYear(newYear.value);
    },
    changeSplit: ({ updateSplit }) => (_, newSplit) => {
      updateSplit(newSplit.value);
    },
  }),
  withProps(({ split }) => ({
    yearOptions: yearOptions(),
    splitOptions: [
      {
        text: 'aufgeteilt nach Pflichtenheft',
        value: SPLIT_TYPE_SPECIFICATION,
        key: SPLIT_TYPE_SPECIFICATION,
      },
      {
        text: 'zusammengefasst',
        value: SPLIT_TYPE_MINGLED,
        key: SPLIT_TYPE_MINGLED,
      },
    ],
    isSplitMode: split === SPLIT_TYPE_SPECIFICATION,
  })),
  graphql(SCHEDULING_SPECIFICATION_LIST_QUERY),
  mapProps(({ data: { allSpecifications, loading }, ...rest }) => ({
    specifications: !loading && allSpecifications && allSpecifications,
    ...rest,
  })),
  pure,
)(Scheduling);
