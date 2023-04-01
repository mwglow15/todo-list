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

  addTask(taskName, dueDate, done) {
    this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, dueDate, done))
  }

  getTasks() {
    return this.tasks
  }

  getTask(taskName) {
    let foundTask = this.tasks.find((task) => task.getName() === taskName)
    
    return foundTask
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
  constructor(name, dueDate = 'No Date', done = false) {
    this.name = name
    this.date = dueDate
    this.done = done
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

  getDoneStatus() {
    return this.done
  }

  setDoneStatus(isDone) {
    this.done = isDone
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
    this.projects[0].addTask("test2",'No Date', true)
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
    e.stopPropagation()
    const projectName = e.currentTarget.parentElement.querySelector('p').innerHTML
    const project = this.todoList.getProject(projectName)

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
    this.initNewTaskButton(projectName)
  }

  initNewTaskButton() {
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

      newTaskForm.addEventListener('click',this.submitTaskForm.bind(this))
      const closeButton = document.querySelector('#close-task-form-button')
      closeButton.addEventListener('click', this.closeTaskForm)
    }
  }

  submitTaskForm(e) {
    e.preventDefault()
    const taskName = document.getElementById('taskName').value
    console.log(taskName)

    const isGoodName = this.checkTaskInput(taskName)

    if (isGoodName) {
      const currentProject = this.todoList.getProject(this.currentProjectName)
      currentProject.addTask(taskName)
      this.loadTasks(currentProject)
      this.initTaskButtons(currentProject)
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

  loadTasks(currentProject) {
    const projectTasks = currentProject.getTasks()

    const tasksContainer = document.querySelector('#tasks-container')

    tasksContainer.innerHTML = ''

    projectTasks.forEach((task) => {
      this.renderTaskCard(task, tasksContainer)
    })

    this.initTaskButtons(currentProject)
  }

  initTaskButtons(currentProject) {
    const checkboxes = document.querySelectorAll("[type='checkbox']")

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', this.setTaskDone.bind(this, currentProject))
    })
  }

  setTaskDone(currentProject, e) {
    const taskName = e.currentTarget.name
    const taskDone = e.currentTarget.checked

    const clickedTask = currentProject.getTask(taskName)

    clickedTask.setDoneStatus(taskDone)
  }

  renderTaskCard(task, tasksContainer) {
    tasksContainer.innerHTML += `
    <div class="task-card">
      <input type="checkbox" id="taskDone" name="${task.getName()}" ${task.getDoneStatus() ? 'checked' : ""}>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QytCO0FBQ047QUFDUTs7QUFFbEI7QUFDZjtBQUNBLHdCQUF3QixpREFBUTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0M7QUFDTjtBQUNRO0FBQ0Y7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGLFdBQVc7QUFDM0YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZSxJQUFJLHNDQUFzQztBQUM1Ryw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5jb25zdCB1aSA9IG5ldyBVSSh0b2RvTGlzdClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmxvYWRBc3NldHMoKSkiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudGFza3MgPSBbXVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCBkb25lKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCBkb25lKSlcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgbGV0IGZvdW5kVGFzayA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKVxuICAgIFxuICAgIHJldHVybiBmb3VuZFRhc2tcbiAgfVxuXG4gIGdldFRhc2tOYW1lcygpIHtcbiAgICBsZXQgdGFza05hbWVzID0gW11cbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICB0YXNrTmFtZXMucHVzaCh0YXNrLmdldE5hbWUoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tOYW1lc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KClcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICByZXR1cm4gdG9kb0xpc3RcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gJ05vIERhdGUnLCBkb25lID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlXG4gIH1cblxuICBnZXREb25lU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbmVcbiAgfVxuXG4gIHNldERvbmVTdGF0dXMoaXNEb25lKSB7XG4gICAgdGhpcy5kb25lID0gaXNEb25lXG4gIH1cbn0iLCJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb21vcnJvdycpKVxuXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdFwiKVxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3QyXCIsJ05vIERhdGUnLCB0cnVlKVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgICBcbiAgICByZXR1cm4gZm91bmRQcm9qZWN0XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXG4gIH1cblxuICBnZXRQcm9qZWN0TmFtZXMoKSB7XG4gICAgbGV0IHByb2pOYW1lcyA9IFtdXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgcHJvak5hbWVzLnB1c2gocHJvai5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSAnSW5ib3gnXG4gIH1cblxuICBsb2FkQXNzZXRzKCkge1xuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB0aGlzLnNob3dQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICB9XG5cbiAgbG9hZFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWNvbnRhaW5lcicpXG4gICAgY29uc3QgcHJvamVjdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG5cbiAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1RvbW9ycm93J11cbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdHMoKVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgXG4gICAgICBpZiAoIWRlZmF1bHRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBjdXN0b20tcHJvamVjdCAke3Byb2plY3QuZ2V0TmFtZSgpfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbGlzdC11bFwiPjwvaT5cbiAgICAgICAgICA8cD4ke3Byb2plY3QuZ2V0TmFtZSgpfTwvcD5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RUYWdzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIHByb2ouaW5uZXJIVE1MICs9IGBcbiAgICBgXG4gICAgfSlcblxuICAgIHRoaXMuaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpXG4gIH1cblxuICAvLyBQcm9qZWN0IEV2ZW50IExpc3RlbmVyc1xuICBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5pbmJveCcpXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b2RheScpXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC50b21vcnJvdycpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpXG4gICAgXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgdG9tb3Jyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTmV3UHJvamVjdEZvcm0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIHNob3dEZWxldGVCdXR0b24oZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZmEteG1hcmsnKVxuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICB9XG5cbiAgaGlkZURlbGV0ZUJ1dHRvbihlKSB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5mYS14bWFyaycpXG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICB9XG5cbiAgaW5pdFVzZXJQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LmN1c3RvbS1wcm9qZWN0JylcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXhtYXJrJylcblxuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEZWxldGVQcm9qQnV0dG9uKVxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEZWxldGVQcm9qQnV0dG9uLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSlcbiAgICB9KVxuXG4gICAgY3VzdG9tUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd0RlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuaGlkZURlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuXG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlUHJvakJ1dHRvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLmlubmVySFRNTFxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpXG5cbiAgICB0aGlzLnRvZG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdClcblxuICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIHRoaXMuc2hvd1Byb2plY3QoJ0luYm94JylcbiAgICB9XG4gIH1cblxuICBuZXdQcm9qZWN0KCkge1xuICAgIHRoaXMub3Blbk5ld1Byb2plY3RGb3JtKCkuYmluZCh0aGlzKVxuICB9XG5cbiAgb3Blbk5ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdHMtY29udGFpbmVyXCIpXG5cbiAgICBpZiAoIW5ld1Byb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQgfHxcbiAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQudGFnTmFtZSAhPT0gXCJGT1JNXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtJylcbiAgICAgIG5ld1Byb2plY3RGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qTmFtZVwiIG5hbWU9XCJwcm9qZWN0LW5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtZGl2XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tYnV0dG9ucyBzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tYnV0dG9ucyBjbG9zZVwiIHZhbHVlPVwiQ2xvc2VcIj5cbiAgICAgIDwvZGl2PmBcblxuICAgICAgbmV3UHJvamVjdHNDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3RGb3JtKVxuXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdFByb2plY3RGb3JtLmJpbmQodGhpcykpXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQcm9qZWN0Rm9ybSlcbiAgfVxuXG4gIHN1Ym1pdFByb2plY3RGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWUnKS52YWx1ZVxuXG4gICAgY29uc3QgaXNHb29kSW5wdXQgPSB0aGlzLmNoZWNrUHJvaklucHV0KHByb2pJbnB1dClcblxuICAgIGlmKGlzR29vZElucHV0KSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LmFkZFByb2plY3QocHJvaklucHV0KVxuICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgICAgdGhpcy5zaG93UHJvamVjdChwcm9qSW5wdXQpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJylcblxuICAgIHByb2pGb3JtLnJlbW92ZSgpXG4gIH1cblxuICBjaGVja1Byb2pJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHByb2plY3QgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0TmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RCdXR0b25zKGUpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuXG4gICAgdGhpcy5zaG93UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgfVxuICAgIFxuICBzaG93UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKVxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza3MtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7cHJvamVjdE5hbWV9PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ldy10YXNrXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgTmV3IFRhc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0YXNrcy1jb250YWluZXJcIj48L2Rpdj5cbiAgICBgXG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICdUb2RheScpIHtcbiAgICAgIHRoaXMuc2hvd1RvZGF5c1Rhc2tzKClcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lID09PSAnVG9tb3Jyb3cnKSB7XG4gICAgICB0aGlzLnNob3dUb21vcnJvd3NUYXNrcygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFRhc2tzKHByb2plY3QpXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgIHRoaXMuaW5pdE5ld1Rhc2tCdXR0b24ocHJvamVjdE5hbWUpXG4gIH1cblxuICBpbml0TmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJylcblxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5OZXdUYXNrRm9ybS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb3Blbk5ld1Rhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIilcblxuICAgIGlmICghdGFza3NDb250YWluZXIuZmlyc3RDaGlsZCB8fCB0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZm9ybScpXG4gICAgICBuZXdUYXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFzay1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiBpZD1cImNsb3NlLXRhc2stZm9ybS1idXR0b25cIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLnByZXBlbmQobmV3VGFza0Zvcm0pXG5cbiAgICAgIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnN1Ym1pdFRhc2tGb3JtLmJpbmQodGhpcykpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLWZvcm0tYnV0dG9uJylcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVRhc2tGb3JtKVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdFRhc2tGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlXG4gICAgY29uc29sZS5sb2codGFza05hbWUpXG5cbiAgICBjb25zdCBpc0dvb2ROYW1lID0gdGhpcy5jaGVja1Rhc2tJbnB1dCh0YXNrTmFtZSlcblxuICAgIGlmIChpc0dvb2ROYW1lKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSlcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFza05hbWUpXG4gICAgICB0aGlzLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgIHRoaXMuaW5pdFRhc2tCdXR0b25zKGN1cnJlbnRQcm9qZWN0KVxuICAgIH1cbiAgfSBcblxuICBjaGVja1Rhc2tJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIFRhc2sgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKS5nZXRUYXNrTmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSB0YXNrIG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgdGFza3NDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgfVxuXG4gIHNob3dUb2RheXNUYXNrcygpIHtcbiAgICBcbiAgfVxuXG4gIHNob3dUb21vcnJvd3NUYXNrcygpIHtcblxuICB9XG5cbiAgbG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJylcblxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZCh0YXNrLCB0YXNrc0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5pbml0VGFza0J1dHRvbnMoY3VycmVudFByb2plY3QpXG4gIH1cblxuICBpbml0VGFza0J1dHRvbnMoY3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlt0eXBlPSdjaGVja2JveCddXCIpXG5cbiAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldFRhc2tEb25lLmJpbmQodGhpcywgY3VycmVudFByb2plY3QpKVxuICAgIH0pXG4gIH1cblxuICBzZXRUYXNrRG9uZShjdXJyZW50UHJvamVjdCwgZSkge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWVcbiAgICBjb25zdCB0YXNrRG9uZSA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkXG5cbiAgICBjb25zdCBjbGlja2VkVGFzayA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2sodGFza05hbWUpXG5cbiAgICBjbGlja2VkVGFzay5zZXREb25lU3RhdHVzKHRhc2tEb25lKVxuICB9XG5cbiAgcmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpIHtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmRcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2tEb25lXCIgbmFtZT1cIiR7dGFzay5nZXROYW1lKCl9XCIgJHt0YXNrLmdldERvbmVTdGF0dXMoKSA/ICdjaGVja2VkJyA6IFwiXCJ9PlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke3Rhc2suZ2V0TmFtZSgpfTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxwPkR1ZSBEYXRlPC9wPlxuICAgICAgICA8cD4ke3Rhc2suZ2V0RHVlRGF0ZSgpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==