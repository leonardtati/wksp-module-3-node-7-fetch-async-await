const rp = require('request-promise');

const getTronaldDump = async () => {
    const option ={
        uri: 'https://api.tronalddump.io/random/quote',
        headers: {
            'Accept': 'application/json'
        } 
    }
    const dumpDonald = await rp(option)
    const parsed = JSON.parse(dumpDonald)
console.log('____________________________________________')
    return parsed.value

}
getTronaldDump().then(data =>{
    console.log(data)
})

module.exports = {
    getTronaldDump
}