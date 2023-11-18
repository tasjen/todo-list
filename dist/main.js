/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMstuff)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class DOMstuff {

  static loadProjectList(projectList) {
    //render project list
    const project_list = document.querySelector("#project-list");
    for (let projectObject of projectList) {
      const project = createProjectDOM(projectObject);
      project_list.appendChild(project);
    }

    //render project adder
    project_list.insertAdjacentElement(
      "afterend",
      createProjectAdder(projectList)
    );
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
  switch (taskObject.priority) {
    case 1:
      priority.textContent = "★";
      break;
    case 2:
      priority.textContent = "★ ★";
      break;
    case 3:
      priority.textContent = "★ ★ ★";
      break;
  }

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
    if (!project.classList.contains("onpage")) {
      DOMstuff.loadTaskList(projectObject);
      const previous_page = document.querySelector(".project.onpage");
      if (previous_page) previous_page.classList.remove("onpage");
      project.classList.add("onpage");
    }
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
    const newTaskObject = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
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

function createProjectAdder(projectList) {
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

    const newProjectObject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name_input.value);

    projectList.push(newProjectObject);
    const newProjectDOM = createProjectDOM(newProjectObject);
    document.querySelector("#project-list").appendChild(newProjectDOM);

    resetProjectAdder(projectList);
  });

  cancel_button.addEventListener("click", () => {
    resetProjectAdder(projectList);
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

function resetProjectAdder(projectList) {
  //remove project adder from the DOM
  const project_adder = document.querySelector("#project-adder");
  project_adder.parentElement.removeChild(project_adder);

  //create and add project adder to the DOM
  const project_list = document.querySelector("#project-list");
  project_list.insertAdjacentElement(
    "afterend",
    createProjectAdder(projectList)
  );
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name; //string
    this.tasks = []; //array
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskObject) { 
    this.tasks.push(taskObject);
    console.log("Add", taskObject);
  }

  removeTask(taskName) {
    const removedTask = this.tasks.find(task => task.name === taskName);
    console.log("Remove", removedTask);

    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name; //string
    this.description = description; // string
    this.dueDate = dueDate; //Date
    this.priority = priority; //number 1,2,3
  }
  setName(newName) {
    this.name = newName;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  setPriodity(newPriority) {
    this.priority = newPriority;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMstuff.js */ "./src/DOMstuff.js");




const projectList = [];

const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](('Default'));
const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project1');
const project2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project2');
const project3 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project3');

defaultProject.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('task', 'project', new Date(), 3));

project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('11','456', new Date(), 1));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('111','456', new Date(), 2));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('1111','456', new Date(), 3));

project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('22','456', new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('222','456', new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('2222','456', new Date(), 1));

project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('33','456', new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('333','456', new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('3333','456', new Date(), 3));

projectList.push(defaultProject);
projectList.push(project1);
projectList.push(project2);
projectList.push(project3);

_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadProjectList(projectList);
document.querySelector('.project:first-child').click();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ047O0FBRWQ7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZ0RBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1EQUFPOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hVZTtBQUNmO0FBQ0Esc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQSxzQkFBc0I7QUFDdEIsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDTjtBQUNROztBQUVyQzs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMscUJBQXFCLG1EQUFPO0FBQzVCLHFCQUFxQixtREFBTztBQUM1QixxQkFBcUIsbURBQU87O0FBRTVCLDJCQUEyQixnREFBSTs7QUFFL0IscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7O0FBRXpCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJOztBQUV6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQVE7QUFDUix1RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01zdHVmZiB7XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCkge1xuICAgIC8vcmVuZGVyIHByb2plY3QgbGlzdFxuICAgIGNvbnN0IHByb2plY3RfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICAgIGZvciAobGV0IHByb2plY3RPYmplY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmplY3QpO1xuICAgICAgcHJvamVjdF9saXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIC8vcmVuZGVyIHByb2plY3QgYWRkZXJcbiAgICBwcm9qZWN0X2xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFRhc2tMaXN0KHByb2plY3RPYmplY3QpIHtcbiAgICBjbGVhck1haW5TZWN0aW9uKCk7XG4gICAgY2hhbmdlVGFiTmFtZVRvKHByb2plY3RPYmplY3QubmFtZSk7XG5cbiAgICAvL3JlbmRlciBwcm9qZWN0J3MgdGFza3NcbiAgICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFza19saXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICBmb3IgKGxldCB0YXNrT2JqZWN0IG9mIHByb2plY3RPYmplY3QudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH1cbiAgICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQodGFza19saXN0KTtcblxuICAgIC8vcmVuZGVyIHRhc2sgYWRkZXJcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZGVyKHByb2plY3RPYmplY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck1haW5TZWN0aW9uKCkge1xuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcblxuICAvL3JlbW92ZSBldmVyeSBlbGVtZW50IGZyb20gbWFpbiBzZWN0aW9uIGV4Y2VwdCBwYWdlIGhlYWRlciAodGFiIG5hbWUpXG4gIHdoaWxlIChtYWluX3NlY3Rpb24uY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgbWFpbl9zZWN0aW9uLnJlbW92ZUNoaWxkKG1haW5fc2VjdGlvbi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYk5hbWVUbyh0YWJOYW1lKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBjb25zdCB0YXNrX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza19uYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gIHN3aXRjaCAodGFza09iamVjdC5wcmlvcml0eSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCLimIVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCLimIUg4piFXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwi4piFIOKYhSDimIVcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJkZXNjcmlwdGlvblwiO1xuICAvL0FkZCBkZXNjcmlwdGlvbiBldmVudCBsaXN0ZW5lclxuXG4gIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIiwge1xuICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICB9KTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAvL0FkZCBlZGl0IGV2ZW50IGxpc3RlbmVyXG5cbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIik7XG4gIHJlbW92ZS50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCI7XG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2sucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICBwcm9qZWN0T2JqZWN0LnJlbW92ZVRhc2sodGFza09iamVjdC5uYW1lKTtcbiAgfSk7XG5cbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrX25hbWUpO1xuICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdE9iamVjdCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5uYW1lO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25wYWdlXCIpKSB7XG4gICAgICBET01zdHVmZi5sb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gICAgICBjb25zdCBwcmV2aW91c19wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Lm9ucGFnZVwiKTtcbiAgICAgIGlmIChwcmV2aW91c19wYWdlKSBwcmV2aW91c19wYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJvbnBhZ2VcIik7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJvbnBhZ2VcIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrX2FkZGVyLmlkID0gXCJ0YXNrLWFkZGVyXCI7XG5cbiAgY29uc3QgYWRkX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkX3Rhc2tfYnV0dG9uLmlkID0gXCJhZGQtdGFza1wiO1xuICBhZGRfdGFza19idXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGFkZF90YXNrX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgbmFtZV9pbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBjb25zdCBhZGRfdGFza19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZF90YXNrX2Zvcm0uaWQgPSBcInRhc2stZm9ybVwiO1xuICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIGNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVfaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lX2lucHV0LmlkID0gXCJuYW1lXCI7XG4gIG5hbWVfaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICBuYW1lX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgbmFtZV9pbnB1dC5hdXRvZm9jdXMgPSB0cnVlO1xuICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25faW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIGRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZV9pbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgY29uc3QgbG93X3JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsb3dfcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgbG93X3JhZGlvLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGxvd19yYWRpby5pZCA9IFwibG93XCI7XG4gIGxvd19yYWRpby52YWx1ZSA9IDE7XG4gIGxvd19yYWRpby5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IG1lZGl1bV9yYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbWVkaXVtX3JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIG1lZGl1bV9yYWRpby5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBtZWRpdW1fcmFkaW8uaWQgPSBcIm1lZGl1bVwiO1xuICBtZWRpdW1fcmFkaW8udmFsdWUgPSAyO1xuICBjb25zdCBoaWdoX3JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBoaWdoX3JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIGhpZ2hfcmFkaW8ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgaGlnaF9yYWRpby5pZCA9IFwiaGlnaFwiO1xuICBoaWdoX3JhZGlvLnZhbHVlID0gMztcblxuICBjb25zdCBsb3dfcmFkaW9fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxvd19yYWRpb19sYWJlbC5odG1sRm9yID0gXCJsb3dcIjtcbiAgbG93X3JhZGlvX2xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgY29uc3QgbWVkaXVtX3JhZGlvX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBtZWRpdW1fcmFkaW9fbGFiZWwuaHRtbEZvciA9IFwibWVkaXVtXCI7XG4gIG1lZGl1bV9yYWRpb19sYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIGNvbnN0IGhpZ2hfcmFkaW9fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGhpZ2hfcmFkaW9fbGFiZWwuaHRtbEZvciA9IFwiaGlnaFwiO1xuICBoaWdoX3JhZGlvX2xhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgY29uc3QgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGxvd19yYWRpbyk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dfcmFkaW9fbGFiZWwpO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtX3JhZGlvKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZGl1bV9yYWRpb19sYWJlbCk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoX3JhZGlvKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hfcmFkaW9fbGFiZWwpO1xuXG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXRhc2tcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXRhc2tcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIC8vY2hlY2sgdW5pcXVlIHRhc2sgbmFtZSBpbiBhIHByb2plY3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9qZWN0T2JqZWN0LnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2submFtZSA9PT0gbmFtZV9pbnB1dC52YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHRoZSBwcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IG5ld1Rhc2tPYmplY3QgPSBuZXcgVGFzayhcbiAgICAgIG5hbWVfaW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSxcbiAgICAgIG5ldyBEYXRlKGRhdGVfaW5wdXQudmFsdWUpLFxuICAgICAgK0FycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J3ByaW9yaXR5J11cIikpLmZpbmQoXG4gICAgICAgIChyYWRpbykgPT4gcmFkaW8uY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgKS52YWx1ZSAvL2dldCB0aGUgY2hlY2tlZCB2YWx1ZShwcmlvcml0eSkgZnJvbSBhbGwgcmFkaW8gYnV0dG9uc1xuICAgICk7XG4gICAgcHJvamVjdE9iamVjdC5hZGRUYXNrKG5ld1Rhc2tPYmplY3QpO1xuXG4gICAgLy9hZGQgbmV3IHRhc2sgdG8gdGhlIERPTVxuICAgIGNvbnN0IG5ld1Rhc2tET00gPSBjcmVhdGVUYXNrRE9NKG5ld1Rhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1saXN0XCIpLmFwcGVuZENoaWxkKG5ld1Rhc2tET00pO1xuXG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGNhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfaW5wdXRfY29udGFpbmVyKTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19idXR0b24pO1xuICB0YXNrX2FkZGVyLmFwcGVuZENoaWxkKGFkZF90YXNrX2Zvcm0pO1xuXG4gIHJldHVybiB0YXNrX2FkZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWRkZXIocHJvamVjdExpc3QpIHtcbiAgY29uc3QgcHJvamVjdF9hZGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RfYWRkZXIuaWQgPSBcInByb2plY3QtYWRkZXJcIjtcblxuICBjb25zdCBhZGRfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRfcHJvamVjdF9idXR0b24uaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgcHJvamVjdFwiO1xuICBhZGRfcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9idXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgYWRkX3Byb2plY3RfZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBuYW1lX2lucHV0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZF9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkX3Byb2plY3RfZm9ybS5pZCA9IFwicHJvamVjdC1mb3JtXCI7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgY29uc3QgbmFtZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZV9pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVfaW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgbmFtZV9pbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gIG5hbWVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBjb25maXJtX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1fYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtX2J1dHRvbi5pZCA9IFwiY29uZmlybS1wcm9qZWN0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY29uc3QgY2FuY2VsX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbF9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbF9idXR0b24uaWQgPSBcImNhbmNlbC1wcm9qZWN0XCI7XG4gIGNhbmNlbF9idXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGFkZF9wcm9qZWN0X2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vY2hlY2sgdW5pcXVlIHByb2plY3QgbmFtZVxuICAgIGlmIChwcm9qZWN0TGlzdC5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICBhbGVydChcIlByb2plY3QgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0T2JqZWN0ID0gbmV3IFByb2plY3QobmFtZV9pbnB1dC52YWx1ZSk7XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3RPYmplY3QpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RET00gPSBjcmVhdGVQcm9qZWN0RE9NKG5ld1Byb2plY3RPYmplY3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RET00pO1xuXG4gICAgcmVzZXRQcm9qZWN0QWRkZXIocHJvamVjdExpc3QpO1xuICB9KTtcblxuICBjYW5jZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRQcm9qZWN0QWRkZXIocHJvamVjdExpc3QpO1xuICB9KTtcblxuICBhZGRfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKG5hbWVfaW5wdXQpO1xuICBhZGRfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1fYnV0dG9uKTtcbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxfYnV0dG9uKTtcblxuICBwcm9qZWN0X2FkZGVyLmFwcGVuZENoaWxkKGFkZF9wcm9qZWN0X2J1dHRvbik7XG4gIHByb2plY3RfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Byb2plY3RfZm9ybSk7XG5cbiAgcmV0dXJuIHByb2plY3RfYWRkZXI7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza0FkZGVyKHByb2plY3RPYmplY3QpIHtcbiAgLy9yZW1vdmUgdGFzayBhZGRlciBmcm9tIHRoZSBET01cbiAgY29uc3QgdGFza19hZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1hZGRlclwiKTtcbiAgdGFza19hZGRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tfYWRkZXIpO1xuXG4gIC8vY3JlYXRlIGFuZCBhZGQgdGFzayBhZGRlciB0byB0aGUgRE9NXG4gIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZGVyKHByb2plY3RPYmplY3QpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0QWRkZXIocHJvamVjdExpc3QpIHtcbiAgLy9yZW1vdmUgcHJvamVjdCBhZGRlciBmcm9tIHRoZSBET01cbiAgY29uc3QgcHJvamVjdF9hZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1hZGRlclwiKTtcbiAgcHJvamVjdF9hZGRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHByb2plY3RfYWRkZXIpO1xuXG4gIC8vY3JlYXRlIGFuZCBhZGQgcHJvamVjdCBhZGRlciB0byB0aGUgRE9NXG4gIGNvbnN0IHByb2plY3RfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0X2xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgIFwiYWZ0ZXJlbmRcIixcbiAgICBjcmVhdGVQcm9qZWN0QWRkZXIocHJvamVjdExpc3QpXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vc3RyaW5nXG4gICAgdGhpcy50YXNrcyA9IFtdOyAvL2FycmF5XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrT2JqZWN0KSB7IFxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrT2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcIkFkZFwiLCB0YXNrT2JqZWN0KTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCByZW1vdmVkVGFzayA9IHRoaXMudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PT0gdGFza05hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlXCIsIHJlbW92ZWRUYXNrKTtcblxuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAvL3N0cmluZ1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgLy8gc3RyaW5nXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTsgLy9EYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5OyAvL251bWJlciAxLDIsM1xuICB9XG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cbiAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH1cbiAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfVxuICBzZXRQcmlvZGl0eShuZXdQcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBET01zdHVmZiBmcm9tICcuL0RPTXN0dWZmLmpzJztcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgoJ0RlZmF1bHQnKSk7XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgncHJvamVjdDInKTtcbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ3Byb2plY3QzJyk7XG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2soJ3Rhc2snLCAncHJvamVjdCcsIG5ldyBEYXRlKCksIDMpKTtcblxucHJvamVjdDEuYWRkVGFzayhuZXcgVGFzaygnMTEnLCc0NTYnLCBuZXcgRGF0ZSgpLCAxKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTEnLCc0NTYnLCBuZXcgRGF0ZSgpLCAyKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTExJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xuXG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKCcyMicsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMicsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMjInLCc0NTYnLCBuZXcgRGF0ZSgpLCAxKSk7XG5cbnByb2plY3QzLmFkZFRhc2sobmV3IFRhc2soJzMzJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzMycsJzQ1NicsIG5ldyBEYXRlKCksIDMpKTtcblxucHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QxKTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDIpO1xucHJvamVjdExpc3QucHVzaChwcm9qZWN0Myk7XG5cbkRPTXN0dWZmLmxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdDpmaXJzdC1jaGlsZCcpLmNsaWNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9