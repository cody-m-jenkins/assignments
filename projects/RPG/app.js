const ask = require('readline-sync')
const log = console.log
let gameOver = false


log('Welcome to Awkward Party Simulator! \nYou\'re going to go on a journey of social interaction. \n')

let userName = ask.question('What is your character\'s name?')
log(`Welcome to the party, ${userName}! Get ready to mingle!`)
let isAlive = true

function Player (name) {
    this.name = name
    this.social = 100
    this.inventory = ['some pocket lint']
    this.isAlive = true
    this.converse = function() {
        return Math.floor(Math.random() * 10) + 5
    }
}

let self = new Player(userName)

function Partier (name, social, converse){
    this.name = name
    this.social = social
    this.converse = function() {
        return Math.floor(Math.random()* converse) + 3
    }
}

const bro = new Partier('the Bro', 15, 75)
const dog = new Partier('the cutest Pupper', 100, -30)
const host = new Partier('the Host', 25, 15)
const grad = new Partier('the Grad Student', 50, 25)
const coder = new Partier('the Coder', 15, 10)

const partiers = [bro, dog, host, grad, coder]

while(!gameOver && isAlive){
    let input = ask.keyIn('Press [w] to walk around and see if anyone wants to mingle or press [p] to print your inventory.', {limit: 'wpk'})
    if(input === 'w'){
        walk()
    } else if (input === 'p') {
        printInventory()
    } else {
        gameOver = true
    }

function printInventory(){
    log(`You check your belongings and find: ${self.inventory}.`)
}

function walk () {
    let random = Math.floor(Math.random()*5)+1
    if (random < 4) {
        log('You walked around and nobody made eye contact with you. So far, so good!')
    } else {
        socialContact()
    }
}

function socialContact() {
    let partier = partiers[Math.floor(Math.random() * partiers.length)] 
    let action = ask.keyIn(`You accidentally made eye contact with ${partier.name} and they're approaching you.\nDo you attempt conversation [c] or awkwardly skulk away [s]?`, {limit: 'csk'})
    if (action === 's') {
        skulk(partier)
    } else if (action === 'c') {
        conversation(partier)
    } else {
        gameOver = true
    }
}
function skulk(partier){
    let fiftyChance = Math.random()
    if (fiftyChance < 0.5) {
        log('You put your hands in your pockets, stared at the floor, and walked into another room.')
        walk()
    } else {
        log('Your attempt to flee was ineffective. Looks like they are going to make this conversation happen.')
        conversation(partier)}
    }
function conversation(partier){
    while (partier.social >= 0 && self.social >=0){
    let random = Math.floor(Math.random()*4)+1

    if (random === 1) {
                log('there was a heavy pause in the conversation')
    } else {
        partier.social -= self.converse()
        self.social -= partier.converse()
        log(`You smile and nod, things seem to be going well. \n${partier.name} seems to have about ${partier.social} minutes of conversation left.\nYou feel as though you have another ${self.social} minutes left in you.`)
    }
    if(self.social <= 0) {
    log(`\nWhile ${partier.name} is still mid-sentence, you start walking toward the nearest door, quite loudly saying \n\"I FORGOT TO FEED MY CAT. I'M HIGH ON MUSHROOMS. I NEED TO MOVE THE LAUNDRY. NICE TALKING TO YOU.\"\nIt is the last party you ever attend.`)
    gameOver = true
    log('What a loser.')
    } else if (partier === dog && partier.social <=0) {
        log(`${partier.name} wags his tail and is a good boy.`)
    }else if (partier.name===bro && partier.social <=0) {
        log(`${partier.name} says \"You're totally dope, ${userName}. We should go to the gym and spot each other some time. Have a drink!\" \nA beverage has been added to your inventory.`)
        self.inventory.push(' Monster Energy Drink')
    }else if (partier === coder && partier.social <=0) {
        log(`${partier.name} says \"Thank you for talking to me, ${userName}. Take this, you'll like it.\" \nAn item has been added to your inventory.`)
        self.inventory.push(' bootable thumb drive with Linux Mint')
    }else if (partier === grad && partier.social <=0) {
        log(`${partier.name} says \"You indubitably of superb character, ${userName}. It would please me if we were to socialize in the future. Please take this beverage as a token of my appreciation!\" \nA beverage has been added to your inventory.`)
        self.inventory.push(' a bottle of water with no label')
    }else if (partier === host && partier.social <=0) {
    log(`${partier.name} says \"I'm glad you\'re enjoying yourself, ${userName}. Have a drink!\" \nA beverage has been added to your inventory.`)
    self.inventory.push(' Natural Light')
        }
}
}
}
