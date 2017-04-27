import { graphql } from 'react-apollo';
import { compose, pure, withHandlers, withState, mapProps } from 'recompose';
import gql from 'graphql-tag';
import UploadAvatar from './UploadAvatar';

const FRAGMENT_AVATAR_FIELDS = gql`
  fragment avatarFields on User {
    _id
    avatar {
      _id
      url
    }
  }
`;


export default compose(
  graphql(gql`
    query getProfile {
      me {
        ...avatarFields
      }
    }
    ${FRAGMENT_AVATAR_FIELDS}
  `),
  graphql(gql`
    mutation updateUserAvatar ($avatar: File!) {
      updateUserAvatar (avatar: $avatar) {
        ...avatarFields
      }
    }
    ${FRAGMENT_AVATAR_FIELDS}
  `),
  withState('imageUrl', 'updateImageUrl', ({ avatarUrl }) => avatarUrl || '/static/square-image.png'),
  withHandlers({
    handleChange: ({ mutate, updateImageUrl }) => async (files) => {
      const avatar = files[0];
      updateImageUrl(URL.createObjectURL(avatar));
      await mutate({
        variables: {
          avatar,
        },
      });
    },
  }),
  mapProps(({ mutate, data: { me }, ...rest }) => ({
    avatarUrl: me && me.avatar && me.avatar.url,
    ...rest,
  })),
  pure,
)(UploadAvatar);
