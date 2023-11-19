import Project from "./project.js";
import Task from "./task.js";
import projectList from "./storage.js";
import { isSameDay, isSameWeek } from "date-fns";

export default class DOMstuff {
  static loadTodayTasks() {
    clearMainSection();
    changeTabNameTo("Today");
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let projectObject of projectList) {
      for (let taskObject of projectObject.tasks) {
        if (isSameDay(taskObject.dueDate, new Date())) {
          const today_task = createTaskDOM(taskObject, projectObject);
          today_task.querySelector(
            ".task-name"
          ).textContent += ` (${projectObject.name})`;
          task_list.appendChild(today_task);
        }
      }
    }
    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);
  }

  static loadThisWeekTasks() {
    clearMainSection();
    changeTabNameTo("This week");
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let projectObject of projectList) {
      for (let taskObject of projectObject.tasks) {
        if (isSameWeek(taskObject.dueDate, new Date())) {
          const this_week_task = createTaskDOM(taskObject, projectObject);
          this_week_task.querySelector(
            ".task-name"
          ).textContent += ` (${projectObject.name})`;
          task_list.appendChild(this_week_task);
        }
      }
    }
    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);
  }

  static loadProjectList() {
    //render project list
    const project_list = document.querySelector("#project-list");
    for (let projectObject of projectList) {
      const project = createProjectDOM(projectObject);
      project_list.appendChild(project);
    }

    //render project adder
    project_list.insertAdjacentElement("afterend", createProjectAdder());
  }

  static loadTaskList(projectObject) {
    clearMainSection();
    changeTabNameTo(projectObject.name);

    //render project's tasks
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let taskObject of projectObject.tasks) {
      const task = createTaskDOM(taskObject, projectObject);
      task_list.appendChild(task);
    }
    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);

    //render task adder
    main_section.appendChild(createTaskAdder(projectObject));
  }
}

function clearMainSection() {
  const main_section = document.querySelector("#main-section");

  //remove every element from main section except page header (tab name)
  while (main_section.childElementCount > 1) {
    main_section.removeChild(main_section.lastChild);
  }
}

function changeTabNameTo(tabName) {
  document.querySelector("#tab-name").textContent = tabName;
}

function createTaskDOM(taskObject, projectObject) {
  const task = document.createElement("li");
  task.classList.add("task");

  const task_name = document.createElement("p");
  task_name.classList.add("task-name");
  task_name.textContent = taskObject.name;

  const priority = document.createElement("p");
  priority.classList.add("priority");
  priority.textContent = ["★", "★ ★", "★ ★ ★"][taskObject.priority - 1];

  const description = document.createElement("button");
  description.classList.add("description");
  description.textContent = "description";
  //Add description event listener

  const due_date = document.createElement("p");
  due_date.classList.add("due-date");
  due_date.textContent = taskObject.dueDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.textContent = "Edit";
  //Add edit event listener

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "remove";
  remove.addEventListener("click", () => {
    task.parentElement.removeChild(task);
    projectObject.removeTask(taskObject.name);
    checkEmptyTaskMessage();
  });

  task.appendChild(task_name);
  task.appendChild(priority);
  task.appendChild(description);
  task.appendChild(due_date);
  task.appendChild(edit);
  task.appendChild(remove);

  return task;
}

function createProjectDOM(projectObject) {
  const project = document.createElement("li");
  project.classList.add("project");
  project.textContent = projectObject.name;

  project.addEventListener("click", () => {
    changeTabTo(project, DOMstuff.loadTaskList, projectObject);
  });
  return project;
}

function createTaskAdder(projectObject) {
  const task_adder = document.createElement("div");
  task_adder.id = "task-adder";

  const add_task_button = document.createElement("button");
  add_task_button.id = "add-task";
  add_task_button.textContent = "+ Add task";
  add_task_button.addEventListener("click", () => {
    add_task_button.classList.add("hide");
    add_task_form.classList.remove("hide");
    name_input.focus();
  });

  const add_task_form = document.createElement("form");
  add_task_form.id = "task-form";
  add_task_form.classList.add("hide");

  const name_input = document.createElement("input");
  name_input.type = "text";
  name_input.id = "name";
  name_input.placeholder = "Task name";
  name_input.required = true;
  name_input.autofocus = true;
  const description_input = document.createElement("textarea");
  description_input.id = "description";
  description_input.placeholder = "Task description";
  description_input.required = true;
  const date_input = document.createElement("input");
  date_input.type = "date";
  date_input.id = "date";
  date_input.required = true;

  const low_radio = document.createElement("input");
  low_radio.type = "radio";
  low_radio.name = "priority";
  low_radio.id = "low";
  low_radio.value = 1;
  low_radio.required = true;
  const medium_radio = document.createElement("input");
  medium_radio.type = "radio";
  medium_radio.name = "priority";
  medium_radio.id = "medium";
  medium_radio.value = 2;
  const high_radio = document.createElement("input");
  high_radio.type = "radio";
  high_radio.name = "priority";
  high_radio.id = "high";
  high_radio.value = 3;

  const low_radio_label = document.createElement("label");
  low_radio_label.htmlFor = "low";
  low_radio_label.textContent = "Low";
  const medium_radio_label = document.createElement("label");
  medium_radio_label.htmlFor = "medium";
  medium_radio_label.textContent = "Medium";
  const high_radio_label = document.createElement("label");
  high_radio_label.htmlFor = "high";
  high_radio_label.textContent = "High";

  const priority_input_container = document.createElement("div");
  priority_input_container.appendChild(low_radio);
  priority_input_container.appendChild(low_radio_label);
  priority_input_container.appendChild(medium_radio);
  priority_input_container.appendChild(medium_radio_label);
  priority_input_container.appendChild(high_radio);
  priority_input_container.appendChild(high_radio_label);

  const confirm_button = document.createElement("button");
  confirm_button.type = "submit";
  confirm_button.id = "confirm-task";
  confirm_button.textContent = "Add";
  const cancel_button = document.createElement("button");
  cancel_button.type = "button";
  cancel_button.id = "cancel-task";
  cancel_button.textContent = "Cancel";

  add_task_form.addEventListener("submit", (event) => {
    //check unique task name in a project
    event.preventDefault();
    if (projectObject.tasks.some((task) => task.name === name_input.value)) {
      alert("Task name must be unique");
      return;
    }

    //add new task to the project object
    const newTaskObject = new Task(
      name_input.value,
      description_input.value,
      new Date(date_input.value),
      +Array.from(document.querySelectorAll("input[name='priority']")).find(
        (radio) => radio.checked === true
      ).value //get the checked value(priority) from all radio buttons
    );
    projectObject.addTask(newTaskObject);

    //add new task to the DOM
    const newTaskDOM = createTaskDOM(newTaskObject, projectObject);
    document.querySelector("#task-list").appendChild(newTaskDOM);

    checkEmptyTaskMessage();
    resetTaskAdder(projectObject);
  });

  cancel_button.addEventListener("click", () => {
    resetTaskAdder(projectObject);
  });

  add_task_form.appendChild(name_input);
  add_task_form.appendChild(description_input);
  add_task_form.appendChild(date_input);
  add_task_form.appendChild(priority_input_container);
  add_task_form.appendChild(confirm_button);
  add_task_form.appendChild(cancel_button);

  task_adder.appendChild(add_task_button);
  task_adder.appendChild(add_task_form);

  return task_adder;
}

function createProjectAdder() {
  const project_adder = document.createElement("div");
  project_adder.id = "project-adder";

  const add_project_button = document.createElement("button");
  add_project_button.id = "add-project";
  add_project_button.textContent = "+ Add project";
  add_project_button.addEventListener("click", () => {
    add_project_button.classList.add("hide");
    add_project_form.classList.remove("hide");
    name_input.focus();
  });

  const add_project_form = document.createElement("form");
  add_project_form.id = "project-form";
  add_project_form.classList.add("hide");

  const name_input = document.createElement("input");
  name_input.type = "text";
  name_input.id = "name";
  name_input.placeholder = "Task name";
  name_input.required = true;
  const confirm_button = document.createElement("button");
  confirm_button.type = "submit";
  confirm_button.id = "confirm-project";
  confirm_button.textContent = "Add";
  const cancel_button = document.createElement("button");
  cancel_button.type = "button";
  cancel_button.id = "cancel-project";
  cancel_button.textContent = "Cancel";

  add_project_form.addEventListener("submit", (event) => {
    event.preventDefault();
    //check unique project name
    if (projectList.some((project) => project.name === name_input.value)) {
      alert("Project name must be unique");
      return;
    }

    const newProjectObject = new Project(name_input.value);
    projectList.push(newProjectObject);

    const newProjectDOM = createProjectDOM(newProjectObject);
    document.querySelector("#project-list").appendChild(newProjectDOM);

    resetProjectAdder();
  });

  cancel_button.addEventListener("click", () => {
    resetProjectAdder();
  });

  add_project_form.appendChild(name_input);
  add_project_form.appendChild(confirm_button);
  add_project_form.appendChild(cancel_button);

  project_adder.appendChild(add_project_button);
  project_adder.appendChild(add_project_form);

  return project_adder;
}

function resetTaskAdder(projectObject) {
  //remove task adder from the DOM
  const task_adder = document.querySelector("#task-adder");
  task_adder.parentElement.removeChild(task_adder);

  //create and add task adder to the DOM
  const main_section = document.querySelector("#main-section");
  main_section.appendChild(createTaskAdder(projectObject));
}

function resetProjectAdder() {
  //remove project adder from the DOM
  const project_adder = document.querySelector("#project-adder");
  project_adder.parentElement.removeChild(project_adder);

  //create and add project adder to the DOM
  const project_list = document.querySelector("#project-list");
  project_list.insertAdjacentElement("afterend", createProjectAdder());
}

function changeTabTo(navItem, loadTabFunction, projectObject = undefined) {
  if (!navItem.classList.contains("on-page")) {
    loadTabFunction(projectObject);
    checkEmptyTaskMessage();
    const previous_page = document.querySelector(".on-page");
    if (previous_page) previous_page.classList.remove("on-page");
    navItem.classList.add("on-page");
  }
}

function checkEmptyTaskMessage() {
  const task_list = document.querySelector("#task-list");
  const tasks = document.querySelectorAll(".task");
  const no_task = document.createElement("p");
  no_task.classList.add("task");
  no_task.textContent = "No tasks here.";
  if (!tasks.length) {
    task_list.appendChild(no_task);
  } else if (task_list.firstElementChild.textContent === "No tasks here.") {
    task_list.removeChild(task_list.firstElementChild);
  }
}

export { changeTabTo };
