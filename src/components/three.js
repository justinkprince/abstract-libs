const getRelativeDaysAgo = require("../dateutils");
const daysAgo = 670;

const three = {
  getLastUpdated: () => getRelativeDaysAgo(daysAgo),
};

module.exports = three;
