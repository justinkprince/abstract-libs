const { DateTime } = require("luxon");

const now = DateTime.local();
const daysAgo = 670;

const three = {
  getLastUpdated: () => now.minus({ days: daysAgo }).toRelativeCalendar(),
};

module.exports = three;
