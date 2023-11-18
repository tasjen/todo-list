import Task from "./task.js";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskName, description, dueDate) {
    if (this.tasks.some((task) => task.name === taskName)) {
      alert("Task name must be unique");
      return;
    }
    
    this.tasks.push(new Task(taskName, description, dueDate));
  }

  removeTask(taskName) {
    const removedTask = this.tasks.find(task => task.name === taskName);
    console.log("Remove", removedTask);

    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}
