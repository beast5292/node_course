console.log("hello there!!");
//console.log(global);

const os = require('os');
const path = require('path');
const {add,div} = require('./math');
// or we could use math = require('./math')
/* and we call is like : 
      math.add(2,2);               */


/*console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname); 
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); */

console.log(add(2,2));
console.log(div(4,3));
