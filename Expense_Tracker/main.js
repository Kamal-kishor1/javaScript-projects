const inputProduct = document.getElementById("input-product");
const userBudget = document.getElementById("input-budget");
const inputAmount = document.getElementById("input-amount");
const setBudgetBtn = document.querySelector(".setbudget");
const checkExpenseBtn = document.querySelector(".checkamount");
const totalAmount = document.querySelector(".head1");
const totalExpense = document.querySelector(".head2");
const totalBalance = document.querySelector(".head3");

totalExpense.lastElementChild.innerText = 0;

setBudgetBtn.addEventListener("click", () => {
    let totalBudget = userBudget.value;
    if (totalBudget === "") {
        alert(`This field cannot be empty?`);
    } else if (totalBudget <= 100) {
        alert("And your budget cannot be less than 99");
    }
    else {
        totalAmount.lastElementChild.innerText = totalBudget;
        userBudget.value = "";
    }
});


checkExpenseBtn.addEventListener("click", () => {
    let totalCost = totalAmount.lastElementChild.innerText;
    if (totalCost != "") {
        let userProduct = inputProduct.value;
        let userVal = inputAmount.value;
        checkAmount(totalCost, userVal);
        expensesList(userProduct, userVal);
    }
    else {
        alert("First set your budget please!");
    }
});

const expensesList = (userProduct, userVal) => {
    const contentFlex = document.querySelector(".content-flex");

    let checkList = document.createElement("div");
    checkList.className = "flex-checklist";
    contentFlex.append(checkList);

    let vBar = document.createElement("div");
    vBar.className = "verticalebar";
    checkList.append(vBar);

    let pName = document.createElement("p");
    pName.id = "pname";
    checkList.append(pName);
    pName.innerText = userProduct;

    let pCost = document.createElement("p");
    pCost.id = "pcost";
    checkList.append(pCost);
    pCost.innerText = userVal;

    let editBtn = document.createElement("div");
    editBtn.className = "edit-btn";
    checkList.append(editBtn);

    let editIcon = document.createElement("i");
    editIcon.className = "fa fa-edit";
    editIcon.ariaHidden = "true";
    editBtn.append(editIcon);

    let deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";
    checkList.append(deleteBtn);

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";
    deleteIcon.ariaHidden = "true";
    deleteBtn.append(deleteIcon);

    // console.log(checkList);
};



const checkAmount = (totalCost, userVal) => {

    if (userVal === "") {
        alert("Please also enter the cost!");
    } else {
        let expense = parseInt(userVal);
        let sum = parseInt(totalExpense.lastElementChild.innerText) + expense;
        console.log(sum);
        totalExpense.lastElementChild.innerText = sum;
        const Balance = totalCost - sum;
        console.log(Balance);
        totalBalance.lastElementChild.innerText = Balance;

        inputProduct.value = "";
        inputAmount.value = "";
    }
};
