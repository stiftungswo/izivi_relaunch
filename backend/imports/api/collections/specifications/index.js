import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Specifications = new Meteor.Collection('specifications');

const ExpenseRateCateringTimeOfDay = new SimpleSchema({
  costsPerWorkDayCHF: SimpleSchema.Integer,
  costsPerFreeDayCHF: SimpleSchema.Integer,
}, { requiredByDefault: false });

Specifications.attachSchema(new SimpleSchema({
  deleted: Date,
  name: String,
  governmentId: SimpleSchema.Integer,
  isActive: Boolean,
  configuredExpenseRates: Object,
  'configuredExpenseRates.catering': new SimpleSchema({
    breakfast: ExpenseRateCateringTimeOfDay,
    lunch: ExpenseRateCateringTimeOfDay,
    dinner: ExpenseRateCateringTimeOfDay,
  }, { requiredByDefault: false }),
  'configuredExpenseRates.commute': new SimpleSchema({
    maxPublicTransportationCommuteMinutes: SimpleSchema.Integer,
    carCostsPerKilometerCHF: SimpleSchema.Integer,
  }, { requiredByDefault: false }),
  'configuredExpenseRates.pocketMoney': new SimpleSchema({
    costsPerDayCHF: SimpleSchema.Integer,
  }, { requiredByDefault: false }),
  'configuredExpenseRates.workingClothes': new SimpleSchema({
    costsPerDayCHF: SimpleSchema.Integer,
    maxCostsTotalCHF: SimpleSchema.Integer,
  }, { requiredByDefault: false }),
}, { requiredByDefault: false }));

export default Specifications;
