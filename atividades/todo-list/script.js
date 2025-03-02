const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList =  document.querySelector(".taskList");
const taskToggleButton = document.querySelector("#taskToggleButton");
const progressBar = document.querySelector('.progressBar');
const progressText = document.querySelector('.progressText');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const listItem = document.createElement('li');
    addTask(listItem);
})

taskToggleButton.addEventListener('click', () =>{
    const vetorDeLi = Array.from(taskList.children);

    if(taskToggleButton.dataset.action ==="hide"){
        vetorDeLi.forEach((li) =>{
            const checkbox = li.querySelector('input');
    
            if(checkbox.checked){
                li.style.display = "none";
            }   
        })

        taskToggleButton.dataset.action = "show";
        taskToggleButton.textContent = "Mostrar tarefas";
    } else{
        vetorDeLi.forEach((li) =>{
            const checkbox = li.querySelector('input');
    
            if(checkbox.checked && li.style.display == "none"){
                li.style.display = "flex";
            }   
        })
        taskToggleButton.dataset.action = "hide";
        taskToggleButton.textContent = "Ocultar concluídas";
    }
    
})

const addTask = (listItem, task) => { //MODULARIZAÇÃO
    const taskDesc = task ? task.text : taskInput.value;

    const taskSpan = document.createElement('span');
    const taskFormInput = document.createElement('input');
    const taskEditButton  = document.createElement('button');
    const taskDeleteButton = document.createElement('button');

    taskFormInput.checked = task?.done;

    taskFormInput.addEventListener('change', () => {
        updateProgressBar();
    })

    taskEditButton.addEventListener('click', (event)=>{
        const novaTarefa = prompt( `Insira a nova descrição da tarefa ${taskDesc}`, taskSpan.textContent);

        if(novaTarefa == null){
            return;
        }
        const tarefaFormatada = novaTarefa.trim();

        if(tarefaFormatada != ''){
            taskSpan.textContent = tarefaFormatada;
            updateProgressBar();
        }
    })

    taskDeleteButton.addEventListener('click', (event)=>{
        const confirmacao = confirm("Deseja prosseguir com a exclusão?");
        if(confirmacao){
            taskList.removeChild(listItem);
        }
        updateProgressBar();
    })

    listItem.classList.add('taskItem');
    taskFormInput.type = "checkbox";

    taskEditButton.innerHTML = "&#9998;";
    taskDeleteButton.innerHTML = "&#128465;";

    taskSpan.textContent = taskDesc;

    listItem.appendChild(taskFormInput);
    listItem.appendChild(taskSpan);
    listItem.appendChild(taskEditButton);
    listItem.appendChild(taskDeleteButton);
    updateProgressBar();

    taskList.appendChild(listItem);
    
}

const updateProgressBar = () => {
    const taskLength = Array.from(taskList.children).length;
    const doneArray = [...taskList.children].filter((li) => li.querySelector('input').checked);
    const doneLength = doneArray.length;
    const percentual = taskLength > 0 ? doneLength / taskLength * 100 : 0;
    progressBar.style.width = `${percentual}%`;
    progressText.textContent = `${doneLength}/${taskLength} concluídos (${percentual.toFixed(1)}%)`;
    saveTasks();
}

const saveTasks = () =>{
    const tasks = [...taskList.children].map((li) => {
        const isChecked = li.querySelector('input').checked;
        const spanText = li.querySelector('span').textContent;
        const newJson = {
            text: spanText,
            done: isChecked
        }
        return newJson;
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");
    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        addTask(listItem, task);
    })
}

window.addEventListener('load', () => {
    getTasks();
})