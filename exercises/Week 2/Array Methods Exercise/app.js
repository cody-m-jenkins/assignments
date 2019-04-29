const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// function arrayAssignment() {
const arrayAssignment = () => {

    vegetables.pop()
    fruit.shift()

    let fruitArrayOrangeIndex = fruit.indexOf('orange')
    fruit.push(fruitArrayOrangeIndex)

    let vegeArrayLength = vegetables.length
    vegetables.push(vegeArrayLength)

    const food = fruit.concat(vegetables)

    food.splice(4, 2)

    food.reverse()

    let newString = food.join(',')
    return newString
}
console.log(arrayAssignment())

// console.log(newString)

// console.log(fruitArrayOrangeIndex)
// console.log(vegeArrayLength)
// console.log(food)
// console.log(fruit)
// console.log(vegetables)