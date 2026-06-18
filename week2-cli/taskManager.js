const { readTasks, writeTasks } = require('./fileHelper');

const addTask = (title) => {
  const tasks = readTasks();

  const newTask = {
    id: tasks.length + 1,
    title,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log(`Task added: "${title}"`);
};

const listTasks = () => {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log('No tasks yet.');
    return;
  }

  tasks.forEach(task => {
    console.log(`[${task.id}] ${task.title} - ${task.createdAt}`);
  });
};

const deleteTask = (id) => {
  const tasks = readTasks();

  const updatedTasks = tasks.filter(
    task => task.id !== Number(id)
  );

  writeTasks(updatedTasks);

  console.log(`Task ${id} deleted.`);
};

module.exports = {
  addTask,
  listTasks,
  deleteTask
};