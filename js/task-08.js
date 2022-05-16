
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;
    

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены");
    }
    
    const formData = new FormData(event.currentTarget)

    let formОbject = {
    }
     formData.forEach((value, name) => {
         return formОbject[name] = value;
    } )
    console.log(formОbject)

     event.currentTarget.reset();

}




