// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="deleteTask">❌</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteTask")) {
            e.target.parentElement.remove();
        }
    });
});
