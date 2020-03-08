const rp = require('request-promise');

const getGeekJoke = async () => {
    let option = {
        uri: 'https://geek-jokes.sameerkumar.website/api',
        method: 'GET'
    }
       
    const geekJoke = await rp(option);
    const parsed = JSON.parse(geekJoke);
    console.log('____________________________________________')
    return parsed;
    

}

getGeekJoke().then(data =>{
    console.log(data)
})

module.exports = {
    getGeekJoke
}
