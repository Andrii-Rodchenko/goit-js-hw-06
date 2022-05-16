const inputRefs = document.querySelector('input[data-length="6"]')


const handleInputCharacters = () => {
    if (inputRefs.value.length === Number(inputRefs.dataset.length)) {
        inputRefs.classList.add("valid") 
        inputRefs.classList.remove("invalid")
        return
    }
    console.log(Number(inputRefs.dataset.length))
    console.log(inputRefs.value.length)
    console.log("🚀 ~ file: task-06.js ~ line 6 ~ handleInputCharacters ~ inputRefs.value.length === Number(inputRefs.dataset.length)", inputRefs.value.length === Number(inputRefs.dataset.length))
    inputRefs.classList.remove("valid")
    inputRefs.classList.add("invalid")
}

inputRefs.addEventListener("blur", handleInputCharacters)

    