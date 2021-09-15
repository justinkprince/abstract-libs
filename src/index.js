/**
 * This file (index.js) just pulls in three components and logs out the return value of their method.
 */

const one = require("./components/one");
const two = require("./components/two");
const three = require("./components/three");

console.log(one.getLastUpdated());
console.log(two.getLastUpdated());
console.log(three.getLastUpdated());
