const fs = require('fs');
const path = require('path');

// This is where our tasks will be saved on your hard drive
const FILE_PATH = path.join(__dirname, '../tasks.json');

// Reads tasks from the tasks.json file
function readTasks() {
    if (!fs.existsSync(FILE_PATH)) {
        return []; // If the file doesn't exist yet, return an empty list
    }
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tasks file, returning empty list:', error.message);
        return [];
    }
}

// Writes tasks to the tasks.json file
function writeTasks(tasks) {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving tasks file:', error.message);
    }
}

module.exports = {
    readTasks,
    writeTasks
};
