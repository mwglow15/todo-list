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

  deleteProject(project) {
    const index = this.projects.indexOf(project)
    this.projects.splice(index,1)
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
    const projectTags = document.querySelectorAll('.project')

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
          <i class="fa-solid fa-xmark"></i>
        </div>`
      }
    })

    projectTags.forEach((proj) => {
      proj.innerHTML += `
    `
    })

    this.initUserProjectButtons()
  }

  // Project Event Listeners
  initProjectButtons() {
    const projects = document.querySelectorAll('.project')
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const addProjectButton = document.querySelector('#new-project')
    
    today.addEventListener('click', this.handleProjectButtons.bind(this))
    inbox.addEventListener('click', this.handleProjectButtons.bind(this))
    tomorrow.addEventListener('click', this.handleProjectButtons.bind(this))

    addProjectButton.addEventListener('click', this.openNewProjectForm.bind(this))
  }

  showDeleteButton(e) {
    const deleteButton = e.currentTarget.querySelector('.fa-xmark')
    deleteButton.style.display = "inline"
  }

  hideDeleteButton(e) {
    const deleteButton = e.currentTarget.querySelector('.fa-xmark')
    deleteButton.style.display = "none"
  }

  initUserProjectButtons() {
    const customProjects = document.querySelectorAll('.project.custom-project')
    const deleteButtons = document.querySelectorAll('.fa-xmark')

    deleteButtons.forEach(button => {
      button.removeEventListener('click', this.handleDeleteProjButton)
      button.addEventListener('click', this.handleDeleteProjButton.bind(this), {once: true})
    })

    customProjects.forEach(project => {
      project.removeEventListener('click', this.handleProjectButtons.bind(this))
      project.removeEventListener('mouseover', this.showDeleteButton.bind(this))
      project.removeEventListener('mouseout', this.hideDeleteButton.bind(this))

      project.addEventListener('click', this.handleProjectButtons.bind(this))
      project.addEventListener('mouseover', this.showDeleteButton.bind(this))
      project.addEventListener('mouseout', this.hideDeleteButton.bind(this))
    })
  }

  handleDeleteProjButton(e) {
    console.log(e)
    e.stopPropagation()
    const projectName = e.currentTarget.parentElement.querySelector('p').innerHTML
    const project = this.todoList.getProject(projectName)
    console.log('test')
    this.todoList.deleteProject(project)

    this.loadProjects()
    if (this.currentProjectName == projectName) {
      this.showProject('Inbox')
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMrQjtBQUNOO0FBQ1E7O0FBRWxCO0FBQ2Y7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGLFdBQVc7QUFDM0YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5jb25zdCB1aSA9IG5ldyBVSSh0b2RvTGlzdClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmxvYWRBc3NldHMoKSkiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudGFza3MgPSBbXVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCBkdWVEYXRlKSlcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gIH1cblxuICBnZXRUYXNrTmFtZXMoKSB7XG4gICAgbGV0IHRhc2tOYW1lcyA9IFtdXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgdGFza05hbWVzLnB1c2godGFzay5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiB0YXNrTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvZG9MaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpXG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRvZG9MaXN0XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSA9ICdObyBEYXRlJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIHNldER1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVxuICB9XG59IiwiXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9tb3Jyb3cnKSlcblxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3RcIilcbiAgICB0aGlzLnByb2plY3RzWzBdLmFkZFRhc2soXCJ0ZXN0MlwiKVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgICBcbiAgICByZXR1cm4gZm91bmRQcm9qZWN0XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXG4gIH1cblxuICBnZXRQcm9qZWN0TmFtZXMoKSB7XG4gICAgbGV0IHByb2pOYW1lcyA9IFtdXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgcHJvak5hbWVzLnB1c2gocHJvai5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSAnSW5ib3gnXG4gIH1cblxuICBsb2FkQXNzZXRzKCkge1xuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB0aGlzLnNob3dQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWNvbnRhaW5lcicpXG4gICAgY29uc3QgcHJvamVjdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG5cbiAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1RvbW9ycm93J11cbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdHMoKVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgXG4gICAgICBpZiAoIWRlZmF1bHRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBjdXN0b20tcHJvamVjdCAke3Byb2plY3QuZ2V0TmFtZSgpfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbGlzdC11bFwiPjwvaT5cbiAgICAgICAgICA8cD4ke3Byb2plY3QuZ2V0TmFtZSgpfTwvcD5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RUYWdzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIHByb2ouaW5uZXJIVE1MICs9IGBcbiAgICBgXG4gICAgfSlcblxuICAgIHRoaXMuaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpXG4gIH1cblxuICAvLyBQcm9qZWN0IEV2ZW50IExpc3RlbmVyc1xuICBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5pbmJveCcpXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b2RheScpXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b21vcnJvdycpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpXG4gICAgXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgdG9tb3Jyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3UHJvamVjdEZvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIHNob3dEZWxldGVCdXR0b24oZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZmEteG1hcmsnKVxuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICB9XG5cbiAgaGlkZURlbGV0ZUJ1dHRvbihlKSB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5mYS14bWFyaycpXG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICB9XG5cbiAgaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LmN1c3RvbS1wcm9qZWN0JylcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXhtYXJrJylcblxuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEZWxldGVQcm9qQnV0dG9uKVxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEZWxldGVQcm9qQnV0dG9uLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSlcbiAgICB9KVxuXG4gICAgY3VzdG9tUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd0RlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuaGlkZURlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuXG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlUHJvakJ1dHRvbihlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJIVE1MXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgdGhpcy50b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpXG5cbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgaWYgKHRoaXMuY3VycmVudFByb2plY3ROYW1lID09IHByb2plY3ROYW1lKSB7XG4gICAgICB0aGlzLnNob3dQcm9qZWN0KCdJbmJveCcpXG4gICAgfVxuICB9XG5cbiAgbmV3UHJvamVjdCgpIHtcbiAgICB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybSgpLmJpbmQodGhpcylcbiAgfVxuXG4gIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkIHx8XG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvak5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Rm9ybSlcblxuICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRQcm9qZWN0Rm9ybS5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvamVjdEZvcm0pXG4gIH1cblxuICBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pOYW1lJykudmFsdWVcblxuICAgIGNvbnN0IGlzR29vZElucHV0ID0gdGhpcy5jaGVja1Byb2pJbnB1dChwcm9qSW5wdXQpXG5cbiAgICBpZihpc0dvb2RJbnB1dCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pJbnB1dClcbiAgICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICAgIHRoaXMuc2hvd1Byb2plY3QocHJvaklucHV0KVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpXG5cbiAgICBwcm9qRm9ybS5yZW1vdmUoKVxuICB9XG5cbiAgY2hlY2tQcm9qSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdE5hbWVzKCkuaW5jbHVkZXMoaW5wdXQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSB1bmlxdWUgcHJvamVjdCBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBoYW5kbGVQcm9qZWN0QnV0dG9ucyhlKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcblxuICAgIHRoaXMuc2hvd1Byb2plY3QocHJvamVjdE5hbWUpXG4gIH1cbiAgICBcbiAgc2hvd1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctdGFza1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgIE5ldyBUYXNrXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGFza3MtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgYFxuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnVG9kYXknKSB7XG4gICAgICB0aGlzLnNob3dUb2RheXNUYXNrcygpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvbW9ycm93Jykge1xuICAgICAgdGhpcy5zaG93VG9tb3Jyb3dzVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRUYXNrcyhwcm9qZWN0KVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICB0aGlzLmluaXRUYXNrQnV0dG9ucyhwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpXG5cbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9wZW5OZXdUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICBpZiAoIXRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQgfHwgdGFza3NDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2stbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgaWQ9XCJjbG9zZS10YXNrLWZvcm0tYnV0dG9uXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+YFxuXG4gICAgICB0YXNrc0NvbnRhaW5lci5wcmVwZW5kKG5ld1Rhc2tGb3JtKVxuXG4gICAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLHRoaXMuc3VibWl0VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stZm9ybS1idXR0b24nKVxuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlVGFza0Zvcm0pXG4gICAgfVxuICB9XG5cbiAgc3VibWl0VGFza0Zvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWVcblxuICAgIGNvbnN0IGlzR29vZE5hbWUgPSB0aGlzLmNoZWNrVGFza0lucHV0KHRhc2tOYW1lKVxuXG4gICAgaWYgKGlzR29vZE5hbWUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayh0YXNrTmFtZSlcbiAgICAgIHRoaXMubG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgIH1cbiAgfSBcblxuICBjaGVja1Rhc2tJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIFRhc2sgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKS5nZXRUYXNrTmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSB0YXNrIG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgdGFza3NDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgfVxuXG4gIHNob3dUb2RheXNUYXNrcygpIHtcbiAgICBcbiAgfVxuXG4gIHNob3dUb21vcnJvd3NUYXNrcygpIHtcblxuICB9XG5cbiAgbG9hZFRhc2tzKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKClcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWNvbnRhaW5lcicpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhc2tDYXJkKHRhc2ssIHRhc2tzQ29udGFpbmVyKSB7XG4gICAgXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+XG4gICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay5nZXROYW1lKCl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgPHA+RHVlIERhdGU8L3A+XG4gICAgICAgIDxwPiR7dGFzay5nZXREdWVEYXRlKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9