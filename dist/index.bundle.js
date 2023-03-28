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

  getTaskNames() {
    let taskNames = []
    this.tasks.forEach(task => {
      taskNames.push(task.getName())
    })

    return taskNames
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

  getProjectNames() {
    let projNames = []
    this.projects.forEach(proj => {
      projNames.push(proj.getName())
    })

    return projNames
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
        </div>`
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
      </div>`

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

    const isGoodInput = this.checkProjInput(projInput)

    if(isGoodInput) {
      this.todoList.addProject(projInput)
      this.loadProjects()
      this.showProject(projInput)
    }
  }

  closeProjectForm() {
    const projForm = document.querySelector('.new-project-form')

    projForm.remove()
  }

  checkProjInput(input) {
    if (input === '') {
      console.log('Enter a project name')
      return false
    }

    if (this.todoList.getProjectNames().includes(input)) {
      console.log('Enter a unique project name')
      return false
    }

    return true
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

    if (!tasksContainer.firstChild || tasksContainer.firstChild.tagName !== "FORM") {
      const newTaskForm = document.createElement('form')
      newTaskForm.classList.add('new-task-form')
      newTaskForm.innerHTML = `
      <label for="task-name">Task Name</label>
      <input type="text" id="taskName" name="task-name">
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="button" value="Submit">
        <input type="button" class="form-buttons close" id="close-task-form-button" value="Close">
      </div>`

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

    const isGoodName = this.checkTaskInput(taskName)

    if (isGoodName) {
      const currentProject = this.todoList.getProject(this.currentProjectName)
      currentProject.addTask(taskName)
      this.loadTasks(currentProject)
    }
  } 

  checkTaskInput(input) {
    if (input === '') {
      console.log('Enter a Task name')
      return false
    }

    if (this.todoList.getProject(this.currentProjectName).getTaskNames().includes(input)) {
      console.log('Enter a unique task name')
      return false
    }

    return true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMrQjtBQUNOO0FBQ1E7O0FBRWxCO0FBQ2Y7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJIGZyb20gJy4vdWkuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcydcblxuY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKVxuY29uc3QgdWkgPSBuZXcgVUkodG9kb0xpc3QpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB1aS5sb2FkQXNzZXRzKCkpIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSkpXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG5cbiAgZ2V0VGFza05hbWVzKCkge1xuICAgIGxldCB0YXNrTmFtZXMgPSBbXVxuICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIHRhc2tOYW1lcy5wdXNoKHRhc2suZ2V0TmFtZSgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGFza05hbWVzXG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi90b2RvTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgVG9Eb0xpc3QoKVxuICB9XG5cbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0b2RvTGlzdFxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUgPSAnTm8gRGF0ZScpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBzZXREdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gIH1cblxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVcbiAgfVxufSIsIlxuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvbW9ycm93JykpXG5cbiAgICB0aGlzLnByb2plY3RzWzBdLmFkZFRhc2soXCJ0ZXN0XCIpXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdDJcIilcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKVxuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgZm91bmRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kUHJvamVjdFxuICB9XG5cbiAgZ2V0UHJvamVjdE5hbWVzKCkge1xuICAgIGxldCBwcm9qTmFtZXMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgIHByb2pOYW1lcy5wdXNoKHByb2ouZ2V0TmFtZSgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvak5hbWVzXG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcydcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBjb25zdHJ1Y3Rvcih0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdFxuICAgIHRoaXMuY3VycmVudFByb2plY3ROYW1lID0gJ0luYm94J1xuICB9XG5cbiAgbG9hZEFzc2V0cygpIHtcblxuICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICB0aGlzLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gICAgdGhpcy5zaG93UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1jb250YWluZXInKVxuXG4gICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gWydJbmJveCcsICdUb2RheScsICdUb21vcnJvdyddXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3RzKClcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKClcbiAgICAgIFxuICAgICAgaWYgKCFkZWZhdWx0UHJvamVjdHMuaW5jbHVkZXMocHJvamVjdE5hbWUpKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QgY3VzdG9tLXByb2plY3QgJHtwcm9qZWN0LmdldE5hbWUoKX1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLWxpc3QtdWxcIj48L2k+XG4gICAgICAgICAgPHA+JHtwcm9qZWN0LmdldE5hbWUoKX08L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbml0VXNlclByb2plY3RCdXR0b25zKClcbiAgfVxuXG4gIC8vIFByb2plY3QgRXZlbnQgTGlzdGVuZXJzXG4gIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmluYm94JylcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvZGF5JylcbiAgICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvbW9ycm93JylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JylcbiAgICBcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICB0b21vcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LmN1c3RvbS1wcm9qZWN0JylcblxuICAgIGN1c3RvbVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIH0pXG4gIH1cblxuICBuZXdQcm9qZWN0KCkge1xuICAgIHRoaXMub3Blbk5ld1Byb2plY3RGb3JtKCkuYmluZCh0aGlzKVxuICB9XG5cbiAgb3Blbk5ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdHMtY29udGFpbmVyXCIpXG5cbiAgICBpZiAoIW5ld1Byb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQgfHxcbiAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQudGFnTmFtZSAhPT0gXCJGT1JNXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtJylcbiAgICAgIG5ld1Byb2plY3RGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qTmFtZVwiIG5hbWU9XCJwcm9qZWN0LW5hbWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtZGl2XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tYnV0dG9ucyBzdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tYnV0dG9ucyBjbG9zZVwiIHZhbHVlPVwiQ2xvc2VcIj5cbiAgICAgIDwvZGl2PmBcblxuICAgICAgbmV3UHJvamVjdHNDb250YWluZXIucHJlcGVuZChuZXdQcm9qZWN0Rm9ybSlcblxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgICB0aGlzLmluaXRQcm9qZWN0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcbiAgICB9XG4gIH1cblxuICBpbml0UHJvamVjdEZvcm1CdXR0b25zKHN1Ym1pdEJ1dHRvbiwgY2xvc2VCdXR0b24pIHtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN1Ym1pdFByb2plY3RGb3JtLmJpbmQodGhpcykpXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvamVjdEZvcm0pXG4gIH1cblxuICBzdWJtaXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWUnKS52YWx1ZVxuXG4gICAgY29uc3QgaXNHb29kSW5wdXQgPSB0aGlzLmNoZWNrUHJvaklucHV0KHByb2pJbnB1dClcblxuICAgIGlmKGlzR29vZElucHV0KSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmFkZFByb2plY3QocHJvaklucHV0KVxuICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgICAgdGhpcy5zaG93UHJvamVjdChwcm9qSW5wdXQpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJylcblxuICAgIHByb2pGb3JtLnJlbW92ZSgpXG4gIH1cblxuICBjaGVja1Byb2pJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHByb2plY3QgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0TmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RCdXR0b25zKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcblxuICAgIHRoaXMuc2hvd1Byb2plY3QocHJvamVjdE5hbWUpXG4gIH1cbiAgICBcbiAgc2hvd1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctdGFza1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgIE5ldyBUYXNrXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGFza3MtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgYFxuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnVG9kYXknKSB7XG4gICAgICB0aGlzLnNob3dUb2RheXNUYXNrcygpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvbW9ycm93Jykge1xuICAgICAgdGhpcy5zaG93VG9tb3Jyb3dzVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRUYXNrcyhwcm9qZWN0KVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICB0aGlzLmluaXRUYXNrQnV0dG9ucyhwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpXG5cbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9wZW5OZXdUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICBpZiAoIXRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQgfHwgdGFza3NDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2stbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgaWQ9XCJjbG9zZS10YXNrLWZvcm0tYnV0dG9uXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+YFxuXG4gICAgICB0YXNrc0NvbnRhaW5lci5wcmVwZW5kKG5ld1Rhc2tGb3JtKVxuXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stZm9ybS1idXR0b24nKVxuICAgICAgdGhpcy5pbml0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcbiAgICB9XG4gIH1cblxuICBpbml0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbikge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3VibWl0VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VUYXNrRm9ybSlcbiAgfVxuXG4gIHN1Ym1pdFRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWVcblxuICAgIGNvbnN0IGlzR29vZE5hbWUgPSB0aGlzLmNoZWNrVGFza0lucHV0KHRhc2tOYW1lKVxuXG4gICAgaWYgKGlzR29vZE5hbWUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayh0YXNrTmFtZSlcbiAgICAgIHRoaXMubG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgIH1cbiAgfSBcblxuICBjaGVja1Rhc2tJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIFRhc2sgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKS5nZXRUYXNrTmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSB0YXNrIG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgdGFza3NDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgfVxuXG4gIHNob3dUb2RheXNUYXNrcygpIHtcbiAgICBcbiAgfVxuXG4gIHNob3dUb21vcnJvd3NUYXNrcygpIHtcblxuICB9XG5cbiAgbG9hZFRhc2tzKHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKVxuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJylcblxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZCh0YXNrLCB0YXNrc0NvbnRhaW5lcilcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpIHtcbiAgICBcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmRcIj5cbiAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCI+JHt0YXNrLmdldE5hbWUoKX08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICA8cD5EdWUgRGF0ZTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLmdldER1ZURhdGUoKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=