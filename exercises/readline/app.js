const readlineSync = require('readline-sync')


// console.log(readlineSync)

// let answer = readlineSync.keyInYN('Do you like tacos?')

// let crazy
// if(answer){
//     crazy = readlineSync.keyInYN('Are you crazy?')
// } else {
//     console.log('bye Felicia')
// }

// if(crazy){
//     console.log('So am I!')
// }


// const states = ['California', 'Louisiana', 'Wyoming', 'Oregon', 'Florida']

// let gameOver = false

while(!gameOver){
    let index = readlineSync.keyInSelect(states,('Which state should we sell to Canada?'))
    if(states[index] !== 'Florida') {
        console.log('Nah, we should keep that one.')
        console.log(`I don't think we should get rid of ${states[index]}. Let's try another one...`)
    } else{
        gameOver=true
        console.log('Good idea, thanks for the help!')
    }
}
// //this breaks when we choose Florida or cancel
// console.log(index)
