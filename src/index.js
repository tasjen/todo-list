import Project from "./project.js";
import loadProjectList from "./DOMstuff.js";
import updateStorage, { projectList } from "./storage.js";

//add default project if local storage is empty
if (projectList.length === 0) {
  const defaultProject = new Project("Default");
  projectList.push(defaultProject);
}

loadProjectList();
updateStorage();
