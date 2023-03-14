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
    console.log(e.target.parentNode.children[1].textContent)
    const project = e.target.parentNode.children[1].textContent
    
    const tasksContainer = document.querySelector('#project-container')

    tasksContainer.innerHTML = `
    <div id="project-title">${project}</div>
    <div id="tasks-container"></div>
    `
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCOztBQUV4Qjs7QUFFQSw4Q0FBOEMsbURBQU87Ozs7Ozs7Ozs7Ozs7O0FDSnRDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDTjtBQUNROztBQUVyQjs7QUFFZjtBQUNBLHlCQUF5QixvREFBUTs7QUFFakMsNEJBQTRCLG1EQUFPO0FBQ25DLDRCQUE0QixtREFBTztBQUNuQyw0QkFBNEIsbURBQU87O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJIGZyb20gJy4vdWkuanMnXG5cbmNvbnNvbGUubG9nKCd0ZXN0JylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmluaXQpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gJ05vIERhdGUnKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlXG4gIH1cbn0iLCJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG5cbiAgc3RhdGljIGluaXQoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKVxuXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdUb2RheScpKVxuICAgIHRvZG9MaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QoJ1RvbW9ycm93JykpXG5cbiAgICBVSS5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICB9XG5cbiAgLy8gUHJvamVjdCBFdmVudCBMaXN0ZW5lcnNcbiAgc3RhdGljIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmluYm94JylcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvZGF5JylcbiAgICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvbW9ycm93JylcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LmN1c3RvbS1wcm9qZWN0JylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JylcbiAgICBcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1Byb2plY3QpXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dQcm9qZWN0KVxuICAgIHRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93UHJvamVjdClcbiAgICBjdXN0b21Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1Byb2plY3QpXG4gICAgfSlcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5ld1Byb2plY3QoKSlcbiAgfVxuXG4gIHN0YXRpYyBuZXdQcm9qZWN0KCkge1xuXG4gIH1cblxuICBzdGF0aWMgc2hvd1Byb2plY3QoZSkge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpXG4gICAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcbiAgICBcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBpZD1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3R9PC9kaXY+XG4gICAgPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGBcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==