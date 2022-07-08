let numInput = document.querySelector("#numSpace")
let income = document.querySelector(".num1")
let expense = document.querySelector(".num2")
let button = document.querySelector("#btn")
let txtInput = document.querySelector("#txtSpace")
let ul = document.querySelector("#ul")
let balance = document.querySelector("#balance")

button.addEventListener("click",()=>{
    if (numInput.value >= 0) {
        income.innerText = `N${income.innerText.substr(1)*1 + Number(numInput.value)}`
    } else if (numInput.value < 0) {
        expense.innerText = `N${expense.innerText.substr(1)*1 - Number(numInput.value)}`
    }

     balance.innerText = income.innerText.substr(1) - expense.innerText.substr(1)

    if (numInput.value >= 0) {
        let li = document.createElement('li')
        li.innerText = txtInput.value
        li.className = "green"
        let span = document.createElement("span")
        span.textContent = `+N${numInput.value}` 
        li.appendChild(span)
        ul.appendChild(li)
        numInput.value = ""
        txtInput.value =""
    } else if (numInput.value < 0) {
        let li = document.createElement('li')
        li.innerText = txtInput.value
        li.className = "Red"
        let span = document.createElement("span")
        span.textContent = `-${numInput.value.replace('-', 'N')}` 
        li.appendChild(span)
        ul.appendChild(li)
        numInput.value = ""
        txtInput.value = ""
    } else {
        return "Invalid input"
    }
})