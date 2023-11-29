let select = document.querySelector(".select")
let input = document.querySelector(".input")

select.addEventListener("change", e => {
    let inputValue = e.target.value

    if(inputValue == "uz"){
        input.value = "+998"
    } else if(inputValue == "ru"){
        input.value = "+7"
    }else if(inputValue == "af"){
        input.value = "+93"
    }else if(inputValue == "to"){
        input.value = "+992"
    }else if(inputValue == "eng"){
        input.value = "+1"
    }else if(inputValue == "hin"){
        input.value = "+92"
    }else if(inputValue == "Fr"){
        input.value = "+33"
    }else if(inputValue == "ar"){
        input.value = "+54"
    }else if(inputValue == "ka"){
        input.value = "+1"
    }else if(inputValue == "uk"){
        input.value = "+380"
    }

})