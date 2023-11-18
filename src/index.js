import Project from './project.js';
import DOMstuff from './DOMstuff.js';

const projectList = [];
const project1 = new Project('project1');
project1.addTask('123','456', (new Date()).toLocaleDateString());
project1.addTask('1233','456', (new Date()).toLocaleDateString());
project1.addTask('12333','456', (new Date()).toLocaleDateString());
projectList.push(project1);

DOMstuff.loadTaskList(project1);