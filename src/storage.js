import Task from "./task.js";
import Project from "./project.js";

//get DOMstuff module the projectList when load page
let projectList = getProjectList();
export { projectList };

//projectList to json string then add to localStorage
export default function updateStorage() {
  localStorage.projectList = JSON.stringify(projectList);
}

function getProjectList() {
  const projectList = [];

  if (localStorage.projectList) {
    for (let project of JSON.parse(localStorage.projectList)) {
      const projectObject = new Project(project.name);
      for (let task of project.tasks) {
        const taskObject = new Task(
          task.name,
          task.description,
          task.dueDate,
          task.priority
        );
        projectObject.addTask(taskObject);
      }
      projectList.push(projectObject);
    }
  } else {
    //add default project if local storage is empty
    projectList.push(new Project("Default"));
  }

  return projectList;
}