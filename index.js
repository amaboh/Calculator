let num1 = 8
let num2 =  4
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL =document.getElementById("sum-el")

const addition = () =>{
    const sum = (num1 + num2)
    sumEL.textcontent = "Sum: " + sum
}

const minus = () =>{
    const minus = (num1 * num2 - num1)
    
}