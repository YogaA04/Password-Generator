let passLength = document.getElementById("passLength")
let pass = document.getElementById("pass")
let saveBtn = document.getElementById("saveBtn")

let inlineCheckbox1 = document.getElementById('inlineCheckbox1')
let inlineCheckbox2 = document.getElementById('inlineCheckbox2')
let inlineCheckbox3 = document.getElementById('inlineCheckbox3')
let inlineCheckbox4 = document.getElementById('inlineCheckbox4')

const lowerAlphabet = "abcdefghijklmnopqsrtuvwxyz"
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "0123456789"
const symbol = "!@#$%^&*()_-=+{}[]';:/?.>,<~`"
let data = ''

inlineCheckbox1.addEventListener('click', () => {
    if (inlineCheckbox1.checked) {
        data += lowerAlphabet
    } else {
        let ganti = data.replace(lowerAlphabet, '')
        data = ganti
    }
})

inlineCheckbox2.addEventListener('click', () => {
    if (inlineCheckbox2.checked) {
        data += upperAlphabet
    } else {
        let ganti = data.replace(upperAlphabet, '')
        data = ganti
    }
})

inlineCheckbox3.addEventListener('click', () => {
    if (inlineCheckbox3.checked) {
        data += numeric
    } else {
        let ganti = data.replace(numeric, '')
        data = ganti
    }
})

inlineCheckbox4.addEventListener('click', () => {
    if (inlineCheckbox4.checked) {
        data += symbol
    } else {
        let ganti = data.replace(symbol, '')
        data = ganti
    }
})
function generatePass(len) {
    console.log(data)
    if (data == '') {
        alert("Determine the contents of the password you want to create!")
    } else {
        let generator = '';
        for (let i = 0; i < len; i++) {
            generator += data[Math.floor(Math.random() * data.length)];
        }
        return generator;
    }
}

const getPass = () => {
    const newPass = generatePass(passLength.value)
    pass.value = newPass
}

function savePass() {
    if (pass.value == 'undefined') {
        alert('password has not been created yet!')
    } else {
        const fileName = prompt('Name of the file you want to save?') + '.txt'
        saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`My Password: ${pass.value}`))
        saveBtn.setAttribute('download', fileName)
    }
}
