import NewNode from "./NewNode.js";

export default function(where, data) {
    let frg = document.createDocumentFragment()

    data.forEach((user) => {
        let newElem = NewNode(user)
        frg.append(newElem)
    });

    console.log(frg);
    where.innerHTML = ''
    where.append(frg)

}