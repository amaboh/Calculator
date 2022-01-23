
let sumEL = document.getElementById("sum-el")

let num1;
let num2;

function getSumi (){
    num1 = document.getElementById("num1-el").value
    num2 = document.getElementById("num2-el").value

}

// getNum = () =>{
//     let num1 = parseFloat( document.getElementById("num1-el").value)
//     let num2 = parseFloat( document.getElementById("num2-el").value)
//     return{num1, num2}

// }

function addition(){
    getSumi()
    const sum = num1 + num2
    sumEL.textcontent = `Result: ${sum}`
}

const minus = () =>{
    getSumi()
    const sum = num1 - num2
    sumEL.textcontent = `Result  ${sum}`
}

const divide = () =>{
    getSumi()
    const sum =  num1 / num2 
    sumEL.textContent = `Result: ${sum}`
} 

const multiply = () =>{
    getSumi()
    const sum = num1 * num2
    sumEL.textcontent = `Result ${sum}`
}