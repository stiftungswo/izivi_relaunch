import SimpleSchema from 'simpl-schema';

const ExpenseRateCateringTimeOfDay = new SimpleSchema({
  costsPerWorkDayCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 0,
    label: 'Entschädigung pro Arbeitstag',
  },
  costsPerFreeDayCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 0,
    label: 'Entschädigung pro arbeitsfreien Tag',
  },
});

export const ExpenseRateCatering = new SimpleSchema({
  breakfast: {
    type: ExpenseRateCateringTimeOfDay,
    defaultValue: {},
    label: 'Frühstück',
  },
  lunch: {
    type: ExpenseRateCateringTimeOfDay,
    defaultValue: {},
    label: 'Mittagessen',
  },
  dinner: {
    type: ExpenseRateCateringTimeOfDay,
    defaultValue: {},
    label: 'Abendessen',
  },
});

export const ExpenseRateCommute = new SimpleSchema({
  maxPublicTransportationCommuteMinutes: {
    type: SimpleSchema.Integer,
    defaultValue: 180,
    label: 'Max. Anzahl Minuten zumutbar (ÖV)',
  },
  carCostsPerKilometerCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 65,
    label: 'Kilometerentschädigung',
  },
});

export const ExpenseRatePocketMoney = new SimpleSchema({
  costsPerDayCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 500,
    label: 'Sackgeld pro Tag',
  },
});

export const ExpenseRateWorkingClothes = new SimpleSchema({
  costsPerDayCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 0,
    label: 'Spesen für Arbeitskleidung pro Tag',
  },
  maxCostsTotalCHF: {
    type: SimpleSchema.Integer,
    defaultValue: 25000,
    label: 'Max. Spesen für Arbeitskleidung pro Einsatz',
  },
});

export default new SimpleSchema({
  deleted: Date,
  name: {
    type: String,
    optional: false,
    label: 'Name',
  },
  governmentId: {
    type: SimpleSchema.Integer,
    min: 10000,
    max: 999999,
    optional: true,
    label: 'Pflichtenheft ID',
  },
  isActive: {
    type: Boolean,
    optional: true,
    label: 'Aktiviert',
  },
  configuredExpenseRates: {
    type: Object,
  },
  'configuredExpenseRates.catering': {
    type: ExpenseRateCatering,
    optional: true,
    label: 'Verpflegung',
  },
  'configuredExpenseRates.commute': {
    type: ExpenseRateCommute,
    optional: true,
    label: 'Wegkosten',
  },
  'configuredExpenseRates.pocketMoney': {
    type: ExpenseRatePocketMoney,
    optional: true,
    label: 'Sackgeld',
  },
  'configuredExpenseRates.workingClothes': {
    type: ExpenseRateWorkingClothes,
    optional: true,
    label: 'Arbeitskleidung',
  },
});
