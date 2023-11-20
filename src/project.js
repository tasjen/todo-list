export default class Project {

  constructor(name) {
    this.name = name; //string
    this.tasks = new Array(); //array
  }

  getName() {
    return this.name;
  }
  getTasks() {
    return this.tasks;
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskObject) { 
    this.getTasks().push(taskObject);
  }

  removeTask(taskObject) {
    this.getTasks().splice(this.getTasks().indexOf(taskObject), 1);
  }
}
