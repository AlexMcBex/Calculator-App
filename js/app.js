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
const screen = document.querySelector(".screen")
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
let operation = []

////// DEFINE FUNCTIONS /////////////
    //push values in screen (key pressed)
//numkeys
numKeys.forEach(i =>{
    i.onclick = (e) =>{
        screen.value += i.textContent
    }
})
//reset -> empty screen
//equal -> 
    //change format in math operation
    //solve it
    //push value in screen
//delete -> pop last character from screen


/////// EVENTS ///////
//keys.onclick