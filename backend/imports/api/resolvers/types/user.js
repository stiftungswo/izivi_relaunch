export default {
  email(user) {
    return user.emails[0].address;
  },
  name({ username, profile }) {
    const nameParts = [];
    if (profile && profile.firstName) nameParts.push(profile.firstName);
    if (profile && profile.lastName) nameParts.push(profile.lastName);
    if (nameParts.length === 0) {
      return `ZDP-${username}`;
    }
    return nameParts.join(' ');
  },
  isStepComplete(user, { step }) {
    const stepsCompleted = user.stepsCompleted || [];
    return stepsCompleted.reduce((isMaybeCompleted, { step: completedStep }) => {
      if (completedStep === step) return true;
      return isMaybeCompleted;
    }, false);
  },
};
