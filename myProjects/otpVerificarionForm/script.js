const inputs = document.querySelector("input"),
button = document.querySelector("button");

inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e)=>{

const currentInput = input,
nextInput = input.nextElementSibling,
prevInput = input.previousElementSibling;

if(currentInput.value.length > 1){
    currentInput.value = "";
    return;
}

if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !==""){
    nextInput.removeAttribute("disabled");
    nextInput.focus();
}
}

)

}

)