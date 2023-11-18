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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
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
  task_name.classList.add("task_name");
  task_name.textContent = taskObject.name;

  const project_name = document.createElement("p");
  project_name.classList.add("project-name");
  if (projectObject.name === "none") {
    project_name.textContent = "";
  } else project_name.textContent = projectObject.name;

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
    DOMstuff.loadTaskList(projectObject);
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
  // name_input.autofocus = true;
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
    if (projectList.some((project) => project.name === name_input.value)) {
      alert("Project name must be unique");
      return;
    }

    const newProjectObject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name_input.value);

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

  add_task_form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectObject.tasks.some((task) => task.name === name_input.value)) {
      alert("Task name must be unique");
      return;
    }

    const newTaskObject = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
      name_input.value,
      description_input.value,
      new Date(date_input.value)
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
    this.name = name;
    this.tasks = [];
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
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
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
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('11','456', new Date()));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('111','456', new Date()));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('1111','456', new Date()));

project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('22','456', new Date()));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('222','456', new Date()));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('2222','456', new Date()));

project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('33','456', new Date()));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('333','456', new Date()));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('3333','456', new Date()));

projectList.push(project1);
projectList.push(project2);
projectList.push(project3);


_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadProjectList(projectList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQU87QUFDNUIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7O0FBRXpCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJOztBQUV6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTs7QUFFekI7QUFDQTtBQUNBOzs7QUFHQSxvREFBUSw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01zdHVmZiB7XG4gIHN0YXRpYyBsb2FkUHJvamVjdExpc3QocHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBwcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0T2JqZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdERPTShwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHByb2plY3RfbGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG4gICAgcHJvamVjdF9saXN0Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIFwiYWZ0ZXJlbmRcIixcbiAgICAgIGNyZWF0ZVByb2plY3RBZGRlcihwcm9qZWN0TGlzdClcbiAgICApO1xuICB9XG4gIHN0YXRpYyBsb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCkge1xuICAgIGNsZWFyTWFpblNlY3Rpb24oKTtcbiAgICBjaGFuZ2VUYWJOYW1lVG8ocHJvamVjdE9iamVjdC5uYW1lKTtcbiAgICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFza19saXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICBmb3IgKGxldCB0YXNrT2JqZWN0IG9mIHByb2plY3RPYmplY3QudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrX2xpc3QpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpblNlY3Rpb24oKSB7XG4gIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICB3aGlsZSAobWFpbl9zZWN0aW9uLmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgIG1haW5fc2VjdGlvbi5yZW1vdmVDaGlsZChtYWluX3NlY3Rpb24ubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWJOYW1lVG8odGFiTmFtZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1uYW1lXCIpLnRleHRDb250ZW50ID0gdGFiTmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0RPTSh0YXNrT2JqZWN0LCBwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgY29uc3QgdGFza19uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tfbmFtZS5jbGFzc0xpc3QuYWRkKFwidGFza19uYW1lXCIpO1xuICB0YXNrX25hbWUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0Lm5hbWU7XG5cbiAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RfbmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICBpZiAocHJvamVjdE9iamVjdC5uYW1lID09PSBcIm5vbmVcIikge1xuICAgIHByb2plY3RfbmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSBwcm9qZWN0X25hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqZWN0Lm5hbWU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJkZXNjcmlwdGlvblwiO1xuICAvL0FkZCBkZXNjcmlwdGlvbiBldmVudCBsaXN0ZW5lclxuXG4gIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIiwge1xuICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICB9KTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAvL0FkZCBlZGl0IGV2ZW50IGxpc3RlbmVyXG5cbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIik7XG4gIHJlbW92ZS50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCI7XG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2sucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICBwcm9qZWN0T2JqZWN0LnJlbW92ZVRhc2sodGFza09iamVjdC5uYW1lKTtcbiAgfSk7XG5cbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrX25hbWUpO1xuICB0YXNrLmFwcGVuZENoaWxkKHByb2plY3RfbmFtZSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB0YXNrLmFwcGVuZENoaWxkKGR1ZV9kYXRlKTtcbiAgdGFzay5hcHBlbmRDaGlsZChlZGl0KTtcbiAgdGFzay5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QubmFtZTtcblxuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgRE9Nc3R1ZmYubG9hZFRhc2tMaXN0KHByb2plY3RPYmplY3QpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBZGRlcihwcm9qZWN0TGlzdCkge1xuICBjb25zdCBwcm9qZWN0X2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdF9hZGRlci5pZCA9IFwicHJvamVjdC1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF9wcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgYWRkX3Byb2plY3RfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBwcm9qZWN0XCI7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF9wcm9qZWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfcHJvamVjdF9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfcHJvamVjdF9mb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcbiAgYWRkX3Byb2plY3RfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgY29uZmlybV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtX2J1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybV9idXR0b24uaWQgPSBcImNvbmZpcm0tcHJvamVjdFwiO1xuICBjb25maXJtX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbnN0IGNhbmNlbF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxfYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWxfYnV0dG9uLmlkID0gXCJjYW5jZWwtcHJvamVjdFwiO1xuICBjYW5jZWxfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBhZGRfcHJvamVjdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdExpc3Quc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lX2lucHV0LnZhbHVlKSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgbXVzdCBiZSB1bmlxdWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdE9iamVjdCA9IG5ldyBQcm9qZWN0KG5hbWVfaW5wdXQudmFsdWUpO1xuXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0T2JqZWN0KTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RE9NID0gY3JlYXRlUHJvamVjdERPTShuZXdQcm9qZWN0T2JqZWN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RE9NKTtcblxuICAgIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KTtcbiAgfSk7XG5cbiAgY2FuY2VsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KTtcbiAgfSk7XG5cbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgcHJvamVjdF9hZGRlci5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9idXR0b24pO1xuICBwcm9qZWN0X2FkZGVyLmFwcGVuZENoaWxkKGFkZF9wcm9qZWN0X2Zvcm0pO1xuXG4gIHJldHVybiBwcm9qZWN0X2FkZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza19hZGRlci5pZCA9IFwidGFzay1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF90YXNrX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF90YXNrX2J1dHRvbi5pZCA9IFwiYWRkLXRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gIGFkZF90YXNrX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Rhc2tfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfdGFza19mb3JtLmlkID0gXCJ0YXNrLWZvcm1cIjtcbiAgYWRkX3Rhc2tfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25faW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIGRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZV9pbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXRhc2tcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXRhc2tcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb2plY3RPYmplY3QudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5uYW1lID09PSBuYW1lX2lucHV0LnZhbHVlKSkge1xuICAgICAgYWxlcnQoXCJUYXNrIG5hbWUgbXVzdCBiZSB1bmlxdWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VGFza09iamVjdCA9IG5ldyBUYXNrKFxuICAgICAgbmFtZV9pbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLFxuICAgICAgbmV3IERhdGUoZGF0ZV9pbnB1dC52YWx1ZSlcbiAgICApO1xuICAgIHByb2plY3RPYmplY3QuYWRkVGFzayhuZXdUYXNrT2JqZWN0KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tET00gPSBjcmVhdGVUYXNrRE9NKG5ld1Rhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1saXN0XCIpLmFwcGVuZENoaWxkKG5ld1Rhc2tET00pO1xuXG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGNhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybV9idXR0b24pO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gIHRhc2tfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfYnV0dG9uKTtcbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19mb3JtKTtcblxuICByZXR1cm4gdGFza19hZGRlcjtcbn1cblxuZnVuY3Rpb24gcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWFkZGVyXCIpO1xuICB0YXNrX2FkZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza19hZGRlcik7XG5cbiAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb2plY3RBZGRlcihwcm9qZWN0TGlzdCkge1xuICBjb25zdCBwcm9qZWN0X2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZGVyXCIpO1xuICBwcm9qZWN0X2FkZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocHJvamVjdF9hZGRlcik7XG5cbiAgY29uc3QgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gIHByb2plY3RfbGlzdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgXCJhZnRlcmVuZFwiLFxuICAgIGNyZWF0ZVByb2plY3RBZGRlcihwcm9qZWN0TGlzdClcbiAgKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrT2JqZWN0KSB7IFxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrT2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcIkFkZFwiLCB0YXNrT2JqZWN0KTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCByZW1vdmVkVGFzayA9IHRoaXMudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PT0gdGFza05hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlXCIsIHJlbW92ZWRUYXNrKTtcblxuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IERPTXN0dWZmIGZyb20gJy4vRE9Nc3R1ZmYuanMnO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgncHJvamVjdDEnKTtcbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ3Byb2plY3QyJyk7XG5jb25zdCBwcm9qZWN0MyA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MycpO1xucHJvamVjdDEuYWRkVGFzayhuZXcgVGFzaygnMTEnLCc0NTYnLCBuZXcgRGF0ZSgpKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTEnLCc0NTYnLCBuZXcgRGF0ZSgpKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTExJywnNDU2JywgbmV3IERhdGUoKSkpO1xuXG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKCcyMicsJzQ1NicsIG5ldyBEYXRlKCkpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMicsJzQ1NicsIG5ldyBEYXRlKCkpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMjInLCc0NTYnLCBuZXcgRGF0ZSgpKSk7XG5cbnByb2plY3QzLmFkZFRhc2sobmV3IFRhc2soJzMzJywnNDU2JywgbmV3IERhdGUoKSkpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzJywnNDU2JywgbmV3IERhdGUoKSkpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzMycsJzQ1NicsIG5ldyBEYXRlKCkpKTtcblxucHJvamVjdExpc3QucHVzaChwcm9qZWN0MSk7XG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QyKTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDMpO1xuXG5cbkRPTXN0dWZmLmxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9