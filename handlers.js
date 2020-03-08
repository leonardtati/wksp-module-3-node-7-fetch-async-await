const { getDadJoke } = require('./__workshop/2-promises-in-action/exercise-3');
const { getTronaldDump } = require('./__workshop/2-promises-in-action/exercise-4');
const { getGeekJoke } = require('./__workshop/2-promises-in-action/exercise-5');

const handleJoke = async (req, res) => {
    const { type } = req.body;
    let joke = '';
    switch (type) {
        case 'geek':
            joke = await getGeekJoke();
            console.log("geek: ")
            console.log(joke)
            break;
        case 'tronald':
            joke = await getTronaldDump();
            console.log("tron: ")
            console.log(joke)
            break;
        case 'dad':
        default:
            joke = await getDadJoke();
            joke = JSON.parse(joke)
           
            joke = joke.joke
            break;
    }
  
    res.status(200).json({data: joke});
}

module.exports = {
    handleJoke
}
