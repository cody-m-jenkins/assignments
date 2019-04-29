var readline = require("readline-sync");


console.log('You wake up. \n')
readline.keyInPause()
console.log('You\'re confused and tired. \n')
readline.keyInPause()
console.log('You look around and find yourself in a small room with only a teddy bear, a door, and a small hole in the wall. \n')
readline.keyInPause()

const optionArray = ['hug the teddy bear', 'try to open the door', 'reach into the hole in the wall and feel around']

let keyValue = false
let gameOver = 0

while (!gameOver) {
    let option = readline.keyInSelect(optionArray, ('What would you like to do?'))

    if (optionArray[option] === 'hug the teddy bear' && keyValue === false) {
        console.log('A wave of euphoria rushes over you as you hug the teddy bear and remember your childhood...')
        readline.keyInPause()
        console.log('...but wait, as you hug your tiny teddy you feel something hard and metallic inside...')
        readline.keyInPause()
        console.log('You rip tiny teddy\'s head off and find a key inside. I wonder what it could be for?')
        keyValue = true
    } else if (optionArray[option] === 'hug the teddy bear' && keyValue === true) {
        console.log('You hug the teddy bear again, but it isn\'t very satisfying since he is headless.')
    } else if (
        optionArray[option] === 'try to open the door' && keyValue === false) {
        console.log('You jiggle the handle and nothing happens. It appears to be locked.')
    } else if (optionArray[option] === 'try to open the door' && keyValue === true) {
        console.log('Hands trembling, you instert the key and the lock turns...')
        readline.keyInPause()
        console.log('As the door swings wide your eyes hurt as they adjust to the bright sunlight.')
        readline.keyInPause()
        console.log('You\'ve made escaped. You are free. The desert\'s sands await you. Good luck on your journey, friend.')
        gameOver = true
    } else if (optionArray[option] === 'reach into the hole in the wall and feel around') {
        console.log('There\'s an interesting smooth, scaley feeling rope inside.')
        readline.keyInPause()
        console.log('Recoiling in pain, you realize all too late that the rope was, in fact, an inland taipan, one of the most dangerous snakes on the planet.')
        readline.keyInPause()
        console.log('You die quickly, wondering how you ever got yourself into this mess.')
        gameOver = true
    }
}