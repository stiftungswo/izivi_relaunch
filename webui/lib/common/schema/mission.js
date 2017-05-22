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
    optional: false,
    label: 'Zivildienstleistender',
  },
  isFirstMission: {
    type: Boolean,
    optional: true,
    label: 'Erster Zivildiensteinsatz?',
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
  trialDay: {
    type: Date,
    optional: true,
    label: 'Schnuppertag',
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
