import Task from "./task.js";
import Project from "./project.js";

//get projectList when load page
let projectList = getProjectList();

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
          new Date(task.dueDate),
          +task.priority
        );
        projectObject.addTask(taskObject);
      }
      projectList.push(projectObject);
    }
  }

  return projectList;
}

export { projectList, getProjectList };
