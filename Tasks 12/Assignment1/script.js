let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let addBtn = document.getElementById("addBtn");

// Load tasks from localStorage
window.onload = () => {
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(text => addTask(text));
};

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li span").forEach(item => {
        tasks.push(item.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.onclick = () => {
    if (taskInput.value.trim() === "") return;
    addTask(taskInput.value);
    taskInput.value = "";
    saveTasks();
};

function addTask(text) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = text;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
        let newText = prompt("Edit Task:", span.innerText);
        if (newText) span.innerText = newText;
        saveTasks();
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
}
