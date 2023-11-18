/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");




class DOMstuff {
  static loadTodayTasks(projectList) {
    clearMainSection();
    changeTabNameTo("Today");
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let projectObject of projectList) {
      for (let taskObject of projectObject.tasks) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(taskObject.dueDate, new Date())) {
          const today_task = createTaskDOM(taskObject, projectObject);
          today_task.querySelector(".task-name").textContent += ` (${projectObject.name})`;
          task_list.appendChild(today_task);
        }
      }
    }
    const main_section = document.querySelector("#main-section");
    main_section.appendChild(task_list);
  }

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
      const previous_page = document.querySelector(".onpage");
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


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

const today_task = document.querySelector("#today-task");
today_task.addEventListener("click", () => {
  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadTodayTasks(projectList);
  if (!today_task.classList.contains('onpage')) {
    const previous_page = document.querySelector(".project.onpage");
    if (previous_page) previous_page.classList.remove("onpage");
    today_task.classList.add("onpage");
  }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZ0Q7QUFDUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsMkJBQTJCLGdFQUFVO0FBQ3JDLDRCQUE0QixnRUFBVTtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCd0Q7QUFDQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDs7QUFFQTtBQUNBLGtDQUFrQyw2RUFBTztBQUN6QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRG1DO0FBQ047QUFDb0I7O0FBRWxDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFTO0FBQ3JCO0FBQ0EscUVBQXFFLG1CQUFtQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixnREFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbURBQU87O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMVZlO0FBQ2Y7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBLHNCQUFzQjtBQUN0QixvQ0FBb0M7QUFDcEMsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDTjtBQUNROztBQUVyQzs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMscUJBQXFCLG1EQUFPO0FBQzVCLHFCQUFxQixtREFBTztBQUM1QixxQkFBcUIsbURBQU87O0FBRTVCLDJCQUEyQixnREFBSTs7QUFFL0IscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7O0FBRXpCLHFCQUFxQixnREFBSTtBQUN6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJOztBQUV6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXksIGlzU2FtZVdlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Nc3R1ZmYge1xuICBzdGF0aWMgbG9hZFRvZGF5VGFza3MocHJvamVjdExpc3QpIHtcbiAgICBjbGVhck1haW5TZWN0aW9uKCk7XG4gICAgY2hhbmdlVGFiTmFtZVRvKFwiVG9kYXlcIik7XG4gICAgY29uc3QgdGFza19saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRhc2tfbGlzdC5pZCA9IFwidGFzay1saXN0XCI7XG4gICAgZm9yIChsZXQgcHJvamVjdE9iamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgZm9yIChsZXQgdGFza09iamVjdCBvZiBwcm9qZWN0T2JqZWN0LnRhc2tzKSB7XG4gICAgICAgIGlmIChpc1NhbWVEYXkodGFza09iamVjdC5kdWVEYXRlLCBuZXcgRGF0ZSgpKSkge1xuICAgICAgICAgIGNvbnN0IHRvZGF5X3Rhc2sgPSBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgICAgIHRvZGF5X3Rhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIikudGV4dENvbnRlbnQgKz0gYCAoJHtwcm9qZWN0T2JqZWN0Lm5hbWV9KWA7XG4gICAgICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRvZGF5X3Rhc2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrX2xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCkge1xuICAgIC8vcmVuZGVyIHByb2plY3QgbGlzdFxuICAgIGNvbnN0IHByb2plY3RfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICAgIGZvciAobGV0IHByb2plY3RPYmplY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmplY3QpO1xuICAgICAgcHJvamVjdF9saXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIC8vcmVuZGVyIHByb2plY3QgYWRkZXJcbiAgICBwcm9qZWN0X2xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFRhc2tMaXN0KHByb2plY3RPYmplY3QpIHtcbiAgICBjbGVhck1haW5TZWN0aW9uKCk7XG4gICAgY2hhbmdlVGFiTmFtZVRvKHByb2plY3RPYmplY3QubmFtZSk7XG5cbiAgICAvL3JlbmRlciBwcm9qZWN0J3MgdGFza3NcbiAgICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFza19saXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICBmb3IgKGxldCB0YXNrT2JqZWN0IG9mIHByb2plY3RPYmplY3QudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH1cbiAgICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQodGFza19saXN0KTtcblxuICAgIC8vcmVuZGVyIHRhc2sgYWRkZXJcbiAgICBtYWluX3NlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZGVyKHByb2plY3RPYmplY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck1haW5TZWN0aW9uKCkge1xuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcblxuICAvL3JlbW92ZSBldmVyeSBlbGVtZW50IGZyb20gbWFpbiBzZWN0aW9uIGV4Y2VwdCBwYWdlIGhlYWRlciAodGFiIG5hbWUpXG4gIHdoaWxlIChtYWluX3NlY3Rpb24uY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgbWFpbl9zZWN0aW9uLnJlbW92ZUNoaWxkKG1haW5fc2VjdGlvbi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYk5hbWVUbyh0YWJOYW1lKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHRhc2tPYmplY3QsIHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBjb25zdCB0YXNrX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza19uYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gIHRhc2tfbmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gIHN3aXRjaCAodGFza09iamVjdC5wcmlvcml0eSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCLimIVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCLimIUg4piFXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwi4piFIOKYhSDimIVcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJkZXNjcmlwdGlvblwiO1xuICAvL0FkZCBkZXNjcmlwdGlvbiBldmVudCBsaXN0ZW5lclxuXG4gIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIiwge1xuICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICB9KTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAvL0FkZCBlZGl0IGV2ZW50IGxpc3RlbmVyXG5cbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIik7XG4gIHJlbW92ZS50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCI7XG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2sucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICBwcm9qZWN0T2JqZWN0LnJlbW92ZVRhc2sodGFza09iamVjdC5uYW1lKTtcbiAgfSk7XG5cbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrX25hbWUpO1xuICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZHVlX2RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdE9iamVjdCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5uYW1lO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25wYWdlXCIpKSB7XG4gICAgICBET01zdHVmZi5sb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCk7XG4gICAgICBjb25zdCBwcmV2aW91c19wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbnBhZ2VcIik7XG4gICAgICBpZiAocHJldmlvdXNfcGFnZSkgcHJldmlvdXNfcGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwib25wYWdlXCIpO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwib25wYWdlXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza19hZGRlci5pZCA9IFwidGFzay1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF90YXNrX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF90YXNrX2J1dHRvbi5pZCA9IFwiYWRkLXRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gIGFkZF90YXNrX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Rhc2tfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfdGFza19mb3JtLmlkID0gXCJ0YXNrLWZvcm1cIjtcbiAgYWRkX3Rhc2tfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uX2lucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbl9pbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbl9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGRhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVfaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlX2lucHV0LmlkID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGxvd19yYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbG93X3JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIGxvd19yYWRpby5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBsb3dfcmFkaW8uaWQgPSBcImxvd1wiO1xuICBsb3dfcmFkaW8udmFsdWUgPSAxO1xuICBsb3dfcmFkaW8ucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBtZWRpdW1fcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG1lZGl1bV9yYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBtZWRpdW1fcmFkaW8ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgbWVkaXVtX3JhZGlvLmlkID0gXCJtZWRpdW1cIjtcbiAgbWVkaXVtX3JhZGlvLnZhbHVlID0gMjtcbiAgY29uc3QgaGlnaF9yYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaGlnaF9yYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBoaWdoX3JhZGlvLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGhpZ2hfcmFkaW8uaWQgPSBcImhpZ2hcIjtcbiAgaGlnaF9yYWRpby52YWx1ZSA9IDM7XG5cbiAgY29uc3QgbG93X3JhZGlvX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsb3dfcmFkaW9fbGFiZWwuaHRtbEZvciA9IFwibG93XCI7XG4gIGxvd19yYWRpb19sYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGNvbnN0IG1lZGl1bV9yYWRpb19sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbWVkaXVtX3JhZGlvX2xhYmVsLmh0bWxGb3IgPSBcIm1lZGl1bVwiO1xuICBtZWRpdW1fcmFkaW9fbGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBjb25zdCBoaWdoX3JhZGlvX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBoaWdoX3JhZGlvX2xhYmVsLmh0bWxGb3IgPSBcImhpZ2hcIjtcbiAgaGlnaF9yYWRpb19sYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIGNvbnN0IHByaW9yaXR5X2lucHV0X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dfcmFkaW8pO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQobG93X3JhZGlvX2xhYmVsKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZGl1bV9yYWRpbyk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWRpdW1fcmFkaW9fbGFiZWwpO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaF9yYWRpbyk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoX3JhZGlvX2xhYmVsKTtcblxuICBjb25zdCBjb25maXJtX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1fYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtX2J1dHRvbi5pZCA9IFwiY29uZmlybS10YXNrXCI7XG4gIGNvbmZpcm1fYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY29uc3QgY2FuY2VsX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbF9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbF9idXR0b24uaWQgPSBcImNhbmNlbC10YXNrXCI7XG4gIGNhbmNlbF9idXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGFkZF90YXNrX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAvL2NoZWNrIHVuaXF1ZSB0YXNrIG5hbWUgaW4gYSBwcm9qZWN0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdE9iamVjdC50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLm5hbWUgPT09IG5hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL2FkZCBuZXcgdGFzayB0byB0aGUgcHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBuZXdUYXNrT2JqZWN0ID0gbmV3IFRhc2soXG4gICAgICBuYW1lX2lucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsXG4gICAgICBuZXcgRGF0ZShkYXRlX2lucHV0LnZhbHVlKSxcbiAgICAgICtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddXCIpKS5maW5kKFxuICAgICAgICAocmFkaW8pID0+IHJhZGlvLmNoZWNrZWQgPT09IHRydWVcbiAgICAgICkudmFsdWUgLy9nZXQgdGhlIGNoZWNrZWQgdmFsdWUocHJpb3JpdHkpIGZyb20gYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICApO1xuICAgIHByb2plY3RPYmplY3QuYWRkVGFzayhuZXdUYXNrT2JqZWN0KTtcblxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHRoZSBET01cbiAgICBjb25zdCBuZXdUYXNrRE9NID0gY3JlYXRlVGFza0RPTShuZXdUYXNrT2JqZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbGlzdFwiKS5hcHBlbmRDaGlsZChuZXdUYXNrRE9NKTtcblxuICAgIHJlc2V0VGFza0FkZGVyKHByb2plY3RPYmplY3QpO1xuICB9KTtcblxuICBjYW5jZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQobmFtZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25faW5wdXQpO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5X2lucHV0X2NvbnRhaW5lcik7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybV9idXR0b24pO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gIHRhc2tfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfYnV0dG9uKTtcbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19mb3JtKTtcblxuICByZXR1cm4gdGFza19hZGRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KSB7XG4gIGNvbnN0IHByb2plY3RfYWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0X2FkZGVyLmlkID0gXCJwcm9qZWN0LWFkZGVyXCI7XG5cbiAgY29uc3QgYWRkX3Byb2plY3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkX3Byb2plY3RfYnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdFwiO1xuICBhZGRfcHJvamVjdF9idXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHByb2plY3RcIjtcbiAgYWRkX3Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkX3Byb2plY3RfYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGFkZF9wcm9qZWN0X2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgbmFtZV9pbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBjb25zdCBhZGRfcHJvamVjdF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uaWQgPSBcInByb2plY3QtZm9ybVwiO1xuICBhZGRfcHJvamVjdF9mb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIGNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVfaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lX2lucHV0LmlkID0gXCJuYW1lXCI7XG4gIG5hbWVfaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICBuYW1lX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgY29uZmlybV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtX2J1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybV9idXR0b24uaWQgPSBcImNvbmZpcm0tcHJvamVjdFwiO1xuICBjb25maXJtX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbnN0IGNhbmNlbF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxfYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWxfYnV0dG9uLmlkID0gXCJjYW5jZWwtcHJvamVjdFwiO1xuICBjYW5jZWxfYnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBhZGRfcHJvamVjdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2NoZWNrIHVuaXF1ZSBwcm9qZWN0IG5hbWVcbiAgICBpZiAocHJvamVjdExpc3Quc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lX2lucHV0LnZhbHVlKSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgbXVzdCBiZSB1bmlxdWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdE9iamVjdCA9IG5ldyBQcm9qZWN0KG5hbWVfaW5wdXQudmFsdWUpO1xuXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0T2JqZWN0KTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RE9NID0gY3JlYXRlUHJvamVjdERPTShuZXdQcm9qZWN0T2JqZWN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RE9NKTtcblxuICAgIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KTtcbiAgfSk7XG5cbiAgY2FuY2VsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KTtcbiAgfSk7XG5cbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgcHJvamVjdF9hZGRlci5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9idXR0b24pO1xuICBwcm9qZWN0X2FkZGVyLmFwcGVuZENoaWxkKGFkZF9wcm9qZWN0X2Zvcm0pO1xuXG4gIHJldHVybiBwcm9qZWN0X2FkZGVyO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIC8vcmVtb3ZlIHRhc2sgYWRkZXIgZnJvbSB0aGUgRE9NXG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stYWRkZXJcIik7XG4gIHRhc2tfYWRkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrX2FkZGVyKTtcblxuICAvL2NyZWF0ZSBhbmQgYWRkIHRhc2sgYWRkZXIgdG8gdGhlIERPTVxuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvamVjdEFkZGVyKHByb2plY3RMaXN0KSB7XG4gIC8vcmVtb3ZlIHByb2plY3QgYWRkZXIgZnJvbSB0aGUgRE9NXG4gIGNvbnN0IHByb2plY3RfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWRkZXJcIik7XG4gIHByb2plY3RfYWRkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwcm9qZWN0X2FkZGVyKTtcblxuICAvL2NyZWF0ZSBhbmQgYWRkIHByb2plY3QgYWRkZXIgdG8gdGhlIERPTVxuICBjb25zdCBwcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdF9saXN0Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICBcImFmdGVyZW5kXCIsXG4gICAgY3JlYXRlUHJvamVjdEFkZGVyKHByb2plY3RMaXN0KVxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAvL3N0cmluZ1xuICAgIHRoaXMudGFza3MgPSBbXTsgLy9hcnJheVxuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza09iamVjdCkgeyBcbiAgICB0aGlzLnRhc2tzLnB1c2godGFza09iamVjdCk7XG4gICAgY29uc29sZS5sb2coXCJBZGRcIiwgdGFza09iamVjdCk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcmVtb3ZlZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZVwiLCByZW1vdmVkVGFzayk7XG5cbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTsgLy9zdHJpbmdcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IC8vIHN0cmluZ1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IC8vRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgLy9udW1iZXIgMSwyLDNcbiAgfVxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cbiAgc2V0UHJpb2RpdHkobmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBET01zdHVmZiBmcm9tICcuL0RPTXN0dWZmLmpzJztcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgoJ0RlZmF1bHQnKSk7XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgncHJvamVjdDInKTtcbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ3Byb2plY3QzJyk7XG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2soJ3Rhc2snLCAncHJvamVjdCcsIG5ldyBEYXRlKCksIDMpKTtcblxucHJvamVjdDEuYWRkVGFzayhuZXcgVGFzaygnMTEnLCc0NTYnLCBuZXcgRGF0ZSgpLCAxKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTEnLCc0NTYnLCBuZXcgRGF0ZSgpLCAyKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCcxMTExJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xuXG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKCcyMicsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMicsJzQ1NicsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJzIyMjInLCc0NTYnLCBuZXcgRGF0ZSgpLCAxKSk7XG5cbnByb2plY3QzLmFkZFRhc2sobmV3IFRhc2soJzMzJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzJywnNDU2JywgbmV3IERhdGUoKSwgMykpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzaygnMzMzMycsJzQ1NicsIG5ldyBEYXRlKCksIDMpKTtcblxucHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QxKTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDIpO1xucHJvamVjdExpc3QucHVzaChwcm9qZWN0Myk7XG5cbkRPTXN0dWZmLmxvYWRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdDpmaXJzdC1jaGlsZCcpLmNsaWNrKCk7XG5cbmNvbnN0IHRvZGF5X3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LXRhc2tcIik7XG50b2RheV90YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIERPTXN0dWZmLmxvYWRUb2RheVRhc2tzKHByb2plY3RMaXN0KTtcbiAgaWYgKCF0b2RheV90YXNrLmNsYXNzTGlzdC5jb250YWlucygnb25wYWdlJykpIHtcbiAgICBjb25zdCBwcmV2aW91c19wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Lm9ucGFnZVwiKTtcbiAgICBpZiAocHJldmlvdXNfcGFnZSkgcHJldmlvdXNfcGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwib25wYWdlXCIpO1xuICAgIHRvZGF5X3Rhc2suY2xhc3NMaXN0LmFkZChcIm9ucGFnZVwiKTtcbiAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=