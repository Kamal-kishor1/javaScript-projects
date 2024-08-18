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
    let tCost = tAmount.lastElementChild.innerText;
    if (tCost != "") {
        let productName = inputProduct.value;
        let productVal = inputAmount.value;
        checkAmount(tCost, productName, productVal);
        // expensesList(productName, productVal);
        // inputProduct.value = "";
        // inputAmount.value = "";
    }
    else {
        alert("First set your budget please!");
    }
});

const expensesList = (productName, productVal) => {
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
    pName.innerText = productName;

    let pCost = document.createElement("p");
    pCost.id = "pcost";
    checkList.append(pCost);
    pCost.innerText = productVal;

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

const checkAmount = (tCost, productName, productVal) => {
    let expenses = 0;
    expenses += productVal;
    if (productVal === "") {
        alert("Please also enter the cost!");
    } else {
        let balance = tCost - expenses;
        let balHead = document.querySelector(".head3");
        balHead.lastElementChild.innerText = balance;
        if (balance >= tCost) {
            alert("You have reached your limit!");
            return balance;
        }
        expensesList(productName, productVal);

    }
};
