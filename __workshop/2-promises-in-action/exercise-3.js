const rp = require('request-promise');

const getDadJoke = async () => {

    const options = {
        uri: 'https://icanhazdadjoke.com/', 
        headers: {
            'Accept': 'application/json'
        },
    }
    const dadJoke = await rp(options)
    console.log('_________________________________________clear')
    console.log(dadJoke)

    return dadJoke
}

getDadJoke().then(joke => {
    console.log(joke)
})

module.exports = {
    getDadJoke
}