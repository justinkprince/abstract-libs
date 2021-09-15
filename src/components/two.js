const getRelativeDaysAgo = require("../dateutils");
const daysAgo = 45;

const two = {
  getLastUpdated: () => getRelativeDaysAgo(daysAgo),
};

module.exports = two;
