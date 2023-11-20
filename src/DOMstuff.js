import Project from "./project.js";
import Task from "./task.js";
import updateStorage, { projectList } from "./storage.js";
import { isSameDay, isSameWeek, format } from "date-fns";
export default loadProjectList;

const all_task = document.querySelector("#all-task");
all_task.render = () => loadAllTasks();
all_task.addEventListener("click", () => {
  changePageTo(all_task);
});

const today_task = document.querySelector("#today-task");
today_task.render = () => loadTodayTasks();
today_task.addEventListener("click", () => {
  changePageTo(today_task);
});

const this_week_task = document.querySelector("#this-week-task");
this_week_task.render = () => loadThisWeekTasks();
this_week_task.addEventListener("click", () => {
  changePageTo(this_week_task);
});

function loadAllTasks() {
  const task_list = document.querySelector("#task-list");
  for (let projectObject of projectList) {
    for (let taskObject of projectObject.getTasks()) {
      const today_task = createTaskDOM(taskObject, projectObject);
      const task_detail = today_task.firstChild;
      task_detail.removeChild(task_detail.querySelector(".remove"));
      task_detail.removeChild(task_detail.querySelector(".edit"));
      today_task.querySelector(
        ".task-name"
      ).textContent += ` (${projectObject.getName()})`;
      task_list.appendChild(today_task);
    }
  }
  const main_section = document.querySelector("#main-section");
  main_section.appendChild(task_list);
}
function loadTodayTasks() {
  const task_list = document.querySelector("#task-list");
  for (let projectObject of projectList) {
    for (let taskObject of projectObject.getTasks()) {
      if (isSameDay(taskObject.getDueDate(), new Date())) {
        const today_task = createTaskDOM(taskObject, projectObject);
        const task_detail = today_task.firstChild;
        task_detail.removeChild(task_detail.querySelector(".remove"));
        task_detail.removeChild(task_detail.querySelector(".edit"));
        today_task.querySelector(
          ".task-name"
        ).textContent += ` (${projectObject.getName()})`;
        task_list.appendChild(today_task);
      }
    }
  }
  const main_section = document.querySelector("#main-section");
  main_section.appendChild(task_list);
}

function loadThisWeekTasks() {
  const task_list = document.querySelector("#task-list");
  for (let projectObject of projectList) {
    for (let taskObject of projectObject.getTasks()) {
      if (isSameWeek(taskObject.getDueDate(), new Date())) {
        const this_week_task = createTaskDOM(taskObject, projectObject);
        const task_detail = this_week_task.firstChild;
        task_detail.removeChild(task_detail.querySelector(".remove"));
        task_detail.removeChild(task_detail.querySelector(".edit"));
        this_week_task.querySelector(
          ".task-name"
        ).textContent += ` (${projectObject.getName()})`;
        task_list.appendChild(this_week_task);
      }
    }
  }
  const main_section = document.querySelector("#main-section");
  main_section.appendChild(task_list);
}

function loadTaskList(projectObject) {
  //render project's tasks
  const task_list = document.querySelector("#task-list");
  for (let taskObject of projectObject.getTasks()) {
    const task = createTaskDOM(taskObject, projectObject);
    task_list.appendChild(task);
  }
  const main_section = document.querySelector("#main-section");
  main_section.appendChild(task_list);

  //render task adder
  main_section.appendChild(createTaskAdder(projectObject));
}

function loadProjectList() {
  const project_list = document.querySelector("#project-list");
  //remove project list and project adder from the DOM
  while (project_list.childElementCount > 1) {
    project_list.removeChild(project_list.lastChild);
  }
  //render project list on nav bar
  for (let projectObject of projectList) {
    const project = createProjectDOM(projectObject);
    if (projectObject === projectList[0]){
      project.id = "default-project";
      const remove_button = project.querySelector(".remove");
      remove_button.parentElement.removeChild(remove_button);
    }
    project_list.appendChild(project);
  }

  //remove project adder if exists
  const task_adder = document.querySelector("#project-adder");
  if (task_adder) {
    project_list.parentElement.removeChild(task_adder);
  }
  
  //render project adder
  project_list.insertAdjacentElement("afterend", createProjectAdder());

  //render default project page
  changePageTo(document.querySelector("#default-project"));

}


function createTaskDOM(taskObject, projectObject) {
  const task = document.createElement("li");
  task.classList.add("task");
  task.isShowingDescription = false;

  const task_detail = document.createElement("div");
  task_detail.classList.add("task-detail");

  const task_name = document.createElement("p");
  task_name.classList.add("task-name");
  task_name.textContent = taskObject.getName();

  const priority = document.createElement("p");
  priority.classList.add("priority");
  priority.textContent = ["★", "★ ★", "★ ★ ★"][taskObject.getPriority() - 1];

  const description_button = document.createElement("p");
  description_button.classList.add("description", "button");
  description_button.textContent = "description";
  description_button.addEventListener("click", () => {
    if (task.isShowingDescription) {
      task.removeChild(task.lastChild);
      task.isShowingDescription = false;
      description_button.classList.remove("showing");
    } else {
      const pop_up = document.createElement("p");
      pop_up.classList.add("task-description");
      pop_up.textContent = taskObject.getDescription();
      task.appendChild(pop_up);
      task.isShowingDescription = true;
      description_button.classList.add("showing");
    }
  });

  const due_date = document.createElement("p");
  due_date.classList.add("due-date");
  due_date.textContent = taskObject.getDueDate().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const edit = document.createElement("p");
  edit.classList.add("edit", "button");
  edit.textContent = "📝";
  edit.addEventListener("click", () => {
    document.querySelector("#add-task").click();

    //add original value to all inputs
    document.querySelector("#confirm-task").textContent = "Submit";
    document.querySelector("#name-input").value = taskObject.getName();
    document.querySelector("#description-input").value = taskObject.getDescription();
    document.querySelector("#date-input").value = format(
      taskObject.getDueDate(),
      "yyyy-MM-dd"
    );
    document.querySelector(
      `input[type="radio"][value="${taskObject.getPriority()}"]`
    ).checked = true;

    document.querySelector("#task-form").type = "edit";
    document.querySelector("#task-form").editingTask = taskObject;
  });

  const remove = document.createElement("p");
  remove.classList.add("remove", "button");
  remove.textContent = "❌";
  remove.addEventListener("click", () => {
    task.parentElement.removeChild(task);
    projectObject.removeTask(taskObject);
    updateStorage();
    resetTaskAdder();
    checkEmptyTaskMessage();
  });

  task_detail.appendChild(task_name);
  task_detail.appendChild(priority);
  task_detail.appendChild(description_button);
  task_detail.appendChild(due_date);
  task_detail.appendChild(edit);
  task_detail.appendChild(remove);

  task.appendChild(task_detail);

  return task;
}

function createProjectDOM(projectObject) {
  const project = document.createElement("li");
  project.classList.add("project");

  const project_name = document.createElement("p");
  project_name.classList.add("project-name");
  project_name.textContent = projectObject.getName();

  project.render = () => loadTaskList(projectObject);
  project.addEventListener("click", () => {
      changePageTo(project);
  }, true ); //do capturing phase only

  const edit = document.createElement("p");
  edit.classList.add("edit", "button");
  edit.textContent = "📝";
  edit.addEventListener("click", (event) => {
    document.querySelector("#add-project").click();

    //add original value to all inputs
    document.querySelector("#confirm-project").textContent = "Submit";
    document.querySelector("#project-name-input").value = projectObject.getName();

    //add edit-state and the projectObject to the form
    const form = document.querySelector("#project-form");
    form.type = "edit";
    form.editingProject = projectObject;
    form.editingNameNode = project_name;
  });

  const remove = document.createElement("p");
  remove.classList.add("remove", "button");
  remove.textContent = "❌";
  remove.addEventListener("click", () => {
    if (project.nextSibling) {
      changePageTo(project.nextSibling);
    } else if (project.previousSibling) {
      changePageTo(project.previousSibling);
    } else clearMainSection();

    project.parentElement.removeChild(project);
    projectList.splice(projectList.indexOf(projectObject), 1);
    updateStorage();
    resetProjectAdder();
  });

  const div = document.createElement("div");
  div.appendChild(edit);
  div.appendChild(remove);

  project.appendChild(project_name);
  project.appendChild(div);

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
    form.classList.remove("hide");
    name_input.focus();
  });

  const form = document.createElement("form");
  form.type = "add";
  form.id = "task-form";
  form.classList.add("hide");

  const name_input_container = document.createElement("div");
  name_input_container.id = "name-input-container";
  const description_input_container = document.createElement("div");
  description_input_container.id = "description-input-container";
  const date_input_container = document.createElement("div");
  date_input_container.id = "date-input-container";

  const name_input_label = document.createElement("label");
  name_input_label.htmlFor = "name-input";
  name_input_label.textContent = "Task name";
  const description_input_label = document.createElement("label");
  description_input_label.htmlFor = "description-input";
  description_input_label.textContent = "Task description";
  const date_input_label = document.createElement("label");
  date_input_label.htmlFor = "date-input";
  date_input_label.textContent = "Due date";

  const name_input = document.createElement("input");
  name_input.type = "text";
  name_input.id = "name-input";
  name_input.placeholder = "Task name";
  name_input.required = true;
  name_input.maxLength = 32;
  const description_input = document.createElement("textarea");
  description_input.id = "description-input";
  description_input.placeholder = "Task description";
  description_input.required = true;
  const date_input = document.createElement("input");
  date_input.type = "date";
  date_input.id = "date-input";
  date_input.required = true;

  name_input_container.appendChild(name_input_label);
  name_input_container.appendChild(name_input);
  description_input_container.appendChild(description_input_label);
  description_input_container.appendChild(description_input);
  date_input_container.appendChild(date_input_label);
  date_input_container.appendChild(date_input);

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
  priority_input_container.id = "priority-input-container";
  const priority_input_label = document.createElement("label");
  priority_input_label.textContent = "Priority";
  priority_input_container.appendChild(priority_input_label);

  const stupid_div = document.createElement("div");
  stupid_div.appendChild(low_radio);
  stupid_div.appendChild(low_radio_label);
  stupid_div.appendChild(medium_radio);
  stupid_div.appendChild(medium_radio_label);
  stupid_div.appendChild(high_radio);
  stupid_div.appendChild(high_radio_label);

  priority_input_container.appendChild(stupid_div);

  const confirm_button = document.createElement("button");
  confirm_button.type = "submit";
  confirm_button.id = "confirm-task";
  confirm_button.textContent = "Add";
  const cancel_button = document.createElement("button");
  cancel_button.type = "button";
  cancel_button.id = "cancel-task";
  cancel_button.textContent = "Cancel";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //get the checked value(priority) from all radio buttons
    const priorityValue = Array.from(
      document.querySelectorAll("input[name='priority']")
    ).find((radio) => radio.checked === true).value;

    if (form.type === "add") {
      //check unique task name in a project
      if (projectObject.getTasks().some((task) => task.getName() === name_input.value)) {
        alert("Task name must be unique");
        name_input.select();
        return;
      }

      const newTaskObject = new Task(
        name_input.value,
        description_input.value,
        date_input.value,
        priorityValue
      );

      //add new task to the project object
      projectObject.addTask(newTaskObject);

      //update the localStorage
      updateStorage();

      //add new task to the DOM
      const newTaskDOM = createTaskDOM(newTaskObject, projectObject);
      document.querySelector("#task-list").appendChild(newTaskDOM);

      checkEmptyTaskMessage();
    } else if (form.type === "edit") {
      //check if the new name is not the same as the old name
      //but the same as other task's name (check unique name)
      if (
        name_input.value !== form.editingTask.getName() &&
        projectObject.getTasks().some((task) => task.getName() === name_input.value)
      ) {
        alert("Task name must be unique");
        name_input.select();
        return;
      }

      //set all new property of the taskObject that is being edited
      form.editingTask.setName(name_input.value);
      form.editingTask.setDescription(description_input.value);
      form.editingTask.setDueDate(date_input.value);
      form.editingTask.setPriority(priorityValue);

      updateStorage();

      //reload page to update DOM
      clearMainSection();
      loadTaskList(projectObject);
    }
    resetTaskAdder();
  });

  cancel_button.addEventListener("click", () => {
    resetTaskAdder();
  });

  form.appendChild(name_input_container);
  form.appendChild(description_input_container);
  form.appendChild(date_input_container);
  form.appendChild(priority_input_container);
  form.appendChild(confirm_button);
  form.appendChild(cancel_button);

  task_adder.appendChild(add_task_button);
  task_adder.appendChild(form);

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
    form.classList.remove("hide");
    name_input.focus();
  });

  const form = document.createElement("form");
  form.id = "project-form";
  form.classList.add("hide");

  const name_input = document.createElement("input");
  name_input.type = "text";
  name_input.id = "project-name-input";
  name_input.placeholder = "Task name";
  name_input.required = true;
  name_input.maxLength = 16;
  const confirm_button = document.createElement("button");
  confirm_button.type = "Add";
  confirm_button.id = "confirm-project";
  confirm_button.textContent = "Add";
  const cancel_button = document.createElement("button");
  cancel_button.type = "button";
  cancel_button.id = "cancel-project";
  cancel_button.textContent = "Cancel";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newProjectName = name_input.value;

    if (form.type === "add") {
      //check unique project name
      if (projectList.some((project) => project.getName() === newProjectName)) {
        alert("Project name must be unique");
        name_input.select();
        return;
      }

      const newProjectObject = new Project(newProjectName);

      //add new project to projectList
      projectList.push(newProjectObject);

      //update localStorage
      updateStorage();

      //add new project to the DOM
      const newProjectDOM = createProjectDOM(newProjectObject);
      document.querySelector("#project-list").appendChild(newProjectDOM);

      //change to the created tab
      changePageTo(newProjectDOM);
    } else if (form.type === "edit") {
      //check if the new name is not the same as the old name
      //but the same as other project's name (check unique name)
      if (
        name_input.value !== form.editingProject.getName() &&
        projectList.some((project) => project.getName() === newProjectName)
      ) {
        alert("Project name must be unique");
        name_input.select();
        return;
      }

      form.editingProject.setName(newProjectName);

      updateStorage();

      //update DOM
      form.editingNameNode.textContent = newProjectName;
      document.querySelector("#tab-name").textContent = newProjectName;
      resetProjectAdder();
    }
  });

  cancel_button.addEventListener("click", () => {
    resetProjectAdder();
  });

  form.appendChild(name_input);
  form.appendChild(confirm_button);
  form.appendChild(cancel_button);

  project_adder.appendChild(add_project_button);
  project_adder.appendChild(form);

  return project_adder;
}

function resetTaskAdder() {
  const form = document.querySelector("#task-form");
  const add_task_button = document.querySelector("#add-task");

  //hide and reset task form
  form.classList.add("hide");
  form.reset();
  form.type = "add";

  //show add-task button
  add_task_button.classList.remove("hide");
}

function resetProjectAdder() {
  const form = document.querySelector("#project-form");
  const add_project_button = document.querySelector("#add-project");

  form.classList.add("hide");
  form.reset();
  form.type = "add";

  add_project_button.classList.remove("hide");
}

function changePageTo(pageNode) {
  if (!pageNode.classList.contains("on-page")) {

    clearMainSection();
    resetProjectAdder();

    const tab_name = document.querySelector("#tab-name")
    tab_name.textContent = pageNode.firstChild.textContent;

    pageNode.render();
    checkEmptyTaskMessage();
    const previous_page = document.querySelector(".on-page");
    if (previous_page) previous_page.classList.remove("on-page");
    pageNode.classList.add("on-page");
  }
}

function clearMainSection() {
  const main_section = document.querySelector("#main-section");
  const task_list = document.querySelector("#task-list");
  const task_adder = document.querySelector("#task-adder")

  //remove every element from main section except page header (tab name)
  while (task_list.firstChild) {
    task_list.removeChild(task_list.firstChild);
  }

  //remove task-adder (if exist)
  if (task_adder) {
    main_section.removeChild(task_adder);
  }
}

function checkEmptyTaskMessage() {
  const task_list = document.querySelector("#task-list");
  const tasks = document.querySelectorAll(".task");
  const no_task = document.createElement("p");
  no_task.textContent = "No tasks here.";
  if (!tasks.length) {
    task_list.appendChild(no_task);
  } else if (task_list.firstElementChild.textContent === "No tasks here.") {
    task_list.removeChild(task_list.firstElementChild);
  }
}
