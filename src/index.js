import Project from "./project.js";
import Task from "./task.js";
import DOMstuff from "./DOMstuff.js";
import updateStorage, { projectList } from "./storage.js";
import { addDays } from "date-fns";

if (localStorage.length === 0) {

  const defaultProject = new Project("Default");

  const project1 = new Project("project1");
  const project2 = new Project("project2");
  const project3 = new Project("project3");

  defaultProject.addTask(new Task("task", "project", new Date(), 3));

  project1.addTask(new Task("11", "456", addDays(new Date(), 1), 1));
  project1.addTask(new Task("111", "456", addDays(new Date(), 2), 2));
  project1.addTask(new Task("1111", "456", addDays(new Date(), 3), 3));

  project2.addTask(new Task("22", "456", addDays(new Date(), 4), 1));
  project2.addTask(new Task("222", "456", addDays(new Date(), 5), 1));
  project2.addTask(new Task("2222", "456", addDays(new Date(), 6), 1));

  project3.addTask(new Task("33", "456", addDays(new Date(), 7), 3));
  project3.addTask(new Task("333", "456", addDays(new Date(), 8), 3));
  project3.addTask(new Task("3333", "456", addDays(new Date(), 9), 3));

  projectList.push(defaultProject);
  projectList.push(project1);
  projectList.push(project2);
  projectList.push(project3);
}

DOMstuff.loadProjectList();
document.querySelector(".project:first-child").click();
console.log(projectList);
updateStorage();
