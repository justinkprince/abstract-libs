const { DateTime } = require("luxon");

const now = DateTime.local();
const daysAgo = 4;

const one = {
  getLastUpdated: () => now.minus({ days: daysAgo }).toRelativeCalendar(),
};

module.exports = one;
