import SimpleSchema from 'simpl-schema';

export const Profile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true,
  },
  lastName: {
    type: String,
    optional: true,
  },
});

export default new SimpleSchema({
  username: {
    type: String,
    regEx: /^[0-9]*$/,
  },
  emails: {
    type: Array,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  profile: {
    type: Profile,
    defaultValue: {},
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  roles: {
    type: Array,
    optional: true,
  },
  'roles.$': {
    type: String,
    optional: true,
  },
  heartbeat: {
    type: Date,
    optional: true,
  },
});
