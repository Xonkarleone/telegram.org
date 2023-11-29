let elForm = document.querySelector(".form")
let inp = document.querySelector(".input")
let chat = document.querySelector(".chat")

elForm.addEventListener("submit", e => {
    e.preventDefault()
        let inpValue = inp.value

        chat.innerHTML = chat.innerHTML + `<h3>${inpValue}</h3> <br>`

        inp.value = null
    })       
