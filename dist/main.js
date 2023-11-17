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

_DOMstuff_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(project1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25JNkI7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0U7O0FBRXJDO0FBQ0EscUJBQXFCLG1EQUFPO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFBUSx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Nc3R1ZmYge1xuICBzdGF0aWMgbG9hZFByb2plY3QocHJvamVjdE9iamVjdCkge1xuICAgIHRoaXMuI2NsZWFyTWFpblNlY3Rpb24oKTtcbiAgICB0aGlzLiNjaGFuZ2VUYWJOYW1lVG8ocHJvamVjdE9iamVjdC5uYW1lKTtcbiAgICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFza19saXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcblxuICAgIGZvciAobGV0IHRhc2tPYmplY3Qgb2YgcHJvamVjdE9iamVjdC50YXNrcykge1xuICAgICAgY29uc29sZS5sb2codGFza09iamVjdCk7XG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgY29uc3QgdGFza19uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrX25hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tfbmFtZVwiKTtcbiAgICAgIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcblxuICAgICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwcm9qZWN0X25hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICAgIGlmIChwcm9qZWN0T2JqZWN0Lm5hbWUgPT09IFwiY29tbW9uXCIpIHtcbiAgICAgICAgcHJvamVjdF9uYW1lLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIH0gZWxzZSBwcm9qZWN0X25hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqZWN0Lm5hbWU7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJkZXNjcmlwdGlvblwiO1xuICAgICAgLy9BZGQgZGVzY3JpcHRpb24gZXZlbnQgbGlzdGVuZXJcblxuICAgICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC5kdWVEYXRlO1xuXG4gICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAvL0FkZCBlZGl0IGV2ZW50IGxpc3RlbmVyXG5cbiAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCI7XG4gICAgICAvL0FkZCByZW1vdmUgZXZlbnQgbGlzdGVuZXJcblxuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrX25hbWUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChwcm9qZWN0X25hbWUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGR1ZV9kYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgIHRhc2tfbGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQodGFza19saXN0KTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy4jbG9hZFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG4gIH1cblxuICBzdGF0aWMgI2NsZWFyTWFpblNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXNlY3Rpb25cIik7XG4gICAgd2hpbGUgKG1haW5fc2VjdGlvbi5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICAgIG1haW5fc2VjdGlvbi5yZW1vdmVDaGlsZChtYWluX3NlY3Rpb24ubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljICNjaGFuZ2VUYWJOYW1lVG8odGFiTmFtZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xuICB9XG5cbiAgc3RhdGljICNsb2FkVGFza0FkZGVyKHByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrX2FkZGVyLmlkID0gXCJ0YXNrLWFkZGVyXCI7XG5cbiAgICBjb25zdCBhZGRfdGFza19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZF90YXNrX2J1dHRvbi5pZCA9IFwiYWRkLXRhc2tcIjtcbiAgICBhZGRfdGFza19idXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgICBhZGRfdGFza19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZF90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGFkZF90YXNrX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBuYW1lX2lucHV0LmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRfdGFza19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkX3Rhc2tfZm9ybS5pZCA9IFwidGFzay1mb3JtXCI7XG4gICAgYWRkX3Rhc2tfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZV9pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICAgIG5hbWVfaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgIG5hbWVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb25faW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25faW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlX2lucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlX2lucHV0LmlkID0gXCJkYXRlXCI7XG4gICAgZGF0ZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgY29uZmlybV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbmZpcm1fYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXRhc2tcIjtcbiAgICBjb25maXJtX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgY29uc3QgY2FuY2VsX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxfYnV0dG9uLmlkID0gXCJjYW5jZWwtdGFza1wiO1xuICAgIGNhbmNlbF9idXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgYWRkX3Rhc2tfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgIHByb2plY3RPYmplY3QuYWRkVGFzayhcbiAgICAgICAgbmFtZV9pbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsXG4gICAgICAgIGRhdGVfaW5wdXQudmFsdWVcbiAgICAgICk7XG4gICAgICB0aGlzLmxvYWRQcm9qZWN0KHByb2plY3RPYmplY3QpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0T2JqZWN0KTtcbiAgICB9KTtcblxuICAgIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQobmFtZV9pbnB1dCk7XG4gICAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gICAgYWRkX3Rhc2tfZm9ybS5hcHBlbmRDaGlsZChkYXRlX2lucHV0KTtcbiAgICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1fYnV0dG9uKTtcbiAgICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gICAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19idXR0b24pO1xuICAgIHRhc2tfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfZm9ybSk7XG5cbiAgICByZXR1cm4gdGFza19hZGRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgaWYgKHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcmVtb3ZlZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZVwiLCByZW1vdmVkVGFzayk7XG5cbiAgICB0aGlzLnRhc2sgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgRE9Nc3R1ZmYgZnJvbSAnLi9ET01zdHVmZi5qcyc7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzJywnNDU2JywgKG5ldyBEYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpKTtcbnByb2plY3QxLmFkZFRhc2soJzEyMzMnLCc0NTYnLCAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xucHJvamVjdDEuYWRkVGFzaygnMTIzMzMnLCc0NTYnLCAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xuXG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QxKTtcblxuRE9Nc3R1ZmYubG9hZFByb2plY3QocHJvamVjdDEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==