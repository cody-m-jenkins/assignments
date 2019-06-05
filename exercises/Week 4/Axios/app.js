let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/cody/todo/').then((response) => {
todoList.push(...response.data)  
displayTodos(response.data)
})

function displayTodos(todos, updated) {
  if(updated){
    document.getElementById('main').innerHTML = ''
  }

  todos.forEach((todo) => {

    let parentDiv = document.createElement('div')
    let titleH2 = document.createElement('h2')
    let descP = document.createElement('p')
    let imgUrl = document.createElement('img')
    let deleteBtn = document.createElement('button')
    let checkBox = document.createElement('input')

    parentDiv.setAttribute('class', 'todoBox')
    checkBox.setAttribute('type', 'checkbox')
     
    titleH2.innerText = todo.title
    descP.innerText = todo.description
    deleteBtn.innerText = 'Delete'

    document.getElementById('main').appendChild(parentDiv)

    checkBox.addEventListener('click', function () {
      checkTodo(todo)
     axios.get('https://api.vschool.io/cody/todo/').then(res => {
       todoList = res.data
     })
    })
    if (todo.completed){
      checkBox.checked = true
      parentDiv.style.textDecoration = 'line-through'
    } else {
      parentDiv.style.textDecoration = 'none'
    }
  

    deleteBtn.addEventListener('click', function(){
      parentDiv.style.display='none'
      axios.delete(`https://api.vschool.io/cody/todo/${todo._id}`)
    })
 
    parentDiv.appendChild(titleH2) 
    parentDiv.appendChild(descP)
    parentDiv.appendChild(imgUrl)
    parentDiv.appendChild(checkBox)
    parentDiv.appendChild(deleteBtn)

    if (todo.imgUrl !== undefined) {
      imgUrl.setAttribute('src', todo.imgUrl)
      
    }
  })
}
const checkTodo = oldTodo => {
  axios.put(`https://api.vschool.io/cody/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
    const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
   displayTodos(newList, true)
  })
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  let title = form.title.value
  let price = form.price.value
  let description = form.description.value
  let imgUrl = form.imageurl.value

  let newObject = {
    title,
    price,
    description,
    imgUrl,
  }
  postTodo(newObject)
})

const postTodo = (newTodo) => {
  axios.post('https://api.vschool.io/cody/todo/', newTodo).then((response) => {
    todoList.push(response.data)
    displayTodos([response.data])
  })
}