const fileSystemPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fileSystemPromises.readFile(path.join(__dirname,'files','mydetails.txt'),'utf8');
    console.log(data);
    await fileSystemPromises.writeFile(path.join(__dirname,'files','promises.txt'), data);
    await fileSystemPromises.appendFile(path.join(__dirname,'files','promises.txt'),'\nHappy codding');
    
  }
  catch (err) {
    console.log(`An error ${err} occured`);
  }
}

fileOps()


/* fileSystem.readFile(path.join(__dirname, 'files', 'mydetails.txt'), 'utf8', (err, data)=> {
  if (err) throw err;
  console.log(data); //if toString() is not used we get the buffer data
});

fileSystem.writeFile(path.join(__dirname, 'files', 'newfile.txt'), 'Have no ideas to write :| ' ,(err)=> {
  if (err) throw err;
  console.log('Written successfully');
});

fileSystem.appendFile(path.join(__dirname, 'files', 'testingfile.txt'), 'Testing file' ,(err)=> {
  if (err) throw err;
  console.log('Testing completed successfully');
}); */







//continue from reading data in a file 
/* process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
}) */

