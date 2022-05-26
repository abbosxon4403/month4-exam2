import UserObjCReator from './newUserInfos.js'
import render from './render.js'
let formik = document.getElementById('form')

let first_name = document.getElementById('name')
let last_name = document.getElementById('last-name')
let father_name = document.getElementById('father_name')
let isAccept = document.getElementById('select')
let list = document.querySelector('list')

let storage = window.localStorage
let getFromStorage = storage.getItem('data')
let data;

if (getFromStorage) {
    data = JSON.parse(getFromStorage)
} else {
    data = []
}

console.log(storage);

formik.addEventListener('submit', function(event) {
    event.preventDefault();

    if (first_name.value.trim() == '') {
        alert('pls fill')
        return
    }

    let newUserSObject = new UserObjCReator(
        first_name.value,
        last_name.value,
        father_name.value,
        isAccept.value
    )

    data.push(newUserSObject)
    storage.setItem("data", JSON.stringify(data))

    render(list, data)

    first_name.value = ''
    last_name.value = ''
    father_name.value = ''
    isAccept.value = ''
})

render(list, data)