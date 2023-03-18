"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");



const todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
const ui = new _ui_js__WEBPACK_IMPORTED_MODULE_0__["default"](todoList)

document.addEventListener('DOMContentLoaded', ui.loadAssets())

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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");




class storage {
  constructor() {
    this.todoList = new _todoList__WEBPACK_IMPORTED_MODULE_2__["default"]()
  }

  static getTodoList() {
    return todoList
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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




class todoList {
  constructor() {
    this.projects = []

    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Inbox'))
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Today'))
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Tomorrow'))

  }

  addProject(project) {
    this.projects.push(project)
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName) {
    console.log('test test')
    let foundProject = this.projects.find((project) => project.getName() === projectName)
    
    return foundProject
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





class UI {
  constructor(todoList) {
    this.todoList = todoList
  }

  loadAssets() {

    this.loadProjects()
    this.initProjectButtons()
    this.showProject('Inbox')
  }

  loadProjects() {

  }

  // Project Event Listeners
  initProjectButtons() {
    console.log('thisthisthis')
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const customProjects = document.querySelectorAll('.project.custom-project')
    const addProjectButton = document.querySelector('#new-project')
    
    today.addEventListener('click', this.handleProjectButtons.bind(this))
    inbox.addEventListener('click', this.handleProjectButtons.bind(this))
    tomorrow.addEventListener('click', this.handleProjectButtons.bind(this))
    customProjects.forEach(project => {
      project.addEventListener('click', this.showProject.bind(this))
    })

    addProjectButton.addEventListener('click', this.newProject.bind(this))
  }

  // Functions to switch active project

  newProject() {
    console.log(this)
    this.openNewProjectForm()
  }

  openNewProjectForm() {

  }

  handleProjectButtons(e) {
    console.log(e.target.parentNode.children[1].textContent)
    const projectName = e.target.parentNode.children[1].textContent

    this.showProject(projectName)
  }
    
  showProject(projectName) {
    const tasksContainer = document.querySelector('#project-container')
    const project = this.todoList.getProject(projectName)

    tasksContainer.innerHTML = `
    <div class="tasks-header">
      <div id="project-title">${projectName}</div>
      <button type="button" id="new-task">
        <i class="fa-sharp fa-solid fa-plus"></i>
        New Task
      </button>
    </div>
    <div id="tasks-container"></div>
    `

    if (projectName === 'Today') {
      console.log(this)
      this.showTodaysTasks()
    } else if (projectName === 'Tomorrow') {
      this.showTomorrowsTasks()
    } else {
      this.renderTaskCards(project)
    }

    this.initTaskButtons()
  }

  initTaskButtons() {

  }

  showTodaysTasks() {
    
  }

  showTomorrowsTasks() {

  }

  renderTaskCards(project) {

  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitCO0FBQ047QUFDUTs7QUFFbEI7QUFDZjtBQUNBLHdCQUF3QixpREFBUTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNEI7QUFDTTs7QUFFbkI7QUFDZjtBQUNBOztBQUVBLDJCQUEyQixtREFBTztBQUNsQywyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmtDO0FBQ047QUFDUTtBQUNGOztBQUVuQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5jb25zdCB1aSA9IG5ldyBVSSh0b2RvTGlzdClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmxvYWRBc3NldHMoKSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KClcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICByZXR1cm4gdG9kb0xpc3RcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gJ05vIERhdGUnKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlXG4gIH1cbn0iLCJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb21vcnJvdycpKVxuXG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QgdGVzdCcpXG4gICAgbGV0IGZvdW5kUHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKVxuICAgIFxuICAgIHJldHVybiBmb3VuZFByb2plY3RcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0XG4gIH1cblxuICBsb2FkQXNzZXRzKCkge1xuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB0aGlzLnNob3dQcm9qZWN0KCdJbmJveCcpXG4gIH1cblxuICBsb2FkUHJvamVjdHMoKSB7XG5cbiAgfVxuXG4gIC8vIFByb2plY3QgRXZlbnQgTGlzdGVuZXJzXG4gIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zb2xlLmxvZygndGhpc3RoaXN0aGlzJylcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmluYm94JylcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvZGF5JylcbiAgICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvbW9ycm93JylcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LmN1c3RvbS1wcm9qZWN0JylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JylcbiAgICBcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICB0b21vcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICBjdXN0b21Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1Byb2plY3QuYmluZCh0aGlzKSlcbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV3UHJvamVjdC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gRnVuY3Rpb25zIHRvIHN3aXRjaCBhY3RpdmUgcHJvamVjdFxuXG4gIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybSgpXG4gIH1cblxuICBvcGVuTmV3UHJvamVjdEZvcm0oKSB7XG5cbiAgfVxuXG4gIGhhbmRsZVByb2plY3RCdXR0b25zKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLnRleHRDb250ZW50KVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuXG4gICAgdGhpcy5zaG93UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgfVxuICAgIFxuICBzaG93UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1oZWFkZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LXRpdGxlXCI+JHtwcm9qZWN0TmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibmV3LXRhc2tcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPlxuICAgICAgICBOZXcgVGFza1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGBcblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvZGF5Jykge1xuICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgIHRoaXMuc2hvd1RvZGF5c1Rhc2tzKClcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lID09PSAnVG9tb3Jyb3cnKSB7XG4gICAgICB0aGlzLnNob3dUb21vcnJvd3NUYXNrcygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmRzKHByb2plY3QpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0VGFza0J1dHRvbnMoKVxuICB9XG5cbiAgaW5pdFRhc2tCdXR0b25zKCkge1xuXG4gIH1cblxuICBzaG93VG9kYXlzVGFza3MoKSB7XG4gICAgXG4gIH1cblxuICBzaG93VG9tb3Jyb3dzVGFza3MoKSB7XG5cbiAgfVxuXG4gIHJlbmRlclRhc2tDYXJkcyhwcm9qZWN0KSB7XG5cbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==