const arr = [ 2, 5, 3, 3, 35, 38 ];

const addSub10 = arr.map(num => {
    if(num <= 10){
         num += 10
     } else {
         num -= 10
     }

})

console.log( num )

// function myFunc(...items){
//     let myArr = items;
//     return myArr;
// }
// console.log(myFunc(1, 2, 3, 4, 5))
// import React from 'react';

// const App = (props) => {
//     return (
//             <h1>Name: { {props.name} } </h1>
//             <p>Age: { {props.age} } </p>
//     )
// }
// export default App