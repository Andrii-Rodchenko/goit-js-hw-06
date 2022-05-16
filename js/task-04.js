
const refs = {
    counter: document.querySelector("#value"),
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]')
    
}

let counterValue = 0;
console.log("🚀 ~ file: task-04.js ~ line 3 ~ counterValue", counterValue )

const handleDecrementButtonClik = () => { 
    refs.counter.textContent = counterValue -= 1 ;
}
const handleIncrementButtonClik = () => {
    refs.counter.textContent = counterValue += 1;
}


refs.btnDecrement.addEventListener("click", handleDecrementButtonClik );
refs.btnIncrement.addEventListener("click", handleIncrementButtonClik )
