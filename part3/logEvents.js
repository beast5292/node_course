const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
// :(as) uuid is an alias (can be named anything)
// It means import v4 as uuid

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (msg) => {
    const dateTime = format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname,'logs-details'))){
            await fsPromises.mkdir('logs-details');
        }
        await fsPromises.appendFile(path.join(__dirname,'logs-details','event.txt'), logItem);
    } catch (err) {
        console.log(`${err} has occured`);
    }
}

module.exports = logEvents;


/* console.log(format(new Date(), 'yyyy/MM/dd\tHH:mm:ss'));
console.log(uuid()) */

