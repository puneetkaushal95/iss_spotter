// const { fetchMyIP, fetchISSFlyOverTimes } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }).catch((error) => {
    console.log("It didn't work: ", error.message);
  });
