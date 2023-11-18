export default class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priodity = priority;
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
  setPriodity(newPriority) {
    this.priority = newPriority;
  }
}
