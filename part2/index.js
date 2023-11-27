const fileSystem = require('fs');

fileSystem.readFile('./files/mydetails.txt', 'utf8', (err, data)=> {
  if (err) throw err;
  console.log(data); //if toString() is not used we get the buffer data
});

//continue from reading data in a file 