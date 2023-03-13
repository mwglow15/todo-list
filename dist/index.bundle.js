"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");


console.log('test')

document.addEventListener('DOMContentLoaded', _ui_js__WEBPACK_IMPORTED_MODULE_0__["default"].init)

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
class project {
  constructor(name) {
    this.name = name
    this.tasks = []
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getTasks() {
    return this.tasks
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
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
class task {
  constructor(name, dueDate = 'No Date') {
    this.name = name
    this.date = dueDate
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDueDate(date) {
    this.date = date
  }

  getDueDate() {
    return this.date
  }
}

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class todoList {
  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

  getProjects() {
    return this.projects
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");




class UI {

  static init() {
    const todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_2__["default"]()

    todoList.addProject(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'))
    todoList.addProject(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'))
    todoList.addProject(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Tomorrow'))

    UI.initProjectButtons()
  }

  // Project Event Listeners
  static initProjectButtons() {
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const customProjects = document.querySelectorAll('.project.custom-project')
    const addProjectButton = document.querySelector('#new-project')
    
    inbox.addEventListener('click', this.showProject)
    today.addEventListener('click', this.showProject)
    tomorrow.addEventListener('click', this.showProject)
    customProjects.forEach(project => {
      project.addEventListener('click', this.showProject)
    })

    addProjectButton.addEventListener('click', this.newProject())
  }

  static newProject() {

  }

  static showProject(e) {
    project = this.children[1].textContent
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCOztBQUV4Qjs7QUFFQSw4Q0FBOEMsbURBQU87Ozs7Ozs7Ozs7Ozs7O0FDSnRDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDTjtBQUNROztBQUVyQjs7QUFFZjtBQUNBLHlCQUF5QixvREFBUTs7QUFFakMsNEJBQTRCLG1EQUFPO0FBQ25DLDRCQUE0QixtREFBTztBQUNuQyw0QkFBNEIsbURBQU87O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcblxuY29uc29sZS5sb2coJ3Rlc3QnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuaW5pdCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUgPSAnTm8gRGF0ZScpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBzZXREdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gIH1cblxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVcbiAgfVxufSIsIlxuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5cbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuICAgIHRvZG9MaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnVG9tb3Jyb3cnKSlcblxuICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gIH1cblxuICAvLyBQcm9qZWN0IEV2ZW50IExpc3RlbmVyc1xuICBzdGF0aWMgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuaW5ib3gnKVxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9kYXknKVxuICAgIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9tb3Jyb3cnKVxuICAgIGNvbnN0IGN1c3RvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QuY3VzdG9tLXByb2plY3QnKVxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKVxuICAgIFxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93UHJvamVjdClcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1Byb2plY3QpXG4gICAgdG9tb3Jyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dQcm9qZWN0KVxuICAgIGN1c3RvbVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93UHJvamVjdClcbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV3UHJvamVjdCgpKVxuICB9XG5cbiAgc3RhdGljIG5ld1Byb2plY3QoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBzaG93UHJvamVjdChlKSB7XG4gICAgcHJvamVjdCA9IHRoaXMuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==