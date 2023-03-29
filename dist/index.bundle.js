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
      <input type="text" id="projName" name="project-name" required>
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="submit" value="Submit">
        <input type="button" class="form-buttons close" value="Close">
      </div>`

      newProjectsContainer.append(newProjectForm)

      newProjectForm.addEventListener('submit', this.submitProjectForm.bind(this))
      }
      
      
      const submitButton = document.querySelector('.submit')
      const closeButton = document.querySelector('.close')
      closeButton.addEventListener('click', this.closeProjectForm)
  }

  submitProjectForm(e) {
    e.preventDefault()
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

      newTaskForm.addEventListener('submit',this.submitTaskForm.bind(this))
      const closeButton = document.querySelector('#close-task-form-button')
      closeButton.addEventListener('click', this.closeTaskForm)
    }
  }

  submitTaskForm(e) {
    e.preventDefault()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMrQjtBQUNOO0FBQ1E7O0FBRWxCO0FBQ2Y7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSSBmcm9tICcuL3VpLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5cbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KClcbmNvbnN0IHVpID0gbmV3IFVJKHRvZG9MaXN0KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdWkubG9hZEFzc2V0cygpKSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIGFkZFRhc2sodGFza05hbWUsIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGFza05hbWUsIGR1ZURhdGUpKVxuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NcbiAgfVxuXG4gIGdldFRhc2tOYW1lcygpIHtcbiAgICBsZXQgdGFza05hbWVzID0gW11cbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICB0YXNrTmFtZXMucHVzaCh0YXNrLmdldE5hbWUoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tOYW1lc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KClcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICByZXR1cm4gdG9kb0xpc3RcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gJ05vIERhdGUnKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlXG4gIH1cbn0iLCJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb21vcnJvdycpKVxuXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdFwiKVxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3QyXCIpXG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSlcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgbGV0IGZvdW5kUHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKVxuICAgIFxuICAgIHJldHVybiBmb3VuZFByb2plY3RcbiAgfVxuXG4gIGdldFByb2plY3ROYW1lcygpIHtcbiAgICBsZXQgcHJvak5hbWVzID0gW11cbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICBwcm9qTmFtZXMucHVzaChwcm9qLmdldE5hbWUoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2pOYW1lc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gdG9kb0xpc3RcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9ICdJbmJveCdcbiAgfVxuXG4gIGxvYWRBc3NldHMoKSB7XG5cbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgdGhpcy5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgIHRoaXMuc2hvd1Byb2plY3QodGhpcy5jdXJyZW50UHJvamVjdE5hbWUpXG4gIH1cblxuICBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtY29udGFpbmVyJylcblxuICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IFsnSW5ib3gnLCAnVG9kYXknLCAnVG9tb3Jyb3cnXVxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0cygpXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICBcbiAgICAgIGlmICghZGVmYXVsdFByb2plY3RzLmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0IGN1c3RvbS1wcm9qZWN0ICR7cHJvamVjdC5nZXROYW1lKCl9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1saXN0LXVsXCI+PC9pPlxuICAgICAgICAgIDxwPiR7cHJvamVjdC5nZXROYW1lKCl9PC9wPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpXG4gIH1cblxuICAvLyBQcm9qZWN0IEV2ZW50IExpc3RlbmVyc1xuICBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5pbmJveCcpXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b2RheScpXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b21vcnJvdycpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpXG4gICAgXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgdG9tb3Jyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3UHJvamVjdEZvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIGluaXRVc2VyUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgY3VzdG9tUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC5jdXN0b20tcHJvamVjdCcpXG5cbiAgICBjdXN0b21Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG5cbiAgbmV3UHJvamVjdCgpIHtcbiAgICB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybSgpLmJpbmQodGhpcylcbiAgfVxuXG4gIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkIHx8XG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvak5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Rm9ybSlcblxuICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRQcm9qZWN0Rm9ybS5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvamVjdEZvcm0pXG4gIH1cblxuICBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pOYW1lJykudmFsdWVcblxuICAgIGNvbnN0IGlzR29vZElucHV0ID0gdGhpcy5jaGVja1Byb2pJbnB1dChwcm9qSW5wdXQpXG5cbiAgICBpZihpc0dvb2RJbnB1dCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pJbnB1dClcbiAgICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICAgIHRoaXMuc2hvd1Byb2plY3QocHJvaklucHV0KVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpXG5cbiAgICBwcm9qRm9ybS5yZW1vdmUoKVxuICB9XG5cbiAgY2hlY2tQcm9qSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdE5hbWVzKCkuaW5jbHVkZXMoaW5wdXQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSB1bmlxdWUgcHJvamVjdCBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBoYW5kbGVQcm9qZWN0QnV0dG9ucyhlKSB7XG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50XG5cbiAgICB0aGlzLnNob3dQcm9qZWN0KHByb2plY3ROYW1lKVxuICB9XG4gICAgXG4gIHNob3dQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcblxuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHtwcm9qZWN0TmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmV3LXRhc2tcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPlxuICAgICAgICBOZXcgVGFza1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGBcblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvZGF5Jykge1xuICAgICAgdGhpcy5zaG93VG9kYXlzVGFza3MoKVxuICAgIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09ICdUb21vcnJvdycpIHtcbiAgICAgIHRoaXMuc2hvd1RvbW9ycm93c1Rhc2tzKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkVGFza3MocHJvamVjdClcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXG4gICAgdGhpcy5pbml0VGFza0J1dHRvbnMocHJvamVjdE5hbWUpXG4gIH1cblxuICBpbml0VGFza0J1dHRvbnMocHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKVxuXG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5ld1Rhc2tGb3JtLmJpbmQodGhpcykpXG4gIH1cblxuICBvcGVuTmV3VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCF0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkIHx8IHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQudGFnTmFtZSAhPT0gXCJGT1JNXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj5UYXNrIE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrLW5hbWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtZGl2XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tYnV0dG9ucyBzdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tYnV0dG9ucyBjbG9zZVwiIGlkPVwiY2xvc2UtdGFzay1mb3JtLWJ1dHRvblwiIHZhbHVlPVwiQ2xvc2VcIj5cbiAgICAgIDwvZGl2PmBcblxuICAgICAgdGFza3NDb250YWluZXIucHJlcGVuZChuZXdUYXNrRm9ybSlcblxuICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jyx0aGlzLnN1Ym1pdFRhc2tGb3JtLmJpbmQodGhpcykpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLWZvcm0tYnV0dG9uJylcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVRhc2tGb3JtKVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdFRhc2tGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlXG5cbiAgICBjb25zdCBpc0dvb2ROYW1lID0gdGhpcy5jaGVja1Rhc2tJbnB1dCh0YXNrTmFtZSlcblxuICAgIGlmIChpc0dvb2ROYW1lKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSlcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFza05hbWUpXG4gICAgICB0aGlzLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICB9XG4gIH0gXG5cbiAgY2hlY2tUYXNrSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSBUYXNrIG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSkuZ2V0VGFza05hbWVzKCkuaW5jbHVkZXMoaW5wdXQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSB1bmlxdWUgdGFzayBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjbG9zZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIilcblxuICAgIHRhc2tzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpXG4gIH1cblxuICBzaG93VG9kYXlzVGFza3MoKSB7XG4gICAgXG4gIH1cblxuICBzaG93VG9tb3Jyb3dzVGFza3MoKSB7XG5cbiAgfVxuXG4gIGxvYWRUYXNrcyhwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKClcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWNvbnRhaW5lcicpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhc2tDYXJkKHRhc2ssIHRhc2tzQ29udGFpbmVyKSB7XG4gICAgXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+XG4gICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay5nZXROYW1lKCl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgPHA+RHVlIERhdGU8L3A+XG4gICAgICAgIDxwPiR7dGFzay5nZXREdWVEYXRlKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9