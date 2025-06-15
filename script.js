document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');

    function addTask() {
        var taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }
        else {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add = "remove-btn";
            removeButton.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);

            taskInput.value = ''; 
        }
    }

    addButton.addEventListener('click', addTask);

    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })
    document.addEventListener('DOMContentLoaded', addTask)
    

});