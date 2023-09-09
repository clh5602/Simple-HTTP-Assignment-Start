const fs = require('fs'); // file system module

const imgSponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSponge = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imgSponge);
  response.end();
};

module.exports = {
  getSponge,
};
