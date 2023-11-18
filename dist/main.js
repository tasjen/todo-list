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
class DOMstuff {
  static loadProjectList() {}
  static loadTaskList(projectObject) {
    clearMainSection();
    changeTabNameTo(projectObject.name);
    const task_list = document.createElement("ul");
    task_list.id = "task-list";

    for (let taskObject of projectObject.tasks) {
      const task = createTask(taskObject, projectObject);
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

function createTask(taskObject, projectObject) {
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
  due_date.textContent = taskObject.dueDate;

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
    projectObject.addTask(
      name_input.value,
      description_input.value,
      date_input.value
    );
    const task = createTask(
      projectObject.tasks[projectObject.tasks.length - 1],
      projectObject
    );
    document.querySelector("#task-list").appendChild(task);
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
  const task_adder = document.querySelector('#task-adder');
  task_adder.parentElement.removeChild(task_adder);
  
  const main_section = document.querySelector('#main-section')
  main_section.appendChild(createTaskAdder(projectObject));
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskName, description, dueDate) {
    if (this.tasks.some((task) => task.name === taskName)) {
      alert("Task name must be unique");
      return;
    }
    
    this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, description, dueDate));
  }

  removeTask(taskName) {
    const removedTask = this.tasks.find(task => task.name === taskName);
    console.log("Remove", removedTask);

    this.task = this.tasks.filter((task) => task.name !== taskName);
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
/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMstuff.js */ "./src/DOMstuff.js");



const projectList = [];
const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('project1');
project1.addTask('123','456', (new Date()).toLocaleDateString());
project1.addTask('1233','456', (new Date()).toLocaleDateString());
project1.addTask('12333','456', (new Date()).toLocaleDateString());
projectList.push(project1);

_DOMstuff_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadTaskList(project1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSjZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNFOztBQUVyQztBQUNBLHFCQUFxQixtREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBUSx3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Nc3R1ZmYge1xuICBzdGF0aWMgbG9hZFByb2plY3RMaXN0KCkge31cbiAgc3RhdGljIGxvYWRUYXNrTGlzdChwcm9qZWN0T2JqZWN0KSB7XG4gICAgY2xlYXJNYWluU2VjdGlvbigpO1xuICAgIGNoYW5nZVRhYk5hbWVUbyhwcm9qZWN0T2JqZWN0Lm5hbWUpO1xuICAgIGNvbnN0IHRhc2tfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0YXNrX2xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuXG4gICAgZm9yIChsZXQgdGFza09iamVjdCBvZiBwcm9qZWN0T2JqZWN0LnRhc2tzKSB7XG4gICAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0YXNrT2JqZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHRhc2tfbGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQodGFza19saXN0KTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZGVyKHByb2plY3RPYmplY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck1haW5TZWN0aW9uKCkge1xuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgd2hpbGUgKG1haW5fc2VjdGlvbi5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICBtYWluX3NlY3Rpb24ucmVtb3ZlQ2hpbGQobWFpbl9zZWN0aW9uLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFiTmFtZVRvKHRhYk5hbWUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItbmFtZVwiKS50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza09iamVjdCwgcHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gIGNvbnN0IHRhc2tfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrX25hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tfbmFtZVwiKTtcbiAgdGFza19uYW1lLnRleHRDb250ZW50ID0gdGFza09iamVjdC5uYW1lO1xuXG4gIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0X25hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgaWYgKHByb2plY3RPYmplY3QubmFtZSA9PT0gXCJub25lXCIpIHtcbiAgICBwcm9qZWN0X25hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9IGVsc2UgcHJvamVjdF9uYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5uYW1lO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgLy9BZGQgZGVzY3JpcHRpb24gZXZlbnQgbGlzdGVuZXJcblxuICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC5kdWVEYXRlO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICBlZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIC8vQWRkIGVkaXQgZXZlbnQgbGlzdGVuZXJcblxuICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcbiAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCJyZW1vdmVcIjtcbiAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFzay5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2spO1xuICAgIHByb2plY3RPYmplY3QucmVtb3ZlVGFzayh0YXNrT2JqZWN0Lm5hbWUpO1xuICB9KTtcblxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tfbmFtZSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQocHJvamVjdF9uYW1lKTtcbiAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrX2FkZGVyLmlkID0gXCJ0YXNrLWFkZGVyXCI7XG5cbiAgY29uc3QgYWRkX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkX3Rhc2tfYnV0dG9uLmlkID0gXCJhZGQtdGFza1wiO1xuICBhZGRfdGFza19idXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGFkZF90YXNrX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgbmFtZV9pbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBjb25zdCBhZGRfdGFza19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZF90YXNrX2Zvcm0uaWQgPSBcInRhc2stZm9ybVwiO1xuICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25faW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIGRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZV9pbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXRhc2tcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXRhc2tcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdE9iamVjdC5hZGRUYXNrKFxuICAgICAgbmFtZV9pbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLFxuICAgICAgZGF0ZV9pbnB1dC52YWx1ZVxuICAgICk7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soXG4gICAgICBwcm9qZWN0T2JqZWN0LnRhc2tzW3Byb2plY3RPYmplY3QudGFza3MubGVuZ3RoIC0gMV0sXG4gICAgICBwcm9qZWN0T2JqZWN0XG4gICAgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbGlzdFwiKS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG5cbiAgY2FuY2VsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0VGFza0FkZGVyKHByb2plY3RPYmplY3QpO1xuICB9KTtcblxuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKG5hbWVfaW5wdXQpO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkYXRlX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19idXR0b24pO1xuICB0YXNrX2FkZGVyLmFwcGVuZENoaWxkKGFkZF90YXNrX2Zvcm0pO1xuXG4gIHJldHVybiB0YXNrX2FkZGVyO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1hZGRlcicpO1xuICB0YXNrX2FkZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza19hZGRlcik7XG4gIFxuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1zZWN0aW9uJylcbiAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgaWYgKHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcmVtb3ZlZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZVwiLCByZW1vdmVkVGFzayk7XG5cbiAgICB0aGlzLnRhc2sgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgRE9Nc3R1ZmYgZnJvbSAnLi9ET01zdHVmZi5qcyc7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzJywnNDU2JywgKG5ldyBEYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpKTtcbnByb2plY3QxLmFkZFRhc2soJzEyMzMnLCc0NTYnLCAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzMzMnLCc0NTYnLCAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xucHJvamVjdExpc3QucHVzaChwcm9qZWN0MSk7XG5cbkRPTXN0dWZmLmxvYWRUYXNrTGlzdChwcm9qZWN0MSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9