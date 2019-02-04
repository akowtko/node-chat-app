const moment = require('moment');

const date = moment();
console.log(date.format('h:mm a'));
const someTimestamp = moment().valueOf();
console.log(someTimestamp)

// 10:35 am