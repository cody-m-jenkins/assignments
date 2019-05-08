const ask = require('readline-sync')
let hasWon = false;
let isAlive = true;

console.log('Welcome!')

let username = ask.question('What is your name?')
console.log(`Hey ${username}.`)

function Player (name) {
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.attack = Math.floor(Math.random() * 10) +5
}

let player = new Player(username)

function Enemy (name, hp, attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

const bowser = new Enemy('Bowser', 200, Math.floor(Math.random()*2))
const peach = new Enemy('Peach', 50, Math.floor(Math.random()*10))
const bobomb = new Enemy('Bobomb', 10, Math.floor(Math.random()*100))
const waluigi = new Enemy('Waluigi', 2, Math.floor(Math.random()*2))

const enemies = [bowser, peach, bobomb, waluigi]

while(!hasWon && isAlive){
  let input = ask.keyIn('Press [w] to walk, or press [p] to print your inventory', {limit: 'wp'})
  console.log(walk)
  if(input === 'w'){
      walk()
    //   hasWon = true
  } else if (input === 'p'){
      console.log('your inventory:')
  } else {
    //   isAlive = false
  }

 function walk () {
    let random = Math.floor(Math.random()*4)+1
    if(random < 4){
        console.log('You walked through a nice patch of grass')
    }else {
        enemyEncounter()
    }
 }
function enemyEncounter(){
    let enemy = enemies(Math.floor(Math.random()*enemies.length))
    let input = ask.keyIn('You encountered an enemy, [r] run or [f] fight?', {limit: 'rf'})
    if (input === 'r'){
        run()
    } else {
        fight()
    }
}
function printInventory(){
    console.log(`Your inventory is ${player.inventory}`)
}

function run(){
    console.log('you ran')
}

function fight(enemy){
    let random = Math.floor(Math.random()*5)=1
    if(random === 1){
        console.log('you missed')
    } else {
        enemy.hp -= player.attack()
        player.hp -= enemy.attack()
        console.log(`${enemy.name} hit you. Your hp is now ${player.hp}. Their hp is ${enemy.hp}.`)
    }
}

}
