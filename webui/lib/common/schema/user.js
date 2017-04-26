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

export const Bank = new SimpleSchema({
  internationalAccountNumber: {
    type: String,
    optional: false,
    label: 'IBAN',
    regEx: /^CH\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{1}|CH\d{19}$/,
  },
  name: {
    type: String,
    optional: false,
    label: 'Name des Bankinstituts',
  },
});

export const Insurance = new SimpleSchema({
  healthInsuranceName: {
    type: String,
    optional: false,
    label: 'Name der Krankenkasse',
  },
  healthInsuranceNumber: {
    type: Number,
    optional: false,
    label: 'Kennnummer des Trägers (BAG)',
  },
  socialSecurityNumber: {
    type: String,
    optional: false,
    label: 'Persönliche Kennnummer (AHV)',
    regEx: /^756.\d{4}.\d{4}.\d{2}$/,
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
  bank: {
    type: Bank,
    optional: true,
  },
  insurance: {
    type: Insurance,
    optional: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  stepsCompleted: {
    type: Array,
    optional: true,
  },
  'stepsCompleted.$': {
    type: Object,
    optional: true,
  },
  'stepsCompleted.$.timestamp': {
    type: Date,
    optional: false,
  },
  'stepsCompleted.$.step': {
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
