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
        checkAmount();
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

    editFunc(editIcon, pName, pCost);
    deleteFunc(deleteIcon, pCost, checkList);

    // console.log(checkList);
};



const checkAmount = () => {
    let userProduct = inputProduct.value;
    let userVal = inputAmount.value;
    let totalCost = totalAmount.lastElementChild.innerText;
    if (!userVal || !userProduct) {
        alert("Please fill the entry!");
    } else {
        let expense = parseInt(userVal);
        let sum = parseInt(totalExpense.lastElementChild.innerText) + expense;
        // console.log(sum);
        totalExpense.lastElementChild.innerText = sum;
        const Balance = totalCost - sum;
        // console.log(Balance);
        totalBalance.lastElementChild.innerText = Balance;

        expensesList(userProduct, userVal);
        inputProduct.value = "";
        inputAmount.value = "";
    }

};


const editFunc = (editIcon, pName, pCost) => {
    editIcon.addEventListener("click", () => {
        let parentDiv = pName.parentElement;
        let oldName = pName.innerText;
        let oldUserCost = pCost.innerText;
        let oldBalance = parseInt(totalBalance.lastElementChild.innerText);
        let oldExpense = totalExpense.lastElementChild.innerText;
        totalExpense.lastElementChild.innerText = oldExpense - oldUserCost;
        totalBalance.lastElementChild.innerText = oldBalance + parseInt(oldUserCost);
        inputProduct.value = oldName;
        inputAmount.value = oldUserCost;
        parentDiv.remove();
    });
};

const deleteFunc = (deleteIcon, pCost, checkList) => {
    deleteIcon.addEventListener("click", () => {
        const userDeletedAmount = pCost.innerText;
        let tExpense = totalExpense.lastElementChild.innerText;
        let newExpense = tExpense - userDeletedAmount;
        totalExpense.lastElementChild.innerText = newExpense;

        let tBalance = parseInt(totalBalance.lastElementChild.innerText);
        let newBalance = tBalance + parseInt(userDeletedAmount);
        totalBalance.lastElementChild.innerText = newBalance;

        checkList.remove();

        // console.log(userDeletedAmount);
        // console.log(tExpense);
        // console.log(newExpense);
        // console.log(tBalance);
        // console.log(newBalance);
    });
};