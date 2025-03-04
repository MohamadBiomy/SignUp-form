let inputs = document.querySelectorAll(".inputs div input")
let emailInput = document.querySelector(".inputs div.email input")
let button = document.querySelector(".inputs button")
let re = /\w+@\w+\.\w+/g

button.addEventListener("click", (e) => checkIfInputNotEmpty(inputs, e))
button.addEventListener("keypress", (e) => e.key === "Enter" ? checkIfInputNotEmpty(inputs, e) : "")

function checkIfInputNotEmpty(inputsList, event) {
  inputsList.forEach((ele) => {
    if (ele.value === "") {
      ele.parentElement.classList.add("error")
    } 
  })
  event.preventDefault()
} 

inputs.forEach((ele) => {
  ele.onfocus = () => {
    ele.parentElement.classList.remove("error")
    ele.parentElement.classList.remove("not-valid")
  }
})

button.addEventListener("click", function (e) {
  
  if (emailInput.value !== "") {
    if (!re.test(emailInput.value)) {
      emailInput.parentElement.classList.add("not-valid")
    }
  }

  e.preventDefault()
})

console.log(emailInput)