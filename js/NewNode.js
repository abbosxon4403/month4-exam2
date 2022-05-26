export default function({ first_name, last_name, father_name, isAccept }) {
    let template = document.getElementById('template')
    let newtemplate = template.content.cloneNode(true)

    newtemplate.querySelector('.name').textContent = first_name
    newtemplate.querySelector('.last-name').textContent = last_name
    newtemplate.querySelector('.father-name').textContent = father_name
    newtemplate.querySelector('.is-accept').textContent = isAccept

    return newtemplate
}