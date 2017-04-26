import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation updateUserAvatar ($avatar: File!) {
    updateUserAvatar (avatar: $avatar) {
      _id
      avatar {
        _id
        url
      }
    }
  }
`)(({ mutate }) => {
  const handleChange = ({ target }) => {
    if (target.validity.valid) {
      mutate({
        variables: {
          avatar: target.files[0],
        },
      }).then(({ data }) => console.log('Mutation response:', data));
    }
  };

  return <input type="file" accept={'image/jpeg,image/png'} required onChange={handleChange} />;
});
