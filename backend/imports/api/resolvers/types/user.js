export default {
  email(user) {
    return user.emails[0].address;
  },
  isEmailVerified(user) {
    return user.emails[0].verified;
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
  stepsPercentageComplete(user) {
    const stepsCompleted = user.stepsCompleted || [];
    // start with 25% (signed up)
    const numberOfStepsCompleted = stepsCompleted.length + 1;
    // currently, there are 4 steps
    return numberOfStepsCompleted / 4;
  },
};