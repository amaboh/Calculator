
let resultEl = document.getElementById("result-el")

let num1; 
let num2;  

 getSumi = () => {
    num1 = parseFloat(document.getElementById("num1-el").value)
    num2 = parseFloat(document.getElementById("num2-el").value)

}

// getNum = () =>{
//     let num1 = parseFloat( document.getElementById("num1-el").value)
//     let num2 = parseFloat( document.getElementById("num2-el").value)
//     return{num1, num2}

// }

function addition(){
    getSumi()
    const result = num1 + num2
    console.log(result)
    resultEl.innerHTML = `Result: ${result.toFixed(4)}`
}

function minus(){
    getSumi()
    const result = num1 - num2
    resultEl.innerHTML = `Result  ${result.toFixed(4)}`
}

function divide (){
    getSumi()
    const result =  num1 / num2 
    resultEl.innerHTML = `Result: ${result.toFixed(4)}`
} 

function multiply (){
    getSumi()
    const result = num1 * num2
    resultEl.innerHTML = `Result ${result.toFixed(4)}`
}