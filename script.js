document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    function addTask(taskText = null, save = true) {
        const text = taskText || taskInput.value.trim();
        if (text === "") {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = text;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
            removeTask(text);
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        if (!taskText) {
            taskInput.value = '';
        }

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
