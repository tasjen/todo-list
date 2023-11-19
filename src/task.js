export default class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name; //string
    this.description = description; // string
    this.dueDate = dueDate; //Date
    this.priority = priority; //number 1,2,3
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
  setPriority(newPriority) {
    this.priority = newPriority;
  }
}
