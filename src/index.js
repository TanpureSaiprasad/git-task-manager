const { addTask, listTasks, completeTask, deleteTask, clearTasks } = require('./taskManager');

// process.argv contains the command line arguments
// process.argv[0] is the path to node
// process.argv[1] is the path to the script being run (index.js)
// process.argv[2] is the first custom argument we pass (e.g., 'add', 'list')
const command = process.argv[2];

// Join everything after the command to allow space-separated task titles
const argument = process.argv.slice(3).join(' ');

switch (command) {
    case 'add':
        addTask(argument);
        break;
    case 'list':
        listTasks();
        break;
    case 'complete':
        completeTask(argument);
        break;
    case 'delete':
        deleteTask(argument);
        break;
    case 'clear':
        clearTasks();
        break;
    default:
        console.log('\n--- 🦄 Unicorn Task Manager 🦄 ---');
        console.log('Usage:');
        console.log('  node src/index.js add "<task name>"    - Add a new task');
        console.log('  node src/index.js list                 - List all tasks');
        console.log('  node src/index.js complete <task_id>   - Mark a task as completed');
        console.log('  node src/index.js delete <task_id>     - Delete a task');
        console.log('  node src/index.js clear                - Clear all tasks');
        console.log('----------------------------\n');
}
