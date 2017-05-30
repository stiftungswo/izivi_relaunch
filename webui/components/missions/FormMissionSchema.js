import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  deleted: {
    type: Date,
    optional: true,
    label: 'Löschvormerkung',
  },
  created: {
    type: Date,
    optional: true,
    label: 'Datum: Erstellt',
  },
  approved: {
    type: Date,
    optional: true,
    label: 'Datum: Definitiv',
  },
  sent: {
    type: Date,
    optional: true,
    label: 'Datum: An Behörde versandt',
  },
  finished: {
    type: Date,
    optional: true,
    label: 'Datum: Abgeschlossen',
  },
  specificationId: {
    type: String,
    optional: false,
    label: 'Pflichtenheft',
  },
  userId: {
    type: String,
    optional: true,
    label: 'Zivildienstleistender',
  },
  isTrial: {
    type: Boolean,
    optional: true,
    label: 'Probeeinsatz?',
  },
  isLastMission: {
    type: Boolean,
    optional: true,
    label: 'Letzter Zivildiensteinsatz?',
  },
  isLongMission: {
    type: Boolean,
    optional: true,
    label: 'Langer Einsatz?',
  },
  start: {
    type: Date,
    optional: false,
    label: 'Startdatum',
  },
  end: {
    type: Date,
    optional: false,
    label: 'Enddatum',
  },
});
