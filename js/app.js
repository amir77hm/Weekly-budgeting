// variables
let budget,
    totalAmount = 0

const form = document.querySelector('#add-expense')

// eventListeners
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit)
    form.addEventListener('submit', getExpense)
}
// function

function appInit() {

    // get validate budget
    while (!budget) {
        budget = parseInt(prompt('بودجه هفتگی را وارد کنید :'))
    }

    // add budget to doc
    addBudgetToDom(budget)
}

// add total budget to dom
function addBudgetToDom(budget) {

    // add budget
    const div = document.querySelector('#total')
    div.innerHTML = budget

}

// get data from form
function getExpense(e) {

    // for no reload the page
    e.preventDefault();

    let expense = form.querySelector('#expense').value,
        amount = form.querySelector('#amount').value

    totalAmount += parseInt(amount)

    // check amount not bigger than budget
    if (totalAmount <= budget) {
        // add elements to dom
        addLiToDom(expense, amount)
        generateRemainingBudget(amount, totalAmount)
    } else {
        alert('بودجه شما محدود است.')
    }
}

function addLiToDom(expense, amount) {

    // add exepense and amount
    let li = document.querySelector('#expenses')
    li.innerHTML += `
        <li>${expense}  :  ${amount}</li>
    `
}

function generateRemainingBudget(amount, totalAmount) {

    const div = document.querySelector('#left'),
        restanteDiv = document.querySelector('.restante')

    // show remaining money 
    let restante = budget - totalAmount
    div.innerHTML = restante

    // generate color of div
    if (totalAmount >= budget * .5) {
        restanteDiv.style.backgroundColor = 'orange'
    }
    if (totalAmount > budget * 0.75) {
        restanteDiv.style.backgroundColor = 'red'
    } 
}