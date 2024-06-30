// For Input

let itemNumberTracker = 1;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputData = document.querySelector("#input-task").value;
        if (inputData == 0) {
            return;
        }

        const taskList = document.querySelector(".task-list>ul");
        const taskItem = document.createElement("li");
        const taskSpan = document.createElement("span");
        const taskInput = document.createElement("input");
        const taskLabel = document.createElement("label");
        const taskBtn = document.createElement("button");

        taskInput.setAttribute("type", "checkbox");
        taskInput.setAttribute("id", `item-${itemNumberTracker}`);

        taskLabel.setAttribute("for", `item-${itemNumberTracker}`);
        taskLabel.textContent = inputData.trim();

        itemNumberTracker++;

        taskSpan.appendChild(taskInput);
        taskSpan.appendChild(taskLabel);

        taskBtn.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;

        taskItem.setAttribute("draggable", "true");
        taskItem.classList.add("draggable");
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(taskBtn);

        taskList.appendChild(taskItem);

        document.querySelector("#input-task").value = '';
        

        // For dragging effect

        taskItem.addEventListener("dragstart", () => {
            taskItem.classList.add("dragging");
        });
    
        taskItem.addEventListener("dragend", () => {
            taskItem.classList.remove("dragging");
        });

        taskList.addEventListener("dragover", e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(taskList, e.clientY);
            const currDraggable = document.querySelector(".dragging");
            if (afterElement == null) {
                taskList.appendChild(currDraggable);
            }
            else {
                taskList.insertBefore(currDraggable, afterElement);
            }
            
        });
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top  - (box.height / 2);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        }
        else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// For Nav Buttons

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
        if (checkbox.checked) {
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
        if (!checkbox.checked) {
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