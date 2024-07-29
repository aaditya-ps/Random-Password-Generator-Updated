let displayField = document.getElementById("displayfield")

let slider = document.getElementById("slider")

let sliderValue = document.getElementById("slidervalue")

let lowercase = document.getElementById("checkbox1")
let uppercase = document.getElementById("checkbox2")
let symbols = document.getElementById("checkbox3")
let nombers = document.getElementById("checkbox4")
let button = document.getElementById("button")

let copyBtn = document.getElementById("copy")

sliderValue.textContent= slider.value

slider.addEventListener('input', ()=>{
    sliderValue.textContent= slider.value
})

button.addEventListener("click", ()=>{
    displayField.value = generateFxn()
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let lowerChars= "abcdefghijklmnopqrstuvwxyz"

let symbools = "!@#$%^&*()~_+=?<>"

let numbers = "1234567890"


function generateFxn(){

    let password = ""

    let allChar = ""

    allChar += lowercase.checked  ? lowerChars : ""

    allChar += uppercase.checked  ? upperChars : ""

    allChar += symbols.checked  ? symbools : ""

    allChar += nombers.checked  ? numbers : ""


    let i=1

    while(i<=slider.value){
        password+= allChar.charAt(Math.floor(Math.random() * allChar.length))
        i++
    }


    return password


}

copyBtn.addEventListener("click", ()=>{

    navigator.clipboard.writeText(displayField.value) // Copy the text inside the text field

    alert("Copied the text: " + displayField.value) // Alert the copied text

})


  
  