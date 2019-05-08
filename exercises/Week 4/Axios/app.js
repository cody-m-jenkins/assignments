axios.get('https://api.vschool.io/cody/todo/').then((response) => {
    displayTodos(response.data)
})

function displayTodos(todos){
  todos.forEach((todo)=>{
    let parentDiv = document.createElement('div')
    let titleH2 = document.createElement('h2')
    titleH2.innerText = todo.title
    parentDiv.appendChild(titleH2)
    document.getElementById('main').appendChild(parentDiv)
  })
}