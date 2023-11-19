/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

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

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
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

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
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

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
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
/* harmony export */   changeTabTo: () => (/* binding */ changeTabTo),
/* harmony export */   "default": () => (/* binding */ DOMstuff)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");





class DOMstuff {
  static loadTodayTasks() {
    clearMainSection();
    changeTabNameTo("Today");
    const task_list = document.createElement("ul");
    task_list.id = "task-list";
    for (let projectObject of _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      for (let taskObject of projectObject.tasks) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskObject.dueDate, new Date())) {
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
    for (let projectObject of _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      for (let taskObject of projectObject.tasks) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(taskObject.dueDate, new Date())) {
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
    for (let projectObject of _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
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
    if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].some((project) => project.name === name_input.value)) {
      alert("Project name must be unique");
      return;
    }

    const newProjectObject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name_input.value);
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].push(newProjectObject);

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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectList = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);

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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Default");
const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("project1");
const project2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("project2");
const project3 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("project3");

defaultProject.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("task", "project", new Date(), 3));

project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("11", "456", new Date(), 1));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("111", "456", new Date(), 2));
project1.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("1111", "456", new Date(), 3));

project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("22", "456", new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("222", "456", new Date(), 1));
project2.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("2222", "456", new Date(), 1));

project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("33", "456", new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("333", "456", new Date(), 3));
project3.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("3333", "456", new Date(), 3));

_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(defaultProject);
_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(project1);
_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(project2);
_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(project3);

_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadProjectList();
document.querySelector(".project:first-child").click();

const today_task = document.querySelector("#today-task");
today_task.addEventListener("click", () => {
  (0,_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.changeTabTo)(today_task, _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadTodayTasks);
});

const this_week_task = document.querySelector("#this-week-task");
this_week_task.addEventListener("click", () => {
  (0,_DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__.changeTabTo)(this_week_task, _DOMstuff_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadThisWeekTasks);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtBQUN6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJOztBQUV6QixxQkFBcUIsZ0RBQUk7QUFDekIscUJBQXFCLGdEQUFJO0FBQ3pCLHFCQUFxQixnREFBSTs7QUFFekIsbURBQVc7QUFDWCxtREFBVztBQUNYLG1EQUFXO0FBQ1gsbURBQVc7O0FBRVgsb0RBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx5REFBVyxhQUFhLG9EQUFRO0FBQ2xDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUseURBQVcsaUJBQWlCLG9EQUFRO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXksIGlzU2FtZVdlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Nc3R1ZmYge1xuICBzdGF0aWMgbG9hZFRvZGF5VGFza3MoKSB7XG4gICAgY2xlYXJNYWluU2VjdGlvbigpO1xuICAgIGNoYW5nZVRhYk5hbWVUbyhcIlRvZGF5XCIpO1xuICAgIGNvbnN0IHRhc2tfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0YXNrX2xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgIGZvciAobGV0IHByb2plY3RPYmplY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGZvciAobGV0IHRhc2tPYmplY3Qgb2YgcHJvamVjdE9iamVjdC50YXNrcykge1xuICAgICAgICBpZiAoaXNTYW1lRGF5KHRhc2tPYmplY3QuZHVlRGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICAgICAgICBjb25zdCB0b2RheV90YXNrID0gY3JlYXRlVGFza0RPTSh0YXNrT2JqZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICB0b2RheV90YXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi50YXNrLW5hbWVcIlxuICAgICAgICAgICkudGV4dENvbnRlbnQgKz0gYCAoJHtwcm9qZWN0T2JqZWN0Lm5hbWV9KWA7XG4gICAgICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRvZGF5X3Rhc2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrX2xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRUaGlzV2Vla1Rhc2tzKCkge1xuICAgIGNsZWFyTWFpblNlY3Rpb24oKTtcbiAgICBjaGFuZ2VUYWJOYW1lVG8oXCJUaGlzIHdlZWtcIik7XG4gICAgY29uc3QgdGFza19saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRhc2tfbGlzdC5pZCA9IFwidGFzay1saXN0XCI7XG4gICAgZm9yIChsZXQgcHJvamVjdE9iamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgZm9yIChsZXQgdGFza09iamVjdCBvZiBwcm9qZWN0T2JqZWN0LnRhc2tzKSB7XG4gICAgICAgIGlmIChpc1NhbWVXZWVrKHRhc2tPYmplY3QuZHVlRGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICAgICAgICBjb25zdCB0aGlzX3dlZWtfdGFzayA9IGNyZWF0ZVRhc2tET00odGFza09iamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgdGhpc193ZWVrX3Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnRhc2stbmFtZVwiXG4gICAgICAgICAgKS50ZXh0Q29udGVudCArPSBgICgke3Byb2plY3RPYmplY3QubmFtZX0pYDtcbiAgICAgICAgICB0YXNrX2xpc3QuYXBwZW5kQ2hpbGQodGhpc193ZWVrX3Rhc2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrX2xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0TGlzdCgpIHtcbiAgICAvL3JlbmRlciBwcm9qZWN0IGxpc3RcbiAgICBjb25zdCBwcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0T2JqZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdERPTShwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHByb2plY3RfbGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvL3JlbmRlciBwcm9qZWN0IGFkZGVyXG4gICAgcHJvamVjdF9saXN0Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNyZWF0ZVByb2plY3RBZGRlcigpKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkVGFza0xpc3QocHJvamVjdE9iamVjdCkge1xuICAgIGNsZWFyTWFpblNlY3Rpb24oKTtcbiAgICBjaGFuZ2VUYWJOYW1lVG8ocHJvamVjdE9iamVjdC5uYW1lKTtcblxuICAgIC8vcmVuZGVyIHByb2plY3QncyB0YXNrc1xuICAgIGNvbnN0IHRhc2tfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0YXNrX2xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgIGZvciAobGV0IHRhc2tPYmplY3Qgb2YgcHJvamVjdE9iamVjdC50YXNrcykge1xuICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tET00odGFza09iamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICB0YXNrX2xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICAgIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrX2xpc3QpO1xuXG4gICAgLy9yZW5kZXIgdGFzayBhZGRlclxuICAgIG1haW5fc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpblNlY3Rpb24oKSB7XG4gIGNvbnN0IG1haW5fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1zZWN0aW9uXCIpO1xuXG4gIC8vcmVtb3ZlIGV2ZXJ5IGVsZW1lbnQgZnJvbSBtYWluIHNlY3Rpb24gZXhjZXB0IHBhZ2UgaGVhZGVyICh0YWIgbmFtZSlcbiAgd2hpbGUgKG1haW5fc2VjdGlvbi5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICBtYWluX3NlY3Rpb24ucmVtb3ZlQ2hpbGQobWFpbl9zZWN0aW9uLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFiTmFtZVRvKHRhYk5hbWUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItbmFtZVwiKS50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tET00odGFza09iamVjdCwgcHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gIGNvbnN0IHRhc2tfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrX25hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgdGFza19uYW1lLnRleHRDb250ZW50ID0gdGFza09iamVjdC5uYW1lO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBbXCLimIVcIiwgXCLimIUg4piFXCIsIFwi4piFIOKYhSDimIVcIl1bdGFza09iamVjdC5wcmlvcml0eSAtIDFdO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgLy9BZGQgZGVzY3JpcHRpb24gZXZlbnQgbGlzdGVuZXJcblxuICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIHtcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gIGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgLy9BZGQgZWRpdCBldmVudCBsaXN0ZW5lclxuXG4gIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpO1xuICByZW1vdmUudGV4dENvbnRlbnQgPSBcInJlbW92ZVwiO1xuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgcHJvamVjdE9iamVjdC5yZW1vdmVUYXNrKHRhc2tPYmplY3QubmFtZSk7XG4gICAgY2hlY2tFbXB0eVRhc2tNZXNzYWdlKCk7XG4gIH0pO1xuXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza19uYW1lKTtcbiAgdGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB0YXNrLmFwcGVuZENoaWxkKGR1ZV9kYXRlKTtcbiAgdGFzay5hcHBlbmRDaGlsZChlZGl0KTtcbiAgdGFzay5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmplY3QpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QubmFtZTtcblxuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlVGFiVG8ocHJvamVjdCwgRE9Nc3R1ZmYubG9hZFRhc2tMaXN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQWRkZXIocHJvamVjdE9iamVjdCkge1xuICBjb25zdCB0YXNrX2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza19hZGRlci5pZCA9IFwidGFzay1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF90YXNrX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF90YXNrX2J1dHRvbi5pZCA9IFwiYWRkLXRhc2tcIjtcbiAgYWRkX3Rhc2tfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gIGFkZF90YXNrX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF90YXNrX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfdGFza19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Rhc2tfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfdGFza19mb3JtLmlkID0gXCJ0YXNrLWZvcm1cIjtcbiAgYWRkX3Rhc2tfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIG5hbWVfaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uX2lucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbl9pbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbl9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGRhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVfaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlX2lucHV0LmlkID0gXCJkYXRlXCI7XG4gIGRhdGVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGxvd19yYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbG93X3JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIGxvd19yYWRpby5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBsb3dfcmFkaW8uaWQgPSBcImxvd1wiO1xuICBsb3dfcmFkaW8udmFsdWUgPSAxO1xuICBsb3dfcmFkaW8ucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBtZWRpdW1fcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG1lZGl1bV9yYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBtZWRpdW1fcmFkaW8ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgbWVkaXVtX3JhZGlvLmlkID0gXCJtZWRpdW1cIjtcbiAgbWVkaXVtX3JhZGlvLnZhbHVlID0gMjtcbiAgY29uc3QgaGlnaF9yYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaGlnaF9yYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBoaWdoX3JhZGlvLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGhpZ2hfcmFkaW8uaWQgPSBcImhpZ2hcIjtcbiAgaGlnaF9yYWRpby52YWx1ZSA9IDM7XG5cbiAgY29uc3QgbG93X3JhZGlvX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsb3dfcmFkaW9fbGFiZWwuaHRtbEZvciA9IFwibG93XCI7XG4gIGxvd19yYWRpb19sYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGNvbnN0IG1lZGl1bV9yYWRpb19sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbWVkaXVtX3JhZGlvX2xhYmVsLmh0bWxGb3IgPSBcIm1lZGl1bVwiO1xuICBtZWRpdW1fcmFkaW9fbGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBjb25zdCBoaWdoX3JhZGlvX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBoaWdoX3JhZGlvX2xhYmVsLmh0bWxGb3IgPSBcImhpZ2hcIjtcbiAgaGlnaF9yYWRpb19sYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIGNvbnN0IHByaW9yaXR5X2lucHV0X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dfcmFkaW8pO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQobG93X3JhZGlvX2xhYmVsKTtcbiAgcHJpb3JpdHlfaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZGl1bV9yYWRpbyk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWRpdW1fcmFkaW9fbGFiZWwpO1xuICBwcmlvcml0eV9pbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaF9yYWRpbyk7XG4gIHByaW9yaXR5X2lucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoX3JhZGlvX2xhYmVsKTtcblxuICBjb25zdCBjb25maXJtX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1fYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtX2J1dHRvbi5pZCA9IFwiY29uZmlybS10YXNrXCI7XG4gIGNvbmZpcm1fYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY29uc3QgY2FuY2VsX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbF9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbF9idXR0b24uaWQgPSBcImNhbmNlbC10YXNrXCI7XG4gIGNhbmNlbF9idXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGFkZF90YXNrX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAvL2NoZWNrIHVuaXF1ZSB0YXNrIG5hbWUgaW4gYSBwcm9qZWN0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdE9iamVjdC50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLm5hbWUgPT09IG5hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL2FkZCBuZXcgdGFzayB0byB0aGUgcHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBuZXdUYXNrT2JqZWN0ID0gbmV3IFRhc2soXG4gICAgICBuYW1lX2lucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsXG4gICAgICBuZXcgRGF0ZShkYXRlX2lucHV0LnZhbHVlKSxcbiAgICAgICtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddXCIpKS5maW5kKFxuICAgICAgICAocmFkaW8pID0+IHJhZGlvLmNoZWNrZWQgPT09IHRydWVcbiAgICAgICkudmFsdWUgLy9nZXQgdGhlIGNoZWNrZWQgdmFsdWUocHJpb3JpdHkpIGZyb20gYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICApO1xuICAgIHByb2plY3RPYmplY3QuYWRkVGFzayhuZXdUYXNrT2JqZWN0KTtcblxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHRoZSBET01cbiAgICBjb25zdCBuZXdUYXNrRE9NID0gY3JlYXRlVGFza0RPTShuZXdUYXNrT2JqZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbGlzdFwiKS5hcHBlbmRDaGlsZChuZXdUYXNrRE9NKTtcblxuICAgIGNoZWNrRW1wdHlUYXNrTWVzc2FnZSgpO1xuICAgIHJlc2V0VGFza0FkZGVyKHByb2plY3RPYmplY3QpO1xuICB9KTtcblxuICBjYW5jZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRUYXNrQWRkZXIocHJvamVjdE9iamVjdCk7XG4gIH0pO1xuXG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQobmFtZV9pbnB1dCk7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25faW5wdXQpO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5X2lucHV0X2NvbnRhaW5lcik7XG4gIGFkZF90YXNrX2Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybV9idXR0b24pO1xuICBhZGRfdGFza19mb3JtLmFwcGVuZENoaWxkKGNhbmNlbF9idXR0b24pO1xuXG4gIHRhc2tfYWRkZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfYnV0dG9uKTtcbiAgdGFza19hZGRlci5hcHBlbmRDaGlsZChhZGRfdGFza19mb3JtKTtcblxuICByZXR1cm4gdGFza19hZGRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEFkZGVyKCkge1xuICBjb25zdCBwcm9qZWN0X2FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdF9hZGRlci5pZCA9IFwicHJvamVjdC1hZGRlclwiO1xuXG4gIGNvbnN0IGFkZF9wcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgYWRkX3Byb2plY3RfYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBwcm9qZWN0XCI7XG4gIGFkZF9wcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF9wcm9qZWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBhZGRfcHJvamVjdF9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIG5hbWVfaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRfcHJvamVjdF9mb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcbiAgYWRkX3Byb2plY3RfZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBjb25zdCBuYW1lX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lX2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZV9pbnB1dC5pZCA9IFwibmFtZVwiO1xuICBuYW1lX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcbiAgbmFtZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IGNvbmZpcm1fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybV9idXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1fYnV0dG9uLmlkID0gXCJjb25maXJtLXByb2plY3RcIjtcbiAgY29uZmlybV9idXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsX2J1dHRvbi5pZCA9IFwiY2FuY2VsLXByb2plY3RcIjtcbiAgY2FuY2VsX2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkX3Byb2plY3RfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jaGVjayB1bmlxdWUgcHJvamVjdCBuYW1lXG4gICAgaWYgKHByb2plY3RMaXN0LnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZV9pbnB1dC52YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3RPYmplY3QgPSBuZXcgUHJvamVjdChuYW1lX2lucHV0LnZhbHVlKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3RPYmplY3QpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERPTSA9IGNyZWF0ZVByb2plY3RET00obmV3UHJvamVjdE9iamVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERPTSk7XG5cbiAgICByZXNldFByb2plY3RBZGRlcigpO1xuICB9KTtcblxuICBjYW5jZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRQcm9qZWN0QWRkZXIoKTtcbiAgfSk7XG5cbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChuYW1lX2lucHV0KTtcbiAgYWRkX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChjb25maXJtX2J1dHRvbik7XG4gIGFkZF9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHRvbik7XG5cbiAgcHJvamVjdF9hZGRlci5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9idXR0b24pO1xuICBwcm9qZWN0X2FkZGVyLmFwcGVuZENoaWxkKGFkZF9wcm9qZWN0X2Zvcm0pO1xuXG4gIHJldHVybiBwcm9qZWN0X2FkZGVyO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSB7XG4gIC8vcmVtb3ZlIHRhc2sgYWRkZXIgZnJvbSB0aGUgRE9NXG4gIGNvbnN0IHRhc2tfYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stYWRkZXJcIik7XG4gIHRhc2tfYWRkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrX2FkZGVyKTtcblxuICAvL2NyZWF0ZSBhbmQgYWRkIHRhc2sgYWRkZXIgdG8gdGhlIERPTVxuICBjb25zdCBtYWluX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tc2VjdGlvblwiKTtcbiAgbWFpbl9zZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGRlcihwcm9qZWN0T2JqZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvamVjdEFkZGVyKCkge1xuICAvL3JlbW92ZSBwcm9qZWN0IGFkZGVyIGZyb20gdGhlIERPTVxuICBjb25zdCBwcm9qZWN0X2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWFkZGVyXCIpO1xuICBwcm9qZWN0X2FkZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocHJvamVjdF9hZGRlcik7XG5cbiAgLy9jcmVhdGUgYW5kIGFkZCBwcm9qZWN0IGFkZGVyIHRvIHRoZSBET01cbiAgY29uc3QgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gIHByb2plY3RfbGlzdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjcmVhdGVQcm9qZWN0QWRkZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYlRvKG5hdkl0ZW0sIGxvYWRUYWJGdW5jdGlvbiwgcHJvamVjdE9iamVjdCA9IHVuZGVmaW5lZCkge1xuICBpZiAoIW5hdkl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib24tcGFnZVwiKSkge1xuICAgIGxvYWRUYWJGdW5jdGlvbihwcm9qZWN0T2JqZWN0KTtcbiAgICBjaGVja0VtcHR5VGFza01lc3NhZ2UoKTtcbiAgICBjb25zdCBwcmV2aW91c19wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbi1wYWdlXCIpO1xuICAgIGlmIChwcmV2aW91c19wYWdlKSBwcmV2aW91c19wYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJvbi1wYWdlXCIpO1xuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm9uLXBhZ2VcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tFbXB0eVRhc2tNZXNzYWdlKCkge1xuICBjb25zdCB0YXNrX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbGlzdFwiKTtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIGNvbnN0IG5vX3Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbm9fdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgbm9fdGFzay50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgaGVyZS5cIjtcbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICB0YXNrX2xpc3QuYXBwZW5kQ2hpbGQobm9fdGFzayk7XG4gIH0gZWxzZSBpZiAodGFza19saXN0LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSBcIk5vIHRhc2tzIGhlcmUuXCIpIHtcbiAgICB0YXNrX2xpc3QucmVtb3ZlQ2hpbGQodGFza19saXN0LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFuZ2VUYWJUbyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAvL3N0cmluZ1xuICAgIHRoaXMudGFza3MgPSBbXTsgLy9hcnJheVxuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza09iamVjdCkgeyBcbiAgICB0aGlzLnRhc2tzLnB1c2godGFza09iamVjdCk7XG4gICAgY29uc29sZS5sb2coXCJBZGRcIiwgdGFza09iamVjdCk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcmVtb3ZlZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZVwiLCByZW1vdmVkVGFzayk7XG5cbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpO1xuICB9XG59XG4iLCJjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExpc3Q7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vc3RyaW5nXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyAvLyBzdHJpbmdcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlOyAvL0RhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7IC8vbnVtYmVyIDEsMiwzXG4gIH1cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG4gIHNldFByaW9kaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IERPTXN0dWZmLCB7IGNoYW5nZVRhYlRvIH0gZnJvbSBcIi4vRE9Nc3R1ZmYuanNcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcInByb2plY3QxXCIpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcInByb2plY3QyXCIpO1xuY29uc3QgcHJvamVjdDMgPSBuZXcgUHJvamVjdChcInByb2plY3QzXCIpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKG5ldyBUYXNrKFwidGFza1wiLCBcInByb2plY3RcIiwgbmV3IERhdGUoKSwgMykpO1xuXG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKFwiMTFcIiwgXCI0NTZcIiwgbmV3IERhdGUoKSwgMSkpO1xucHJvamVjdDEuYWRkVGFzayhuZXcgVGFzayhcIjExMVwiLCBcIjQ1NlwiLCBuZXcgRGF0ZSgpLCAyKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKFwiMTExMVwiLCBcIjQ1NlwiLCBuZXcgRGF0ZSgpLCAzKSk7XG5cbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soXCIyMlwiLCBcIjQ1NlwiLCBuZXcgRGF0ZSgpLCAxKSk7XG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKFwiMjIyXCIsIFwiNDU2XCIsIG5ldyBEYXRlKCksIDEpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soXCIyMjIyXCIsIFwiNDU2XCIsIG5ldyBEYXRlKCksIDEpKTtcblxucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzayhcIjMzXCIsIFwiNDU2XCIsIG5ldyBEYXRlKCksIDMpKTtcbnByb2plY3QzLmFkZFRhc2sobmV3IFRhc2soXCIzMzNcIiwgXCI0NTZcIiwgbmV3IERhdGUoKSwgMykpO1xucHJvamVjdDMuYWRkVGFzayhuZXcgVGFzayhcIjMzMzNcIiwgXCI0NTZcIiwgbmV3IERhdGUoKSwgMykpO1xuXG5wcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbnByb2plY3RMaXN0LnB1c2gocHJvamVjdDEpO1xucHJvamVjdExpc3QucHVzaChwcm9qZWN0Mik7XG5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QzKTtcblxuRE9Nc3R1ZmYubG9hZFByb2plY3RMaXN0KCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Q6Zmlyc3QtY2hpbGRcIikuY2xpY2soKTtcblxuY29uc3QgdG9kYXlfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktdGFza1wiKTtcbnRvZGF5X3Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlVGFiVG8odG9kYXlfdGFzaywgRE9Nc3R1ZmYubG9hZFRvZGF5VGFza3MpO1xufSk7XG5cbmNvbnN0IHRoaXNfd2Vla190YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGlzLXdlZWstdGFza1wiKTtcbnRoaXNfd2Vla190YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZVRhYlRvKHRoaXNfd2Vla190YXNrLCBET01zdHVmZi5sb2FkVGhpc1dlZWtUYXNrcyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==