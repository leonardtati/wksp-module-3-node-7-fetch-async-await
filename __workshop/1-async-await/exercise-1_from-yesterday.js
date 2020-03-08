// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {

    try{
        const answer = await request('http://api.open-notify.org/iss-now.json');
        const issLocation = JSON.parse(answer)
        const data ={
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        };
        console.log(data)

        return data
    }

    catch(err){
        console.log(err)
    }
    // add code here (include a try/catch as well)
}

getIssPosition();