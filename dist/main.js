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
    const project_list = document.querySelector("#project-list");
    for (let projectObject of projectList) {
      const project = createProjectDOM(projectObject);
      project_list.appendChild(project);
    }
    project_list.insertAdjacentElement(
      "afterend",
      createProjectAdder(projectList)
    );
  }
  static loadTaskList(projectObject) {
    clearMainSection();
    changeTabNameTo(projectObject.name);
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let taskObject of projectObject.tasks) {
      const task = createTaskDOM(taskObject, projectObject);
      task_list.appendChild(task);
    }

    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);
    main_section.appendChild(createTaskAdder(projectObject));
  }
}

function clearMainSection() {
  const main_section = document.querySelector("#main-section");
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

  const project_name = document.createElement("p");
  project_name.classList.add("project-name");
  if (projectObject.name === "none") {
    project_name.textContent = "";
  } else project_name.textContent = projectObject.name;

  const priority = document.createElement("p");
  priority.classList.add("priority");
  switch (taskObject.priority) {
    case 1:
      priority.textContent = "low";
      break;
    case 2:
      priority.textContent = "medium";
      break;
    case 3:
      priority.textContent = "high";
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
  task.appendChild(project_name);
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
      const last_page = document.querySelector(".project.onpage");
      if (last_page) last_page.classList.remove("onpage");
      project.classList.add("onpage");
    }
  });
  return project;
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
    event.preventDefault();
    if (projectObject.tasks.some((task) => task.name === name_input.value)) {
      alert("Task name must be unique");
      return;
    }

    const newTaskObject = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
      name_input.value,
      description_input.value,
      new Date(date_input.value),
      +Array.from(document.querySelectorAll("input[name='priority']")).find(
        (radio) => radio.checked === true
      ).value //get the checked value(priority) from all radio buttons
    );
    projectObject.addTask(newTaskObject);

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

function resetTaskAdder(projectObject) {
  const task_adder = document.querySelector("#task-adder");
  task_adder.parentElement.removeChild(task_adder);

  const main_section = document.querySelector("#main-section");
  main_section.appendChild(createTaskAdder(projectObject));
}

function resetProjectAdder(projectList) {
  const project_adder = document.querySelector("#project-adder");
  project_adder.parentElement.removeChild(project_adder);

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
const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project1');
const project2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project2');
const project3 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project3');
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('11','456', new Date(), 1));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('111','456', new Date(), 2));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('1111','456', new Date(), 3));

project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('22','456', new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('222','456', new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('2222','456', new Date(), 1));

project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('33','456', new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('333','456', new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('3333','456', new Date(), 3));

projectList.push(project1);
projectList.push(project2);
projectList.push(project3);


_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadProjectList(projectList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ047QUFDUTs7QUFFckM7QUFDQSxxQkFBcUIsbURBQU87QUFDNUIscUJBQXFCLG1EQUFPO0FBQzVCLHFCQUFxQixtREFBTztBQUM1QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTs7QUFFekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7O0FBRXpCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJOztBQUV6QjtBQUNBO0FBQ0E7OztBQUdBLG9EQUFRLDhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTXN0dWZmIHtcbiAgc3RhdGljIGxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCkge1xuICAgIGNvbnN0IHByb2plY3RfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICAgIGZvciAobGV0IHByb2plY3RPYmplY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmplY3QpO1xuICAgICAgcHJvamVjdF9saXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cbiAgICBwcm9qZWN0X2xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KVxuICAgICk7XG4gIH1cbiAgc3RhdGljIGxvYWRUYXNrTGlzdChwcm9qZWN0T2JqZWN0KSB7XG4gICAgY2xlYXJNYWluU2VjdGlvbigpO1xuICAgIGNoYW5nZVRhYk5hbWVUbyhwcm9qZWN0T2JqZWN0Lm5hbWUpO1xuICAgIGNvbnN0IHRhc2tfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0YXNrX2xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgIGZvciAobGV0IHRhc2tPYmplY3Qgb2YgcHJvamVjdE9iamVjdC50YXNrcykge1xuICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tET00odGFza09iamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICB0YXNrX2xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gICAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tfbGlzdCk7XG4gICAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluU2VjdGlvbigpIHtcbiAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gIHdoaWxlIChtYWluX3NlY3Rpb24uY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgbWFpbl9zZWN0aW9uLnJlbW92ZUNoaWxkKG1haW5fc2VjdGlvbi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYk5hbWVUbyh0YWJOYW1lKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBjb25zdCB0YXNrX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza19uYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcblxuICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdF9uYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIGlmIChwcm9qZWN0T2JqZWN0Lm5hbWUgPT09IFwibm9uZVwiKSB7XG4gICAgcHJvamVjdF9uYW1lLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHByb2plY3RfbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QubmFtZTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gIHN3aXRjaCAodGFza09iamVjdC5wcmlvcml0eSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJsb3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJoaWdoXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgLy9BZGQgZGVzY3JpcHRpb24gZXZlbnQgbGlzdGVuZXJcblxuICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIHtcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gIGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgLy9BZGQgZWRpdCBldmVudCBsaXN0ZW5lclxuXG4gIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpO1xuICByZW1vdmUudGV4dENvbnRlbnQgPSBcInJlbW92ZVwiO1xuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgcHJvamVjdE9iamVjdC5yZW1vdmVUYXNrKHRhc2tPYmplY3QubmFtZSk7XG4gIH0pO1xuXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza19uYW1lKTtcbiAgdGFzay5hcHBlbmRDaGlsZChwcm9qZWN0X25hbWUpO1xuICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdE9iamVjdCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5uYW1lO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25wYWdlXCIpKSB7XG4gICAgICBET01zdHVmZi5sb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gICAgICBjb25zdCBsYXN0X3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qub25wYWdlXCIpO1xuICAgICAgaWYgKGxhc3RfcGFnZSkgbGFzdF9wYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJvbnBhZ2VcIik7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJvbnBhZ2VcIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBZGRlcihwcm9qZWN0TGlzdCkge1xuICBjb25zdCBwcm9qZWN0X2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdF9hZGRlci5pZCA9IFwicHJvamVjdC1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF9wcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgYWRkX3Byb2plY3RfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBwcm9qZWN0XCI7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF9wcm9qZWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfcHJvamVjdF9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfcHJvamVjdF9mb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcbiAgYWRkX3Byb2plY3RfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXByb2plY3RcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXByb2plY3RcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Byb2plY3RfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jaGVjayB1bmlxdWUgcHJvamVjdCBuYW1lXG4gICAgaWYgKHByb2plY3RMaXN0LnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZV9pbnB1dC52YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3RPYmplY3QgPSBuZXcgUHJvamVjdChuYW1lX2lucHV0LnZhbHVlKTtcblxuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdE9iamVjdCk7XG4gICAgY29uc3QgbmV3UHJvamVjdERPTSA9IGNyZWF0ZVByb2plY3RET00obmV3UHJvamVjdE9iamVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERPTSk7XG5cbiAgICByZXNldFByb2plY3RBZGRlcihwcm9qZWN0TGlzdCk7XG4gIH0pO1xuXG4gIGNhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFByb2plY3RBZGRlcihwcm9qZWN0TGlzdCk7XG4gIH0pO1xuXG4gIGFkZF9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQobmFtZV9pbnB1dCk7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybV9idXR0b24pO1xuICBhZGRfcHJvamVjdF9mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gIHByb2plY3RfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Byb2plY3RfYnV0dG9uKTtcbiAgcHJvamVjdF9hZGRlci5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9mb3JtKTtcblxuICByZXR1cm4gcHJvamVjdF9hZGRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0FkZGVyKHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgdGFza19hZGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tfYWRkZXIuaWQgPSBcInRhc2stYWRkZXJcIjtcblxuICBjb25zdCBhZGRfdGFza19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRfdGFza19idXR0b24uaWQgPSBcImFkZC10YXNrXCI7XG4gIGFkZF90YXNrX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgdGFza1wiO1xuICBhZGRfdGFza19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfdGFza19idXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgYWRkX3Rhc2tfZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBuYW1lX2lucHV0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZF90YXNrX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkX3Rhc2tfZm9ybS5pZCA9IFwidGFzay1mb3JtXCI7XG4gIGFkZF90YXNrX2Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgY29uc3QgbmFtZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZV9pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVfaW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgbmFtZV9pbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gIG5hbWVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBuYW1lX2lucHV0LmF1dG9mb2N1cyA9IHRydWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbl9pbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25faW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25faW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBkYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlX2lucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZV9pbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICBkYXRlX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBsb3dfcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxvd19yYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBsb3dfcmFkaW8ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgbG93X3JhZGlvLmlkID0gXCJsb3dcIjtcbiAgbG93X3JhZGlvLnZhbHVlID0gMTtcbiAgbG93X3JhZGlvLnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgbWVkaXVtX3JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBtZWRpdW1fcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgbWVkaXVtX3JhZGlvLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIG1lZGl1bV9yYWRpby5pZCA9IFwibWVkaXVtXCI7XG4gIG1lZGl1bV9yYWRpby52YWx1ZSA9IDI7XG4gIGNvbnN0IGhpZ2hfcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGhpZ2hfcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgaGlnaF9yYWRpby5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBoaWdoX3JhZGlvLmlkID0gXCJoaWdoXCI7XG4gIGhpZ2hfcmFkaW8udmFsdWUgPSAzO1xuXG4gIGNvbnN0IGxvd19yYWRpb19sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbG93X3JhZGlvX2xhYmVsLmh0bWxGb3IgPSBcImxvd1wiO1xuICBsb3dfcmFkaW9fbGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBjb25zdCBtZWRpdW1fcmFkaW9fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG1lZGl1bV9yYWRpb19sYWJlbC5odG1sRm9yID0gXCJtZWRpdW1cIjtcbiAgbWVkaXVtX3JhZGlvX2xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgY29uc3QgaGlnaF9yYWRpb19sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaGlnaF9yYWRpb19sYWJlbC5odG1sRm9yID0gXCJoaWdoXCI7XG4gIGhpZ2hfcmFkaW9fbGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICBjb25zdCBwcmlvcml0eV9pbnB1dF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQobG93X3JhZGlvKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGxvd19yYWRpb19sYWJlbCk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWRpdW1fcmFkaW8pO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtX3JhZGlvX2xhYmVsKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hfcmFkaW8pO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaF9yYWRpb19sYWJlbCk7XG5cbiAgY29uc3QgY29uZmlybV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtX2J1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybV9idXR0b24uaWQgPSBcImNvbmZpcm0tdGFza1wiO1xuICBjb25maXJtX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbnN0IGNhbmNlbF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxfYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWxfYnV0dG9uLmlkID0gXCJjYW5jZWwtdGFza1wiO1xuICBjYW5jZWxfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBhZGRfdGFza19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdE9iamVjdC50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLm5hbWUgPT09IG5hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUYXNrT2JqZWN0ID0gbmV3IFRhc2soXG4gICAgICBuYW1lX2lucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsXG4gICAgICBuZXcgRGF0ZShkYXRlX2lucHV0LnZhbHVlKSxcbiAgICAgICtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddXCIpKS5maW5kKFxuICAgICAgICAocmFkaW8pID0+IHJhZGlvLmNoZWNrZWQgPT09IHRydWVcbiAgICAgICkudmFsdWUgLy9nZXQgdGhlIGNoZWNrZWQgdmFsdWUocHJpb3JpdHkpIGZyb20gYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICApO1xuICAgIHByb2plY3RPYmplY3QuYWRkVGFzayhuZXdUYXNrT2JqZWN0KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tET00gPSBjcmVhdGVUYXNrRE9NKG5ld1Rhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1saXN0XCIpLmFwcGVuZENoaWxkKG5ld1Rhc2tET00pO1xuXG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGNhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfaW5wdXRfY29udGFpbmVyKTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19idXR0b24pO1xuICB0YXNrX2FkZGVyLmFwcGVuZENoaWxkKGFkZF90YXNrX2Zvcm0pO1xuXG4gIHJldHVybiB0YXNrX2FkZGVyO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stYWRkZXJcIik7XG4gIHRhc2tfYWRkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrX2FkZGVyKTtcblxuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KSB7XG4gIGNvbnN0IHByb2plY3RfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWRkZXJcIik7XG4gIHByb2plY3RfYWRkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwcm9qZWN0X2FkZGVyKTtcblxuICBjb25zdCBwcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdF9saXN0Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICBcImFmdGVyZW5kXCIsXG4gICAgY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KVxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAvL3N0cmluZ1xuICAgIHRoaXMudGFza3MgPSBbXTsgLy9hcnJheVxuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza09iamVjdCkgeyBcbiAgICB0aGlzLnRhc2tzLnB1c2godGFza09iamVjdCk7XG4gICAgY29uc29sZS5sb2coXCJBZGRcIiwgdGFza09iamVjdCk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcmVtb3ZlZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZVwiLCByZW1vdmVkVGFzayk7XG5cbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTsgLy9zdHJpbmdcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IC8vIHN0cmluZ1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IC8vRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgLy9udW1iZXIgMSwyLDNcbiAgfVxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cbiAgc2V0UHJpb2RpdHkobmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgRE9Nc3R1ZmYgZnJvbSAnLi9ET01zdHVmZi5qcyc7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgncHJvamVjdDInKTtcbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ3Byb2plY3QzJyk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMScsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soJzExMScsJzQ1NicsIG5ldyBEYXRlKCksIDIpKTtcbnByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soJzExMTEnLCc0NTYnLCBuZXcgRGF0ZSgpLCAzKSk7XG5cbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyJywnNDU2JywgbmV3IERhdGUoKSwgMSkpO1xucHJvamVjdDIuYWRkVGFzayhuZXcgVGFzaygnMjIyJywnNDU2JywgbmV3IERhdGUoKSwgMSkpO1xucHJvamVjdDIuYWRkVGFzayhuZXcgVGFzaygnMjIyMicsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcblxucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMnLCc0NTYnLCBuZXcgRGF0ZSgpLCAzKSk7XG5wcm9qZWN0My5hZGRUYXNrKG5ldyBUYXNrKCczMzMnLCc0NTYnLCBuZXcgRGF0ZSgpLCAzKSk7XG5wcm9qZWN0My5hZGRUYXNrKG5ldyBUYXNrKCczMzMzJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xuXG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QxKTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDIpO1xucHJvamVjdExpc3QucHVzaChwcm9qZWN0Myk7XG5cblxuRE9Nc3R1ZmYubG9hZFByb2plY3RMaXN0KHByb2plY3RMaXN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=