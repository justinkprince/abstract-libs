/**
 * date-fns
 * To switch to use date-fns as the date library, comment out the this block and uncomment the Luxon block.
 */

// const { formatDistance, subDays } = require("date-fns");
// const getRelativeDaysAgo = (daysAgo) =>
//   formatDistance(subDays(new Date(), daysAgo), new Date(), { addSuffix: true });

/**
 * Luxon
 * To switch to use Luxon as the date library, comment out the date-fns block and uncomment the following block.
 */

const { DateTime } = require("luxon");
const now = DateTime.local();
const getRelativeDaysAgo = (daysAgo) =>
  now.minus({ days: daysAgo }).toRelativeCalendar();

module.exports = getRelativeDaysAgo;
