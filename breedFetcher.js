const request = require('request');
const breedName = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("not found");
    return;
  }

  console.log(data[0].description);
});