import Task from "./task.js";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskName) {
    if (this.tasks.some((task) => task.name === taskName)) {
      alert("The task name must be unique in the project");
      return;
    }

    const task = new Task(taskName);
    console.log("Add", task);

    this.tasks.push(task);
  }

  removeTask(taskName) {
    const removedTask = this.tasks.find(task => task.name === taskName);
    console.log("Remove", removedTask);

    this.task = this.tasks.filter((task) => task.name !== taskName);
  }
}
