const { readTasks, writeTasks } = require('./storage');

// Adds a new task to our list
function addTask(title) {
    if (!title || title.trim() === '') {
        console.error('Error: Task title cannot be empty.');
        return;
    }
    const tasks = readTasks();
    const newTask = {
        id: Date.now(), // Generate a unique ID using current timestamp
        title: title.trim(),
        completed: false
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Added: "${newTask.title}" (ID: ${newTask.id})`);
}

// Lists all current tasks
function listTasks() {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log('No tasks found. Your list is empty!');
        return;
    }
    console.log('\n--- 📋 Current Tasks ---');
    tasks.forEach((task, index) => {
        const status = task.completed ? '[✔] (Completed)' : '[ ] (Pending)';
        console.log(`${index + 1}. ${status} - ${task.title} (ID: ${task.id})`);
    });
    console.log('------------------------\n');
}

// Marks a task as completed by its ID
function completeTask(id) {
    const tasks = readTasks();
    // Convert id parameter to a number since Date.now() is a number
    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        console.error(`Error: Task with ID ${id} not found.`);
        return;
    }

    task.completed = true;
    writeTasks(tasks);
    console.log(`Marked complete: "${task.title}"`);
}

// Deletes a task by its ID
function deleteTask(id) {
    let tasks = readTasks();
    const originalLength = tasks.length;
    tasks = tasks.filter(t => t.id !== Number(id));

    if (tasks.length === originalLength) {
        console.error(`Error: Task with ID ${id} not found.`);
        return;
    }

    writeTasks(tasks);
    console.log(`Deleted task with ID: ${id}`);
}

module.exports = {
    addTask,
    listTasks,
    completeTask,
    deleteTask
};
