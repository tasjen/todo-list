import Project from "./project.js";
import Task from "./task.js";
import DOMstuff, { changeTabTo } from "./DOMstuff.js";
import projectList from "./storage.js";

const defaultProject = new Project("Default");
const project1 = new Project("project1");
const project2 = new Project("project2");
const project3 = new Project("project3");

defaultProject.addTask(new Task("task", "project", new Date(), 3));

project1.addTask(new Task("11", "456", new Date(), 1));
project1.addTask(new Task("111", "456", new Date(), 2));
project1.addTask(new Task("1111", "456", new Date(), 3));

project2.addTask(new Task("22", "456", new Date(), 1));
project2.addTask(new Task("222", "456", new Date(), 1));
project2.addTask(new Task("2222", "456", new Date(), 1));

project3.addTask(new Task("33", "456", new Date(), 3));
project3.addTask(new Task("333", "456", new Date(), 3));
project3.addTask(new Task("3333", "456", new Date(), 3));

projectList.push(defaultProject);
projectList.push(project1);
projectList.push(project2);
projectList.push(project3);

DOMstuff.loadProjectList();
document.querySelector(".project:first-child").click();

const today_task = document.querySelector("#today-task");
today_task.addEventListener("click", () => {
  changeTabTo(today_task, DOMstuff.loadTodayTasks);
});

const this_week_task = document.querySelector("#this-week-task");
this_week_task.addEventListener("click", () => {
  changeTabTo(this_week_task, DOMstuff.loadThisWeekTasks);
});
