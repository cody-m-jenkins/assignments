//Preliminary 1.

    // for (let i = 0; i < 10; i++)

    // console.log(i)



//Preliminary 2.

    // for (let i = 9; i >= 0; i--)

    // console.log(i)



//Preliminary 3.

    // let fruit = ['banana', 'orange', 'apple', 'kiwi']

    // for (let i = 0; i < fruit.length; i++)

    // console.log(fruit[i])


//Bronze 1.

    // let emptyArray = []

    // for (let i = 0; i < 10; i++){

    // emptyArray.push(i)
    // }
    // console.log(emptyArray)


//Bronze 2.

    // for (let i = 0; i <= 100; i += 2)

    // console.log(i)


//Bronze 3. 

    // let fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

    // let emptyArray = []

    // for (let i = 0; i < fruit.length; i+=2){

    // emptyArray.push(fruit[i])
    // }
    // console.log(emptyArray)


//Silver 1. 

    // var peopleArray = [
    //     {
    //     name: "Harrison Ford",
    //     occupation: "Actor"
    //     },
    //     {
    //     name: "Justin Bieber",
    //     occupation: "Singer"
    //     },
    //     {
    //     name: "Vladimir Putin",
    //     occupation: "Politician"
    //     },
    //     {
    //     name: "Oprah",
    //     occupation: "Entertainer"
    //     }
    // ]

    // for (let i = 0; i < peopleArray.length; i++)

    // console.log(peopleArray[i].name)


//Silver 2. 

    // let emptyNamesArray = []
    // let emptyOccupationArray = []

    // let peopleArray = [
    //     {
    //     name: "Harrison Ford",
    //     occupation: "Actor"
    //     },
    //     {
    //     name: "Justin Bieber",
    //     occupation: "Singer"
    //     },
    //     {
    //     name: "Vladimir Putin",
    //     occupation: "Politician"
    //     },
    //     {
    //     name: "Oprah",
    //     occupation: "Entertainer"
    //     }
    // ]

    // for (let i = 0; i < peopleArray.length; i++) {
    //     emptyNamesArray.push(peopleArray[i].name)
    //     emptyOccupationArray.push(peopleArray[i].occupation)
    // }
    // console.log(emptyNamesArray)
    // console.log(emptyOccupationArray)


//Silver 3.

    let emptyNamesArray = []
    let emptyOccupationArray = []

    let peopleArray = [
        {
        name: "Harrison Ford",
        occupation: "Actor"
        },
        {
        name: "Justin Bieber",
        occupation: "Singer"
        },
        {
        name: "Vladimir Putin",
        occupation: "Politician"
        },
        {
        name: "Oprah",
        occupation: "Entertainer"
        }
    ]

    for (let i = 0; i < peopleArray.length; i+=2) {
        emptyNamesArray.push(peopleArray[i].name)
    }

    for (let i = 1; i < peopleArray.length; i+=2) {
        emptyOccupationArray.push(peopleArray[i].occupation)
    }
    console.log(emptyNamesArray)
    console.log(emptyOccupationArray)


   

