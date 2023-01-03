const fs = require('fs');
const arg = process.argv.slice(2);
//console.log(arg[0])
const request = require('request');
request(arg[0], (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  //console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  
  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
    }
    // file written successfully
  });
});






