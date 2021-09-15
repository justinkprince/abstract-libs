const { DateTime } = require("luxon");

const now = DateTime.local();
const daysAgo = 45;

const two = {
  getLastUpdated: () => now.minus({ days: daysAgo }).toRelativeCalendar(),
};

module.exports = two;
