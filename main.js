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
  due_date.textContent = taskObject.dueDate.toLocaleDateString();


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
      new Date(date_input.value)
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
project1.addTask('123','456', new Date());
project1.addTask('1233','456', new Date());
project1.addTask('12333','456', new Date());
projectList.push(project1);

_DOMstuff_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadTaskList(project1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUo2Qjs7QUFFZDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDRTs7QUFFckM7QUFDQSxxQkFBcUIsbURBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQVEsd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTXN0dWZmIHtcbiAgc3RhdGljIGxvYWRQcm9qZWN0TGlzdCgpIHt9XG4gIHN0YXRpYyBsb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCkge1xuICAgIGNsZWFyTWFpblNlY3Rpb24oKTtcbiAgICBjaGFuZ2VUYWJOYW1lVG8ocHJvamVjdE9iamVjdC5uYW1lKTtcbiAgICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFza19saXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcblxuICAgIGZvciAobGV0IHRhc2tPYmplY3Qgb2YgcHJvamVjdE9iamVjdC50YXNrcykge1xuICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza09iamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICB0YXNrX2xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gICAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tfbGlzdCk7XG4gICAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluU2VjdGlvbigpIHtcbiAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gIHdoaWxlIChtYWluX3NlY3Rpb24uY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgbWFpbl9zZWN0aW9uLnJlbW92ZUNoaWxkKG1haW5fc2VjdGlvbi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYk5hbWVUbyh0YWJOYW1lKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBjb25zdCB0YXNrX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza19uYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX25hbWVcIik7XG4gIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcblxuICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdF9uYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIGlmIChwcm9qZWN0T2JqZWN0Lm5hbWUgPT09IFwibm9uZVwiKSB7XG4gICAgcHJvamVjdF9uYW1lLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHByb2plY3RfbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QubmFtZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIC8vQWRkIGRlc2NyaXB0aW9uIGV2ZW50IGxpc3RlbmVyXG5cbiAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlX2RhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblxuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICBlZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIC8vQWRkIGVkaXQgZXZlbnQgbGlzdGVuZXJcblxuICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcbiAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCJyZW1vdmVcIjtcbiAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFzay5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2spO1xuICAgIHByb2plY3RPYmplY3QucmVtb3ZlVGFzayh0YXNrT2JqZWN0Lm5hbWUpO1xuICB9KTtcblxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tfbmFtZSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQocHJvamVjdF9uYW1lKTtcbiAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrX2FkZGVyLmlkID0gXCJ0YXNrLWFkZGVyXCI7XG5cbiAgY29uc3QgYWRkX3Rhc2tfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkX3Rhc2tfYnV0dG9uLmlkID0gXCJhZGQtdGFza1wiO1xuICBhZGRfdGFza19idXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkX3Rhc2tfYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGFkZF90YXNrX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgbmFtZV9pbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBjb25zdCBhZGRfdGFza19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZF90YXNrX2Zvcm0uaWQgPSBcInRhc2stZm9ybVwiO1xuICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25faW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIGRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZV9pbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXRhc2tcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXRhc2tcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdE9iamVjdC5hZGRUYXNrKFxuICAgICAgbmFtZV9pbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLFxuICAgICAgbmV3IERhdGUoZGF0ZV9pbnB1dC52YWx1ZSlcbiAgICApO1xuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgcHJvamVjdE9iamVjdC50YXNrc1twcm9qZWN0T2JqZWN0LnRhc2tzLmxlbmd0aCAtIDFdLFxuICAgICAgcHJvamVjdE9iamVjdFxuICAgICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWxpc3RcIikuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGNhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG5cbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybV9idXR0b24pO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gIHRhc2tfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfYnV0dG9uKTtcbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19mb3JtKTtcblxuICByZXR1cm4gdGFza19hZGRlcjtcbn1cblxuZnVuY3Rpb24gcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYWRkZXInKTtcbiAgdGFza19hZGRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tfYWRkZXIpO1xuICBcbiAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpXG4gIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkpO1xufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIGlmICh0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2submFtZSA9PT0gdGFza05hbWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHJlbW92ZWRUYXNrID0gdGhpcy50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJSZW1vdmVcIiwgcmVtb3ZlZFRhc2spO1xuXG4gICAgdGhpcy50YXNrID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cbiAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH1cbiAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IERPTXN0dWZmIGZyb20gJy4vRE9Nc3R1ZmYuanMnO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgncHJvamVjdDEnKTtcbnByb2plY3QxLmFkZFRhc2soJzEyMycsJzQ1NicsIG5ldyBEYXRlKCkpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzMycsJzQ1NicsIG5ldyBEYXRlKCkpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzMzMnLCc0NTYnLCBuZXcgRGF0ZSgpKTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDEpO1xuXG5ET01zdHVmZi5sb2FkVGFza0xpc3QocHJvamVjdDEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==