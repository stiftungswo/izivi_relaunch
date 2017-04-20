export default {
  email(user) {
    return user.emails[0].address;
  },
  name(user) {
    const profile = user.profile || {};
    const nameParts = [];
    if (profile.firstName) nameParts.push(profile.firstName);
    if (profile.lastName) nameParts.push(profile.lastName);
    if (nameParts.length === 0) {
      return 'Unbekannter Name';
    }
    return nameParts.join(' ');
  },
};
