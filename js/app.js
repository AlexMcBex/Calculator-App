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
//// numkeys
const numKeys = document.querySelectorAll("[data-key]")
//// dotkey
const dotKey = document.querySelector("[data-dot]")
//// divide
const divKey = document.querySelector("[data-divide]")
//// multiply
const multKey = document.querySelector("[data-multiply]")
//// plus
const plusKey = document.querySelector("[data-plus]")
//// minus
const minusKey = document.querySelector("[data-minus]")
//// equal
const equalKey = document.querySelector("[data-equal]")
//// dele
const delKey = document.querySelector("[data-delete]")
//// reset
const resetKey = document.querySelector("[data-reset]")

//input value
let inputValue = []


//THEME TOGGLE VARIABLES
//Root 
const root = document.querySelector(":root")
//toggle switch
////clickable area
const toggleBody = document.querySelector(".theme-toggle-body")
////switch line
const toggleLine = document.querySelector(".theme-toggle-line")
////round switch
const toggleSwitch = document.querySelector(".theme-switch")

//Themes color palettes
let themes= [
    //theme selector : 1
    {currentTheme : 1},
    {
        name: "theme-1",
        colors: {
            mainBackground: "hsl(222, 26%, 31%)",
            headerText: "hsl(0, 0%, 100%)",
            screen: "hsl(224, 36%, 15%)",
            screenText: "hsl(0, 0%, 100%)",
            calcBody: "hsl(223, 31%, 20%)",
            whiteBtnBody: "hsl(30, 25%, 89%)",
            whiteBtnText: "hsl(221, 14%, 31%)",
            whiteBtnShadow: "hsl(28, 16%, 65%)",
            blueBtnBody: "hsl(225, 21%, 49%)",
            blueBtnText: "hsl(0, 0%, 100%)",
            blueBtnShadow: "hsl(224, 28%, 35%)",
            redBtnBody: "hsl(6, 63%, 50%)",
            redBtnText: "hsl(0, 0%, 100%)",
            redBtnShadow: "hsl(6, 70%, 34%)"
        }
    },
    {
        name: "theme-2",
        colors: {
            mainBackground: "hsl(0, 0%, 90%)",
            headerText: "hsl(60, 10%, 19%)",
            screen: "hsl(0, 0%, 93%)",
            screenText: "hsl(60, 10%, 19%)",
            calcBody: "hsl(0, 5%, 81%)",
            whiteBtnBody: "hsl(45, 7%, 89%)",
            whiteBtnText: "hsl(60, 10%, 19%)",
            whiteBtnShadow: "hsl(28, 16%, 65%)",
            blueBtnBody: "hsl(185, 42%, 37%)",
            blueBtnText: "hsl(0, 0%, 100%)",
            blueBtnShadow: "hsl(35, 11%, 61%)",
            redBtnBody: "hsl(25, 98%, 40%)",
            redBtnText: "hsl(0, 0%, 100%)",
            redBtnShadow: "hsl(25, 99%, 27%)"
        }
    },
    {
        name: "theme-3",
        colors: {
            mainBackground: "hsl(268, 75%, 9%)",
            headerText: "hsl(52, 100%, 62%)",
            screen: "hsl(268, 71%, 12%)",
            screenText: "hsl(52, 100%, 62%)",
            calcBody: "hsl(268, 71%, 12%)",
            whiteBtnBody: "hsl(268, 47%, 21%)",
            whiteBtnText: "hsl(52, 100%, 62%)",
            whiteBtnShadow: "hsl(290, 70%, 36%)",
            blueBtnBody: "hsl(281, 89%, 26%)",
            blueBtnText: "hsl(0, 0%, 100%)",
            blueBtnShadow: "hsl(285, 91%, 52%)",
            redBtnBody: "hsl(176, 100%, 44%)",
            redBtnText: "hsl(198, 20%, 13%)",
            redBtnShadow: "hsl(177, 92%, 70%)"
        }
    }
]


////// DEFINE FUNCTIONS /////////////
//push values in screen (key pressed)
//numkeys
numKeys.forEach(i => {
    i.onclick = (e) => {
        // console.log(e.target.textContent)
        // console.log(i)
        // console.log(Number(screen.value))
        if (Number(screen.value) === 0 && Number(i.textContent) > 0 && screen.value.length < 1) {
            screen.value = i.textContent
            screen.value = screen.value.toLocaleString("en-US")
        } else {
            screen.value += i.textContent
            screen.value = screen.value.toLocaleString("en-US")
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
        screen.value = eval(inputValue.join("")).toLocaleString("en-US")
        inputValue= []
        inputValue.push(Number(screen.value.replaceAll(',', '')))
        console.log(inputValue)
    }

////////SWTICH THEME

//change position of swithc
const moveSwitch = () =>{
    if (themes[0].currentTheme >= 1 && themes[0].currentTheme <3){
        themes[0].currentTheme +=  1
    }else{
        themes[0].currentTheme = 1
    }
    toggleSwitch.className = `${themes[themes[0].currentTheme].name}`
}


//set root elements to colors in theme selected
const changeTheme = () =>{
    root.style.setProperty(
        "--main-background", themes[themes[0].currentTheme].colors.mainBackground
    );
    root.style.setProperty(
        "--header-text", themes[themes[0].currentTheme].colors.headerText
    );
    root.style.setProperty(
        "--screen", themes[themes[0].currentTheme].colors.screen
    );
    root.style.setProperty(
        "--screen-text", themes[themes[0].currentTheme].colors.screenText
    );
    root.style.setProperty(
        "--calc-body", themes[themes[0].currentTheme].colors.calcBody
    );
    root.style.setProperty(
        "--white-btn-body", themes[themes[0].currentTheme].colors.whiteBtnBody
    );
    root.style.setProperty(
        "--white-btn-text", themes[themes[0].currentTheme].colors.whiteBtnText
    );
    root.style.setProperty(
        "--white-btn-shadow", themes[themes[0].currentTheme].colors.whiteBtnShadow
    );
    root.style.setProperty(
        "--blue-btn-body", themes[themes[0].currentTheme].colors.blueBtnBody
    );
    root.style.setProperty(
        "--blue-btn-text", themes[themes[0].currentTheme].colors.blueBtnText
    );
    root.style.setProperty(
        "--blue-btn-shadow", themes[themes[0].currentTheme].colors.blueBtnShadow
    );
    root.style.setProperty(
        "--red-btn-body", themes[themes[0].currentTheme].colors.redBtnBody
    );
    root.style.setProperty(
        "--red-btn-text", themes[themes[0].currentTheme].colors.redBtnText
    );
    root.style.setProperty(
        "--red-btn-shadow", themes[themes[0].currentTheme].colors.redBtnShadow
    );
}

toggleBody.onclick = () =>{
    moveSwitch();
    changeTheme()
    console.log(themes[themes[0].currentTheme])
}