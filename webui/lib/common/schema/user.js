import SimpleSchema from 'simpl-schema';

export const Profile = new SimpleSchema({
  firstName: {
    type: String,
    optional: false,
    label: 'Vorname',
  },
  lastName: {
    type: String,
    optional: false,
    label: 'Nachname',
  },
  street: {
    type: String,
    optional: false,
    label: 'Strasse',
  },
  city: {
    type: String,
    optional: false,
    label: 'Ort',
  },
  postalNumber: {
    type: Number,
    min: 1000,
    max: 99999,
    optional: false,
    label: 'PLZ',
  },
  birthday: {
    type: Date,
    optional: false,
    label: 'Geburtsdatum',
  },
  phoneMobile: {
    type: String,
    optional: true,
    label: 'Telefonnummer (Mobile)',
  },
  phoneWork: {
    type: String,
    optional: true,
    label: 'Telefonnummer (Arbeit)',
  },
});

export default new SimpleSchema({
  username: {
    type: String,
    label: 'Zivildienstnummer',
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
    optional: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  profileStepsCompleted: {
    type: Array,
    optional: true,
  },
  'profileStepsCompleted.$': {
    type: Object,
    optional: true,
  },
  'profileStepsCompleted.$.timestamp': {
    type: Date,
    optional: false,
  },
  'profileStepsCompleted.$.step': {
    type: String,
    optional: false,
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
