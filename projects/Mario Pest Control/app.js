let killForm = document.killForm

killForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let goom = parseInt(killForm.goombaKill.value) * 5
    let cheep = parseInt(killForm.cheepKill.value) * 7
    let bobomb = parseInt(killForm.bobombKill.value) * 11

    let coinTotal = goom + cheep + bobomb

    document.getElementById('coinResult').innerText = `You would owe us ${coinTotal} coins for this baddie removal.`
})