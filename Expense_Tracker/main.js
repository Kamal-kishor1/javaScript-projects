const inputProduct = document.getElementById("input-product");
const inputBudget = document.getElementById("input-budget");
const inputAmount = document.getElementById("input-amount");
const setBudgetBtn = document.querySelector(".setbudget");
const checkExpenseBtn = document.querySelector(".checkamount");
const tAmount = document.querySelector(".head1");


setBudgetBtn.addEventListener("click", () => {
    let budgetVal = inputBudget.value;
    if (budgetVal === "") {
        alert(`This field cannot be empty?`);
    } else if (budgetVal <= 100) {
        alert("And your budget cannot be less than 99");
    }
    else {
        tAmount.lastElementChild.innerText = budgetVal;
        inputBudget.value = "";
    }
});


checkExpenseBtn.addEventListener("click", () => {
    if (tAmount.lastElementChild.innerText != "") {
        let productName = inputProduct.value;
        let productVal = inputAmount.value;
        console.log(productName, productVal);
    }
    else {
        alert("First set your budget please!");
    }
})


