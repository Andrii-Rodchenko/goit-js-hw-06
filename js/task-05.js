
const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output")
}

const handleNameInput = () => {
    refs.span.textContent = refs.input.value;
    if (refs.input.value === "") {
    refs.span.textContent = "Anonymous"

    }
}

refs.input.addEventListener("input", handleNameInput)