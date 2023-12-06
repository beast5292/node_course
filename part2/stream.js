const fs = require('fs');
const path = require('path');

const readS = fs.createReadStream(path.join(__dirname, 'files', 'funnyquote.txt'),{encoding: 'utf8'});
const writeS = fs.createWriteStream('./files/newFile.txt');

/*readS.on('data',(dataChunk) => {
    writeS.write(dataChunk);
})*/

readS.pipe(writeS);