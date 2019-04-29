let form = document.travel

form.addEventListener('submit', function(e){
    e.preventDefault()

    let firstName = form.firstname.value

    let lastName = form.lastname.value

    let age = form.age.value

    let gender = form.gender.value

    const travelTo = form.travelto.value

    const dietConst = form.diet
        const dietArray = []
        for (let i = 0; i < dietConst.length; i++){
            if(dietConst[i].checked){
                dietArray.push(dietConst[i].value)
            }
        }

    let bigReturn = `First name: ${firstName}\nLast name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination(s): ${travelTo}\nDietary restrictions: ${dietArray}`
    // console.log(dietArray)
    alert(bigReturn)
})