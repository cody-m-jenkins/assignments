// 1. Make an array of numbers that are doubles of the first array
// const arr = [2, 5, 100] 

// const doubleArr = arr.map(arrNum => {
//     return arrNum * 2
// })

// console.log(doubleArr)
//1.1 -- More practice
// const practiceArray = [21, 23, 13, 87]

// const halfFunc = practiceArray.map(el => {
//     return el / 2
// })

// console.log (halfFunc)

// 1.2 -- Even more practice
// const airplaneArr = ['Cessna', 'Piper', 'Learjet', 'Diamond']

// const planeStringer = airplaneArr.map(plane => {
//     return plane + ' is an airplane manufacturer.'
// })
// console.log(planeStringer)

// 2. Take an array of numbers and make them strings
// const arr = [2, 5, 100]

// const stringItUp = arr.map(el => {
//     return String(el) 
//     //change to string
// }) 
// console.log(stringItUp)

// 3. Capitalize only the first letter each of an array of names
//  ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const capitalizeNames = (arr) => arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4. Make an array of strings of the names
// const namesOnly = (arr) => arr.map(person => person.name)
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5.If you're over 21 you can go to the Matrix.

//   const makeStrings = (arr) => arr.map(person => person.age >=21 ? `${person.name} can go to the Matrix` : `${person.name} cannot go to the Matrix`)
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
 
// 6. Put the names of the array in <h1></h1> and the ages in <h2></h2>
const readyToPutInTheDOM = (arr) => arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)

  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]