import Project from './project.js';
import Task from './task.js';
import DOMstuff from './DOMstuff.js';

const projectList = [];
const project1 = new Project('project1');
const project2 = new Project('project2');
const project3 = new Project('project3');
project1.addTask(new Task('11','456', new Date()));
project1.addTask(new Task('111','456', new Date()));
project1.addTask(new Task('1111','456', new Date()));

project2.addTask(new Task('22','456', new Date()));
project2.addTask(new Task('222','456', new Date()));
project2.addTask(new Task('2222','456', new Date()));

project3.addTask(new Task('33','456', new Date()));
project3.addTask(new Task('333','456', new Date()));
project3.addTask(new Task('3333','456', new Date()));

projectList.push(project1);
projectList.push(project2);
projectList.push(project3);


DOMstuff.loadProjectList(projectList);