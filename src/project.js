import Task from "./task.js";

export default class Project {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.tasks = [];
  }

  setName(newName) {
    this.name = newName;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  addTask(name, description, dueDate) {
    if (dueDate > this.dueDate) {
      alert("The task's due date must not be after the project's due date.");
      return;
    }
    if (this.tasks.some((task) => task.name === name)) {
      alert("The task name must be unique in the project");
      return;
    }

    const task = new Task(name, description, dueDate);
    console.log("Add", task);

    this.tasks.push(task);
  }

  removeTask(taskName) {
    const removedTask = this.tasks.find(task => task.name === taskName);
    console.log("Remove", removedTask);
    
    this.task = this.tasks.filter((task) => task.name !== taskName);
  }
}
