// function stringifyUrl(url, query) {
//    return `${url}?color=${query.color}&species=${query.species}`
// }

// const url = "http://localhost:8080/monkeys"
// const query = {
//     color: "black",
//     species: "howler"
// }

// console.log(stringifyUrl(url, query))

const url = "http://localhost:8080/monkeys?color=black&species=howler"

const query = {
    color: '',
    species: ''
}

function unstringifyUrl(url, query){
     let newquery = url.split()
}

console.log(unstringifyUrl(url, query))