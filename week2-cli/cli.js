const { addTask, listTasks, deleteTask } = require('./taskManager');

const [,, command, argument] = process.argv;

switch (command) {
  case 'add':
    if (!argument) {
      console.error('Usage: node cli.js add "Task title"');
      break;
    }
    addTask(argument);
    break;

  case 'list':
    listTasks();
    break;

  case 'delete':
    if (!argument) {
      console.error('Usage: node cli.js delete <id>');
      break;
    }
    deleteTask(argument);
    break;

  default:
    console.log('Commands: add "title" | list | delete <id>');
}