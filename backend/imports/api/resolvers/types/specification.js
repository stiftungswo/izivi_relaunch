
export default {
  configuredExpenseRates(specification) {
    return Object.keys(specification.configuredExpenseRates).map((name, key) => ({
      name,
      key,
      ...(specification.configuredExpenseRates[name]),
    }));
  },
};
