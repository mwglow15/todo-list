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

    const goodInput = this.checkProjInput(projInput)

    if(goodInput) {
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
    console.log(input)
    console.log(this.todoList.getProjectNames())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIrQjtBQUNOO0FBQ1E7O0FBRWxCO0FBQ2Y7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSSBmcm9tICcuL3VpLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5cbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KClcbmNvbnN0IHVpID0gbmV3IFVJKHRvZG9MaXN0KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdWkubG9hZEFzc2V0cygpKSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIGFkZFRhc2sodGFza05hbWUsIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGFza05hbWUsIGR1ZURhdGUpKVxuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvZG9MaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpXG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRvZG9MaXN0XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSA9ICdObyBEYXRlJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIHNldER1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVxuICB9XG59IiwiXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9tb3Jyb3cnKSlcblxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3RcIilcbiAgICB0aGlzLnByb2plY3RzWzBdLmFkZFRhc2soXCJ0ZXN0MlwiKVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgICBcbiAgICByZXR1cm4gZm91bmRQcm9qZWN0XG4gIH1cblxuICBnZXRQcm9qZWN0TmFtZXMoKSB7XG4gICAgbGV0IHByb2pOYW1lcyA9IFtdXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgcHJvak5hbWVzLnB1c2gocHJvai5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSAnSW5ib3gnXG4gIH1cblxuICBsb2FkQXNzZXRzKCkge1xuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB0aGlzLnNob3dQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWNvbnRhaW5lcicpXG5cbiAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1RvbW9ycm93J11cbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdHMoKVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgXG4gICAgICBpZiAoIWRlZmF1bHRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBjdXN0b20tcHJvamVjdCAke3Byb2plY3QuZ2V0TmFtZSgpfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbGlzdC11bFwiPjwvaT5cbiAgICAgICAgICA8cD4ke3Byb2plY3QuZ2V0TmFtZSgpfTwvcD5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRVc2VyUHJvamVjdEJ1dHRvbnMoKVxuICB9XG5cbiAgLy8gUHJvamVjdCBFdmVudCBMaXN0ZW5lcnNcbiAgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuaW5ib3gnKVxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9kYXknKVxuICAgIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9tb3Jyb3cnKVxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKVxuICAgIFxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIHRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5ld1Byb2plY3RGb3JtLmJpbmQodGhpcykpXG4gIH1cblxuICBpbml0VXNlclByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGN1c3RvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QuY3VzdG9tLXByb2plY3QnKVxuXG4gICAgY3VzdG9tUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgfSlcbiAgfVxuXG4gIG5ld1Byb2plY3QoKSB7XG4gICAgdGhpcy5vcGVuTmV3UHJvamVjdEZvcm0oKS5iaW5kKHRoaXMpXG4gIH1cblxuICBvcGVuTmV3UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0cy1jb250YWluZXJcIilcblxuICAgIGlmICghbmV3UHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCB8fFxuICAgICAgbmV3UHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2pOYW1lXCIgbmFtZT1cInByb2plY3QtbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+YFxuXG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5wcmVwZW5kKG5ld1Byb2plY3RGb3JtKVxuXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcbiAgICAgIHRoaXMuaW5pdFByb2plY3RGb3JtQnV0dG9ucyhzdWJtaXRCdXR0b24sIGNsb3NlQnV0dG9uKVxuICAgIH1cbiAgfVxuXG4gIGluaXRQcm9qZWN0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbikge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3VibWl0UHJvamVjdEZvcm0uYmluZCh0aGlzKSlcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQcm9qZWN0Rm9ybSlcbiAgfVxuXG4gIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qTmFtZScpLnZhbHVlXG5cbiAgICBjb25zdCBnb29kSW5wdXQgPSB0aGlzLmNoZWNrUHJvaklucHV0KHByb2pJbnB1dClcblxuICAgIGlmKGdvb2RJbnB1dCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pJbnB1dClcbiAgICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICAgIHRoaXMuc2hvd1Byb2plY3QocHJvaklucHV0KVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpXG5cbiAgICBwcm9qRm9ybS5yZW1vdmUoKVxuICB9XG5cbiAgY2hlY2tQcm9qSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9MaXN0LmdldFByb2plY3ROYW1lcygpKVxuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHByb2plY3QgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0TmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RCdXR0b25zKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcblxuICAgIHRoaXMuc2hvd1Byb2plY3QocHJvamVjdE5hbWUpXG4gIH1cbiAgICBcbiAgc2hvd1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctdGFza1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgIE5ldyBUYXNrXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGFza3MtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgYFxuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnVG9kYXknKSB7XG4gICAgICB0aGlzLnNob3dUb2RheXNUYXNrcygpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvbW9ycm93Jykge1xuICAgICAgdGhpcy5zaG93VG9tb3Jyb3dzVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRUYXNrcyhwcm9qZWN0KVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICB0aGlzLmluaXRUYXNrQnV0dG9ucyhwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpXG5cbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9wZW5OZXdUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICBpZiAoIXRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQgfHwgdGFza3NDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2stbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgaWQ9XCJjbG9zZS10YXNrLWZvcm0tYnV0dG9uXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+YFxuXG4gICAgICB0YXNrc0NvbnRhaW5lci5wcmVwZW5kKG5ld1Rhc2tGb3JtKVxuXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stZm9ybS1idXR0b24nKVxuICAgICAgdGhpcy5pbml0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbilcbiAgICB9XG4gIH1cblxuICBpbml0Rm9ybUJ1dHRvbnMoc3VibWl0QnV0dG9uLCBjbG9zZUJ1dHRvbikge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3VibWl0VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VUYXNrRm9ybSlcbiAgfVxuXG4gIHN1Ym1pdFRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWVcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSlcbiAgICBcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKVxuXG4gICAgdGhpcy5sb2FkVGFza3MoY3VycmVudFByb2plY3QpXG4gIH0gXG5cbiAgY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKVxuICB9XG5cbiAgc2hvd1RvZGF5c1Rhc2tzKCkge1xuICAgIFxuICB9XG5cbiAgc2hvd1RvbW9ycm93c1Rhc2tzKCkge1xuXG4gIH1cblxuICBsb2FkVGFza3MocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpXG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1jb250YWluZXInKVxuXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRhc2tDYXJkKHRhc2ssIHRhc2tzQ29udGFpbmVyKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJUYXNrQ2FyZCh0YXNrLCB0YXNrc0NvbnRhaW5lcikge1xuICAgIFxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stY2FyZFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke3Rhc2suZ2V0TmFtZSgpfTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxwPkR1ZSBEYXRlPC9wPlxuICAgICAgICA8cD4ke3Rhc2suZ2V0RHVlRGF0ZSgpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==