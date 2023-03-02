///// IMPORT ELEMENTS FROM HTML////////
//import calculator shell
//import calc screen
//import number buttons
//import operation buttons
//delete button
// plus 
//minus
//multiply
//divide
//reset
//equal
//decimal .

/////DEFINE VARIABLES////////////
//calc text box
const screen = document.querySelector("#screen-input")
//calc keys
//numkeys
const numKeys = document.querySelectorAll("[data-key]")
//dotkey
const dotKey = document.querySelector("[data-dot]")
//divide
const divKey = document.querySelector("[data-divide]")
//multiply
const multKey = document.querySelector("[data-multiply]")
//plus
const plusKey = document.querySelector("[data-plus]")
//minus
const minusKey = document.querySelector("[data-minus]")
//equal
const equalKey = document.querySelector("[data-equal]")
//dele
const delKey = document.querySelector("[data-delete]")
//reset
const resetKey = document.querySelector("[data-reset]")

//input value
let inputValue = []

////// DEFINE FUNCTIONS /////////////
//push values in screen (key pressed)
//numkeys
numKeys.forEach(i => {
    i.onclick = (e) => {
        // console.log(e.target.textContent)
        // console.log(i)
        // console.log(Number(screen.value))
        if (Number(screen.value) === 0 && Number(i.textContent) > 0) {
            screen.value = i.textContent
        } else {
            screen.value += i.textContent
        }
        inputValue.push(i.textContent)
        console.log(inputValue)
    }
})
//PROBLEM: numbers can be repeated, operations cannot
//SOLUTION, operations and dot, can only be input if they follow a number
//AKA the screen is not empty
const inputOp = (key) =>{
    if(Number(screen.value.slice(-1)) >= 0 && screen.value !== ""){
        screen.value += key.textContent
        if(key == multKey){
            inputValue.push(key.value)
        }else{
            inputValue.push(key.textContent)
        }
    }
    console.log(inputValue)
}
//dot key
dotKey.onclick= () =>{
    inputOp(dotKey)
}
//operations keys
plusKey.onclick= () =>{
    inputOp(plusKey)
}
minusKey.onclick= () =>{
    inputOp(minusKey)
}
multKey.onclick= () =>{
    inputOp(multKey)
}
divKey.onclick= () =>{
    inputOp(divKey)
}
//reset -> empty screen
    //and value
resetKey.onclick = () =>{
    screen.value = ""
    inputValue = []
    console.log(inputValue)
}
//delete -> pop last character from screen
delKey.onclick = () =>{
    inputValue.pop()
    screen.value = inputValue.join("")
    console.log(inputValue)
}
//equal -> 
    //change format in math operation
    //solve it
    //push result in screen.value
    //pass result in inputvalue for next operation
    equalKey.onclick = () =>{
        screen.value = eval(inputValue.join(""))
        inputValue= []
        inputValue.push(screen.value)
        console.log(inputValue)
    }



