import { compose, pure, mapProps, withHandlers, withState, withProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Holiday from './Holiday';

export const HolidayByYearQuery = gql`
  query HolidayByYearQuery($year: Int!){
    holidayByYear(year: $year) {
      _id
      date
      name
      type
    }
  }
`;

const yearOptions = () => {
  const yearSpread = 3; // Spread of x years in dropdown menu relative to the current year
  const yearStart = new Date().getFullYear() - yearSpread;
  return [...(Array(yearSpread*2+1))].map((_, index) => ({
    key: yearStart + index,
    text: yearStart + index,
    value: yearStart + index,
  }));
};

export default compose(
  withState('year', 'updateYear', new Date().getFullYear()),
  withHandlers({
    changeYear: ({ updateYear }) => (_, newYear) => {
      updateYear(newYear.value);
    },
  }),
  withProps({
    yearOptions: yearOptions(),
  }),
  graphql(HolidayByYearQuery, {
    options: (ownProps) => ({
      variables: {
        year: ownProps.year
      }
    })
  }),
  mapProps(({ data: { holidayByYear }, ...rest }) => ({ holidays: holidayByYear, ...rest})),
  pure,
)(Holiday);
