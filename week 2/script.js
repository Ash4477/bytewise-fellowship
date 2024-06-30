let itemNumberTracker = 1;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputData = document.querySelector("#input-task").value;
        if (inputData == 0) {
            return;
        }

        const taskList = document.querySelector(".task-list>ul");
        const taskItem = document.createElement("li");
        const taskInput = document.createElement("input");
        const taskLabel = document.createElement("label");

        taskInput.setAttribute("type", "checkbox");
        taskInput.setAttribute("id", `item-${itemNumberTracker}`);

        taskLabel.setAttribute("for", `item-${itemNumberTracker}`);
        taskLabel.textContent = inputData.trim();

        taskItem.appendChild(taskInput);
        taskItem.appendChild(taskLabel);

        taskList.appendChild(taskItem);

        document.querySelector("#input-task").value = '';

    }
});

function setBtnActive(btn) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        if (button === btn) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
}

const showAllBtn = document.querySelector("nav > ul > li:first-child > button");
const showPendingBtn = document.querySelector("nav > ul > li:nth-child(2) > button");
const showCompletedBtn = document.querySelector("nav > ul > li:last-child > button");
const clearAllBtn = document.querySelector(".orange-btn");

showAllBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-list li");
    setBtnActive(showAllBtn);
    tasks.forEach(task => {
        if (task.classList.contains("hidden")) {
            task.classList.remove("hidden");
        }
    });
});

showPendingBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-list li");
    setBtnActive(showPendingBtn);
    tasks.forEach(task => {
        const checkbox = task.querySelector("input");
        if (!checkbox.checked) {
            task.classList.add("hidden");
        }
        else {
            task.classList.remove("hidden");
        }
    });
});

showCompletedBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-list li");
    setBtnActive(showCompletedBtn);
    tasks.forEach(task => {
        const checkbox = task.querySelector("input");
        if (checkbox.checked) {
            task.classList.add("hidden");
        }
        else {
            task.classList.remove("hidden");
        }
    });
});

clearAllBtn.addEventListener("click", () => {
    const taskList = document.querySelector(".task-list ul");
    taskList.innerHTML = '';
});
