const moment = require('moment');

console.log(moment('12 Jun 1989', 'MMMM DD YYYY').isValid());
console.log(moment('Jun 12, 1989', 'MMMM DD, YYYY'));
console.log(moment('123784789', 'X'));
console.log(moment('June 12, 1989', 'X'));
console.log(+"June");
console.log(+'43124312');