export default class DOMstuff {
  static loadProject(projectObject) {
    this.#clearMainSection();
    this.#changeTabNameTo(projectObject.name);
    const task_list = document.createElement("ul");
    task_list.id = "task-list";

    for (let taskObject of projectObject.tasks) {
      console.log(taskObject);
      const task = document.createElement("li");
      task.classList.add("task");

      const task_name = document.createElement("p");
      task_name.classList.add("task_name");
      task_name.textContent = taskObject.name;

      const project_name = document.createElement("p");
      project_name.classList.add("project-name");
      if (projectObject.name === "common") {
        project_name.textContent = "";
      } else project_name.textContent = projectObject.name;

      const description = document.createElement("button");
      description.classList.add("description");
      description.textContent = "description";
      //Add description event listener

      const due_date = document.createElement("p");
      due_date.classList.add("due-date");
      due_date.textContent = taskObject.dueDate;

      const edit = document.createElement("button");
      edit.classList.add("edit");
      edit.textContent = "Edit";
      //Add edit event listener

      const remove = document.createElement("button");
      remove.classList.add("remove");
      remove.textContent = "remove";
      //Add remove event listener

      task.appendChild(task_name);
      task.appendChild(project_name);
      task.appendChild(description);
      task.appendChild(due_date);
      task.appendChild(edit);
      task.appendChild(remove);

      task_list.appendChild(task);
    }

    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);
    main_section.appendChild(this.#loadTaskAdder(projectObject));
  }

  static #clearMainSection() {
    const main_section = document.querySelector("#main-section");
    while (main_section.childElementCount > 1) {
      main_section.removeChild(main_section.lastChild);
    }
  }
  static #changeTabNameTo(tabName) {
    document.querySelector("#tab-name").textContent = tabName;
  }

  static #loadTaskAdder(projectObject) {
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
    const description_input = document.createElement("input");
    description_input.type = "text";
    description_input.id = "description";
    description_input.placeholder = "Task description";
    description_input.required = true;
    const date_input = document.createElement("input");
    date_input.type = "date";
    date_input.id = "date";
    date_input.required = true;
    const confirm_button = document.createElement("button");
    confirm_button.type = "submit";
    confirm_button.id = "confirm-task";
    confirm_button.textContent = "Add";
    const cancel_button = document.createElement("button");
    cancel_button.type = "button";
    cancel_button.id = "cancel-task";
    cancel_button.textContent = "Cancel";

    add_task_form.addEventListener("submit", () => {
      projectObject.addTask(
        name_input.value,
        description_input.value,
        date_input.value
      );
      this.loadProject(projectObject);
    });

    cancel_button.addEventListener("click", () => {
      this.loadProject(projectObject);
    });

    add_task_form.appendChild(name_input);
    add_task_form.appendChild(description_input);
    add_task_form.appendChild(date_input);
    add_task_form.appendChild(confirm_button);
    add_task_form.appendChild(cancel_button);

    task_adder.appendChild(add_task_button);
    task_adder.appendChild(add_task_form);

    return task_adder;
  }
}
