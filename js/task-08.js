
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;
    

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены");
    }
    
    const formОbject = {
    }
    
    formОbject[event.currentTarget.elements.email.name] = event.currentTarget.elements.email.value
    formОbject[event.currentTarget.elements.password.name] = event.currentTarget.elements.password.value
    console.log(formОbject)

    event.currentTarget.reset();

}




