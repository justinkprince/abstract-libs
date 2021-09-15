const getRelativeDaysAgo = require("../dateutils");
const daysAgo = 4;

const one = {
  getLastUpdated: () => getRelativeDaysAgo(daysAgo),
};

module.exports = one;
