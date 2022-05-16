const inputRefs = document.querySelector("#font-size-control")
const spanRefs = document.querySelector("#text")

const handleInputFontSize = () => {
  
  spanRefs.style.fontSize = inputRefs.value + "px"


}

inputRefs.addEventListener("input", handleInputFontSize )

