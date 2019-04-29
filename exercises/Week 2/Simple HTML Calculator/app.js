let addForm = document.Addition

addForm.addEventListener('submit', function(e){
    e.preventDefault()

    let add1 = parseInt(addForm.add1.value)
    let add2 = parseInt(addForm.add2.value)

    let sum = (add1 + add2)
 
    document.getElementById('addresult').innerText=sum
})

let subForm = document.Subtraction

subForm.addEventListener('submit', function(e){
    e.preventDefault()

    let sub1 = parseInt(subForm.sub1.value)
    let sub2 = parseInt(subForm.sub2.value)

    let difference = (sub1 - sub2)
 
    document.getElementById('subresult').innerText=difference
})

let mulForm = document.Multiplication

mulForm.addEventListener('submit', function(e){
    e.preventDefault()

    let fac1 = parseInt(mulForm.fac1.value)
    let fac2 = parseInt(mulForm.fac2.value)

    let difference = (fac1 * fac2)
 
    document.getElementById('mulresult').innerText=difference
})