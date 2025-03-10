let tasks = [];

function addTask(id, name) {
    tasks.push({ id, name });
    console.log(`Added: ${name}`);
}

function viewTasks() {
    console.log(tasks);
}

function updateTask(id, newName) {
    let task = tasks.find(t => t.id === id);
    if (task) task.name = newName;
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example usage
addTask(1, "Cudillo Gwapo");
addTask(2, "Go to Gym");
viewTasks();

updateTask(1, "Cudillo Gwapo");
viewTasks();

deleteTask(2);
viewTasks();
