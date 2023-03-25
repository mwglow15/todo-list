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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


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

  addTask(taskName, dueDate) {
    this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, dueDate))
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

    this.projects[0].addTask("test")
    this.projects[0].addTask("test2")
  }

  addProject(projectName) {
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectName))
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName) {
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
    this.currentProjectName = 'Inbox'
  }

  loadAssets() {

    this.loadProjects()
    this.initProjectButtons()
    this.showProject(this.currentProjectName)
  }

  loadProjects() {
    const projectContainer = document.querySelector('.new-projects-container')

    while (projectContainer.firstChild) {
      projectContainer.firstChild.remove()
    }

    const defaultProjects = ['Inbox', 'Today', 'Tomorrow']
    const projects = this.todoList.getProjects()

    projects.forEach((project) => {
      const projectName = project.getName()
      
      if (!defaultProjects.includes(projectName)) {
        projectContainer.innerHTML += `
        <div class="project custom-project ${project.getName()}">
          <i class="fa-sharp fa-solid fa-list-ul"></i>
          <p>${project.getName()}</p>
        </div>
        `
      }
    })

    this.initUserProjectButtons()
  }

  // Project Event Listeners
  initProjectButtons() {
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const addProjectButton = document.querySelector('#new-project')
    
    today.addEventListener('click', this.handleProjectButtons.bind(this))
    inbox.addEventListener('click', this.handleProjectButtons.bind(this))
    tomorrow.addEventListener('click', this.handleProjectButtons.bind(this))

    addProjectButton.addEventListener('click', this.openNewProjectForm.bind(this))
  }

  initUserProjectButtons() {
    const customProjects = document.querySelectorAll('.project.custom-project')

    customProjects.forEach(project => {
      project.addEventListener('click', this.handleProjectButtons.bind(this))
    })
  }


  newProject() {
    this.openNewProjectForm().bind(this)
  }

  openNewProjectForm() {
    const newProjectsContainer = document.querySelector(".new-projects-container")

    if (!newProjectsContainer.firstChild ||
      newProjectsContainer.firstChild.tagName !== "FORM") {
      const newProjectForm = document.createElement('form')
      newProjectForm.classList.add('new-project-form')
      newProjectForm.innerHTML = `
      <label for="task-name">Project Name</label>
      <input type="text" id="projName" name="project-name">
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="button" value="Submit">
        <input type="button" class="form-buttons close" value="Close">
      </div>
      `

      newProjectsContainer.prepend(newProjectForm)

      const submitButton = document.querySelector('.submit')
      const closeButton = document.querySelector('.close')
      this.initProjectFormButtons(submitButton, closeButton)
    }
  }

  initProjectFormButtons(submitButton, closeButton) {
    submitButton.addEventListener('click', this.submitProjectForm.bind(this))
    closeButton.addEventListener('click', this.closeProjectForm)
  }

  submitProjectForm() {
    const projInput = document.getElementById('projName').value

    this.todoList.addProject(projInput)
    this.loadProjects()
    this.showProject(projInput)
  }

  closeProjectForm() {
    const projForm = document.querySelector('.new-project-form')

    projForm.remove()
  }

  handleProjectButtons(e) {
    console.log(e.currentTarget)
    const projectName = e.currentTarget.children[1].textContent

    this.showProject(projectName)
  }
    
  showProject(projectName) {
    const projectContainer = document.querySelector('#project-container')
    const project = this.todoList.getProject(projectName)

    projectContainer.innerHTML = `
    <div class="tasks-header">
      <div class="project-title">${projectName}</div>
      <button type="button" class="new-task">
        <i class="fa-sharp fa-solid fa-plus"></i>
        New Task
      </button>
    </div>
    <div id="tasks-container"></div>
    `

    if (projectName === 'Today') {
      this.showTodaysTasks()
    } else if (projectName === 'Tomorrow') {
      this.showTomorrowsTasks()
    } else {
      this.loadTasks(project)
    }

    this.currentProjectName = projectName
    this.initTaskButtons(projectName)
  }

  initTaskButtons(project) {
    const newTask = document.querySelector('.new-task')

    newTask.addEventListener('click', this.openNewTaskForm.bind(this))
  }

  openNewTaskForm() {
    const tasksContainer = document.querySelector("#tasks-container")

    if (tasksContainer.firstChild.tagName !== "FORM") {
      const newTaskForm = document.createElement('form')
      newTaskForm.classList.add('new-task-form')
      newTaskForm.innerHTML = `
      <label for="task-name">Task Name</label>
      <input type="text" id="taskName" name="task-name">
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="button" value="Submit">
        <input type="button" class="form-buttons close" id="close-task-form-button" value="Close">
      </div>
      `

      tasksContainer.prepend(newTaskForm)

      const submitButton = document.querySelector('.submit')
      const closeButton = document.querySelector('#close-task-form-button')
      this.initFormButtons(submitButton, closeButton)
    }
  }

  initFormButtons(submitButton, closeButton) {
    submitButton.addEventListener('click', this.submitTaskForm.bind(this))
    closeButton.addEventListener('click', this.closeTaskForm)
  }

  submitTaskForm() {
    const taskName = document.getElementById('taskName').value
    const currentProject = this.todoList.getProject(this.currentProjectName)
    
    currentProject.addTask(taskName)

    this.loadTasks(currentProject)
  } 

  closeTaskForm() {
    const tasksContainer = document.querySelector("#tasks-container")

    tasksContainer.firstElementChild.remove()
  }

  showTodaysTasks() {
    
  }

  showTomorrowsTasks() {

  }

  loadTasks(project) {
    console.log(project)
    const projectTasks = project.getTasks()

    const tasksContainer = document.querySelector('#tasks-container')

    tasksContainer.innerHTML = ''

    projectTasks.forEach((task) => {
      this.renderTaskCard(task, tasksContainer)
    })
  }

  renderTaskCard(task, tasksContainer) {
    
    tasksContainer.innerHTML += `
    <div class="task-card">
      <p class="task-name">${task.getName()}</p>
      <div class="task-date-container">
        <p>Due Date</p>
        <p>${task.getDueDate()}</p>
      </div>
    </div>`
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIrQjtBQUNOO0FBQ1E7O0FBRWxCO0FBQ2Y7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5jb25zdCB1aSA9IG5ldyBVSSh0b2RvTGlzdClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmxvYWRBc3NldHMoKSkiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudGFza3MgPSBbXVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCBkdWVEYXRlKSlcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi90b2RvTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgVG9Eb0xpc3QoKVxuICB9XG5cbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0b2RvTGlzdFxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUgPSAnTm8gRGF0ZScpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBzZXREdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gIH1cblxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVcbiAgfVxufSIsIlxuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvbW9ycm93JykpXG5cbiAgICB0aGlzLnByb2plY3RzWzBdLmFkZFRhc2soXCJ0ZXN0XCIpXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdDJcIilcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKVxuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgZm91bmRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kUHJvamVjdFxuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gdG9kb0xpc3RcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9ICdJbmJveCdcbiAgfVxuXG4gIGxvYWRBc3NldHMoKSB7XG5cbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgdGhpcy5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgIHRoaXMuc2hvd1Byb2plY3QodGhpcy5jdXJyZW50UHJvamVjdE5hbWUpXG4gIH1cblxuICBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtY29udGFpbmVyJylcblxuICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IFsnSW5ib3gnLCAnVG9kYXknLCAnVG9tb3Jyb3cnXVxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0cygpXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICBcbiAgICAgIGlmICghZGVmYXVsdFByb2plY3RzLmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0IGN1c3RvbS1wcm9qZWN0ICR7cHJvamVjdC5nZXROYW1lKCl9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1saXN0LXVsXCI+PC9pPlxuICAgICAgICAgIDxwPiR7cHJvamVjdC5nZXROYW1lKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRVc2VyUHJvamVjdEJ1dHRvbnMoKVxuICB9XG5cbiAgLy8gUHJvamVjdCBFdmVudCBMaXN0ZW5lcnNcbiAgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuaW5ib3gnKVxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9kYXknKVxuICAgIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9tb3Jyb3cnKVxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKVxuICAgIFxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIHRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5ld1Byb2plY3RGb3JtLmJpbmQodGhpcykpXG4gIH1cblxuICBpbml0VXNlclByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGN1c3RvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QuY3VzdG9tLXByb2plY3QnKVxuXG4gICAgY3VzdG9tUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgfSlcbiAgfVxuXG5cbiAgbmV3UHJvamVjdCgpIHtcbiAgICB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybSgpLmJpbmQodGhpcylcbiAgfVxuXG4gIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkIHx8XG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvak5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcblxuICAgICAgbmV3UHJvamVjdHNDb250YWluZXIucHJlcGVuZChuZXdQcm9qZWN0Rm9ybSlcblxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgICB0aGlzLmluaXRQcm9qZWN0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcbiAgICB9XG4gIH1cblxuICBpbml0UHJvamVjdEZvcm1CdXR0b25zKHN1Ym1pdEJ1dHRvbiwgY2xvc2VCdXR0b24pIHtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN1Ym1pdFByb2plY3RGb3JtLmJpbmQodGhpcykpXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvamVjdEZvcm0pXG4gIH1cblxuICBzdWJtaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWUnKS52YWx1ZVxuXG4gICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pJbnB1dClcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgdGhpcy5zaG93UHJvamVjdChwcm9qSW5wdXQpXG4gIH1cblxuICBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKVxuXG4gICAgcHJvakZvcm0ucmVtb3ZlKClcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RCdXR0b25zKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcblxuICAgIHRoaXMuc2hvd1Byb2plY3QocHJvamVjdE5hbWUpXG4gIH1cbiAgICBcbiAgc2hvd1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctdGFza1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgIE5ldyBUYXNrXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGFza3MtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgYFxuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnVG9kYXknKSB7XG4gICAgICB0aGlzLnNob3dUb2RheXNUYXNrcygpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvbW9ycm93Jykge1xuICAgICAgdGhpcy5zaG93VG9tb3Jyb3dzVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRUYXNrcyhwcm9qZWN0KVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICB0aGlzLmluaXRUYXNrQnV0dG9ucyhwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpXG5cbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9wZW5OZXdUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICBpZiAodGFza3NDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2stbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgaWQ9XCJjbG9zZS10YXNrLWZvcm0tYnV0dG9uXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICBgXG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLnByZXBlbmQobmV3VGFza0Zvcm0pXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1mb3JtLWJ1dHRvbicpXG4gICAgICB0aGlzLmluaXRGb3JtQnV0dG9ucyhzdWJtaXRCdXR0b24sIGNsb3NlQnV0dG9uKVxuICAgIH1cbiAgfVxuXG4gIGluaXRGb3JtQnV0dG9ucyhzdWJtaXRCdXR0b24sIGNsb3NlQnV0dG9uKSB7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdWJtaXRUYXNrRm9ybS5iaW5kKHRoaXMpKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVRhc2tGb3JtKVxuICB9XG5cbiAgc3VibWl0VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICAgIFxuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFza05hbWUpXG5cbiAgICB0aGlzLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgfSBcblxuICBjbG9zZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIilcblxuICAgIHRhc2tzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpXG4gIH1cblxuICBzaG93VG9kYXlzVGFza3MoKSB7XG4gICAgXG4gIH1cblxuICBzaG93VG9tb3Jyb3dzVGFza3MoKSB7XG5cbiAgfVxuXG4gIGxvYWRUYXNrcyhwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKClcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWNvbnRhaW5lcicpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhc2tDYXJkKHRhc2ssIHRhc2tzQ29udGFpbmVyKSB7XG4gICAgXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+XG4gICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay5nZXROYW1lKCl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgPHA+RHVlIERhdGU8L3A+XG4gICAgICAgIDxwPiR7dGFzay5nZXREdWVEYXRlKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9