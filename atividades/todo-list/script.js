const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList =  document.querySelector(".taskList");

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDesc = taskInput.value;

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    const taskFormInput = document.createElement('input');
    const taskEditButton  = document.createElement('button');
    const taskDeleteButton = document.createElement('button');

    listItem.classList.add('taskItem');
    taskFormInput.type = "checkbox";

    taskEditButton.innerHTML = "&#9998;";
    taskDeleteButton.innerHTML = "&#128465;";

    taskSpan.textContent = taskDesc;

    listItem.appendChild(taskFormInput);
    listItem.appendChild(taskSpan);
    listItem.appendChild(taskEditButton);
    listItem.appendChild(taskDeleteButton);

    taskList.appendChild(listItem);

})