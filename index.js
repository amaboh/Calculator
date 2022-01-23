
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

const addition= () =>{
    getSumi()
    const result = num1 + num2
    console.log(result)
    resultEl.textcontent = `Result: ${result.toFixed(4)}`
}

const minus = () =>{
    getSumi()
    const result = num1 - num2
    resultEl.textcontent = `Result  ${result.toFixed(4)}`
}

const divide = () =>{
    getSumi()
    const result =  num1 / num2 
    resultEl.textContent = `Result: ${result.toFixed(4)}`
} 

const multiply = () =>{
    getSumi()
    const result = num1 * num2
    resultEl.textcontent = `Result ${result.toFixed(4)}`
}