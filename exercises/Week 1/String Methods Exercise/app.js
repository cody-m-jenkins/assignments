// 1.a. Make a function that will return any given string into all caps followed by the same string all lowercase.
// const upperAndLowerCaseTwice = (str) => (str.toUpperCase() + str.toLowerCase())
// console.log(upperAndLowerCaseTwice('Megan'))

//1.b. Make a function that returns a number half the length, and rounded down. 
// const findMiddleIndex = (str) => {
//     return (Math.floor(str.length / 2))
// }
// console.log(findMiddleIndex("Example string 12345"))

// //1.c. Make a function that uses slice() and the other functions you've written to return the first half of the string
// const firstHalfOfString = (str) => {
//     return (str.slice(0, (str.length / 2))) 
// }
// console.log(firstHalfOfString('This is the first half of an example string!'))

//1.d. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
// const  upperCaseFirstLowerSecond = (str) => {
//     return str.slice(0, Math.floor(str.length / 2)).toUpperCase() + str.slice((str.length / 2)).toLowerCase()
// }
// console.log(upperCaseFirstLowerSecond('hi EVERY1 im NEW!!!!!!! *holds up spork* my name is katy but u can call me t3h PeNgU1N oF d00m!!!!!!!! lol'))