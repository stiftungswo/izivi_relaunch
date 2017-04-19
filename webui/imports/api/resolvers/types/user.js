export default {
  email(user) {
    return user.emails[0].address;
  },
};
