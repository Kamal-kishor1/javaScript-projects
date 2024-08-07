const btn = document.querySelector("form .btn");
let inputBox = document.querySelector("form .input-text");
const container = document.querySelector(".container");
let topDiv = document.querySelector(".topdiv");
let taskContainer = document.querySelector(".task-container");


taskContainer.addEventListener('DOMSubtreeModified', () => {
    if (taskContainer.scrollHeight > taskContainer.offsetHeight) {
        taskContainer.style.overflow = 'auto';
    } else {
        taskContainer.style.overflow = 'hidden';
    }
});

// window.onscroll = ()=>{
//     todoList.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// }


btn.addEventListener("click", () => {
    let val = inputBox.value;
    addElement(val);
    inputBox.value = "";
});

const addElement = (val) => {

    if (val) {
        elementCreation(val);
    }
    else {
        val = alert("Your task is empty");
        // inputText.setAttribute("required","");
    }
};


const elementCreation = (val) => {
    // div element is created here
    const todoList = document.createElement("div");
    // class name is given to the div
    todoList.className = "todo-list";
    // now it is added to the task-container
    taskContainer.append(todoList);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkbox";
    todoList.append(checkBox);

    const task = document.createElement("p");
    task.id = "task";
    task.innerText = val;
    todoList.append(task);

    const deleteBtn = document.createElement("div");
    // either use classList or use this todoList.id = "name" or node.className = "name"
    deleteBtn.classList.add("delete");
    todoList.append(deleteBtn);

    const icon = document.createElement("i");
    icon.className = "fa fa-trash";
    icon.setAttribute("aria-hidden", "true");
    deleteBtn.append(icon);

    icon.addEventListener("click", () => {
        // console.log("removed");
        removeTask(todoList);
    })

};

const removeTask = (evt) => {
    if (window.confirm('Are you sure you want to delete this?')) {
        evt.remove();
    }
};