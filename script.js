var c = false 

function clicker () {
    let element = document.getElementById('barra')
    let menu = document.getElementById('menu')
    let secLogin = document.getElementById('secLogin')
    if (element.getAttribute('class')=='close') {
        element.setAttribute('class', 'show')
        element.style.visibility = 'visible'
        secLogin.style.display = 'none'
        menu.style.border = '1px solid white'
    } else {
        element.setAttribute('class', 'close')
        menu.style.border = 'none'
        secLogin.style.display = 'block'
    }
}

function clickLogin () {
    var elementUser = document.getElementById('textId').value
    var elementPass = Number(document.getElementById('passwordId').value )
    if (elementUser == 'Braz' && elementPass == 123456) {
        alert('Logado!')
    } else {alert('Conta inválida!')}
}