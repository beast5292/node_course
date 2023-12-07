const logEvents = require('./logEvents');

const eventEmitter = require('events');

class MyEmitter extends eventEmitter{};

// initializing an object
const myEmitter = new MyEmitter(); 

// adding a listener for log event
myEmitter.on('log',(msg) => logEvents(msg));

myEmitter.emit('log','log event emitted');