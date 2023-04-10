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

    this.projects[0].addTask("test", '2018-07-22')
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

  //Side Bar Function //

  //Loads projects in Todo List into nav bar
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

  // Project View Functions
    
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
    const dueDate = document.querySelectorAll(".task-date-container")
    const newDateForms = document.querySelectorAll(".task-date-input")

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', this.setTaskDone.bind(this, currentProject))
    })

    dueDate.forEach(dateButton => {
      dateButton.addEventListener('click', this.showEditDateForm.bind(this, currentProject))
    })

    newDateForms.forEach(newDateForm => {
      newDateForm.addEventListener('change', this.editDueDate.bind(this, currentProject))
    })
  }

  showEditDateForm(currentProject, e) {
    const taskTarget = e.currentTarget
    const taskDateForm = taskTarget.parentElement.querySelector(".task-date-input")

    taskTarget.style.display = 'none'
    taskDateForm.style.display = 'flex'
  }

  editDueDate(currentProject, e) {
    console.log(e)
    const taskName = e.target.parentElement.parentElement.querySelector('.task-name').textContent
    console.log(taskName)
    const task = currentProject.getTask(taskName)
    const newDate = e.target.value

    task.setDueDate(newDate)

    this.loadTasks(currentProject)
  }

  setTaskDone(currentProject, e) {
    const taskName = e.currentTarget.name
    const taskDone = e.currentTarget.checked

    const clickedTask = currentProject.getTask(taskName)

    clickedTask.setDoneStatus(taskDone)
  }

  renderTaskCard(task, tasksContainer) {
    const taskDate = task.getDueDate()

    const inputValue = taskDate == "No Date" ? "" : taskDate

    tasksContainer.innerHTML += `
    <div class="task-card">
      <input type="checkbox" id="taskDone" name="${task.getName()}" ${task.getDoneStatus() ? 'checked' : ""}>
      <p class="task-name">${task.getName()}</p>
      <div class="task-date-container">
        <p>Due Date</p>
        <p>${taskDate}</p>
      </div>
      <div class="task-date-input">
        <label for="date-input">Due Date</label>
        <input type="date" id="date-input" value="${inputValue}">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QytCO0FBQ047QUFDUTs7QUFFbEI7QUFDZjtBQUNBLHdCQUF3QixpREFBUTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0M7QUFDTjtBQUNRO0FBQ0Y7QUFDTjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGLFdBQVc7QUFDM0YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZSxJQUFJLHNDQUFzQztBQUM1Ryw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxXQUFXO0FBQy9EO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJIGZyb20gJy4vdWkuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcydcblxuY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKVxuY29uc3QgdWkgPSBuZXcgVUkodG9kb0xpc3QpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB1aS5sb2FkQXNzZXRzKCkpIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSwgZG9uZSkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSwgZG9uZSkpXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBmb3VuZFRhc2sgPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSlcbiAgICBcbiAgICByZXR1cm4gZm91bmRUYXNrXG4gIH1cblxuICBnZXRUYXNrTmFtZXMoKSB7XG4gICAgbGV0IHRhc2tOYW1lcyA9IFtdXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgdGFza05hbWVzLnB1c2godGFzay5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiB0YXNrTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvZG9MaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpXG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRvZG9MaXN0XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSA9ICdObyBEYXRlJywgZG9uZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLmRvbmUgPSBkb25lXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIHNldER1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVxuICB9XG5cbiAgZ2V0RG9uZVN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5kb25lXG4gIH1cblxuICBzZXREb25lU3RhdHVzKGlzRG9uZSkge1xuICAgIHRoaXMuZG9uZSA9IGlzRG9uZVxuICB9XG59IiwiXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9tb3Jyb3cnKSlcblxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3RcIiwgJzIwMTgtMDctMjInKVxuICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayhcInRlc3QyXCIsJ05vIERhdGUnLCB0cnVlKVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgICBcbiAgICByZXR1cm4gZm91bmRQcm9qZWN0XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXG4gIH1cblxuICBnZXRQcm9qZWN0TmFtZXMoKSB7XG4gICAgbGV0IHByb2pOYW1lcyA9IFtdXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgcHJvak5hbWVzLnB1c2gocHJvai5nZXROYW1lKCkpXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qTmFtZXNcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSAnSW5ib3gnXG4gIH1cblxuICBsb2FkQXNzZXRzKCkge1xuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKClcbiAgICB0aGlzLnNob3dQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICB9XG5cbiAgLy9TaWRlIEJhciBGdW5jdGlvbiAvL1xuXG4gIC8vTG9hZHMgcHJvamVjdHMgaW4gVG9kbyBMaXN0IGludG8gbmF2IGJhclxuICBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtY29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qZWN0VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcblxuICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IFsnSW5ib3gnLCAnVG9kYXknLCAnVG9tb3Jyb3cnXVxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0cygpXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICBcbiAgICAgIGlmICghZGVmYXVsdFByb2plY3RzLmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0IGN1c3RvbS1wcm9qZWN0ICR7cHJvamVjdC5nZXROYW1lKCl9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1saXN0LXVsXCI+PC9pPlxuICAgICAgICAgIDxwPiR7cHJvamVjdC5nZXROYW1lKCl9PC9wPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcHJvamVjdFRhZ3MuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgcHJvai5pbm5lckhUTUwgKz0gYFxuICAgIGBcbiAgICB9KVxuXG4gICAgdGhpcy5pbml0VXNlclByb2plY3RCdXR0b25zKClcbiAgfVxuXG4gIC8vIFByb2plY3QgRXZlbnQgTGlzdGVuZXJzXG4gIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmluYm94JylcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvZGF5JylcbiAgICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LnRvbW9ycm93JylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JylcbiAgICBcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICB0b21vcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgc2hvd0RlbGV0ZUJ1dHRvbihlKSB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5mYS14bWFyaycpXG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gIH1cblxuICBoaWRlRGVsZXRlQnV0dG9uKGUpIHtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmZhLXhtYXJrJylcbiAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cblxuICBpbml0VXNlclByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGN1c3RvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QuY3VzdG9tLXByb2plY3QnKVxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEteG1hcmsnKVxuXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURlbGV0ZVByb2pCdXR0b24pXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURlbGV0ZVByb2pCdXR0b24uYmluZCh0aGlzKSwge29uY2U6IHRydWV9KVxuICAgIH0pXG5cbiAgICBjdXN0b21Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5zaG93RGVsZXRlQnV0dG9uLmJpbmQodGhpcykpXG4gICAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5oaWRlRGVsZXRlQnV0dG9uLmJpbmQodGhpcykpXG5cbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByb2plY3RCdXR0b25zLmJpbmQodGhpcykpXG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd0RlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuaGlkZURlbGV0ZUJ1dHRvbi5iaW5kKHRoaXMpKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVEZWxldGVQcm9qQnV0dG9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJIVE1MXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcblxuICAgIHRoaXMudG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0KVxuXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKVxuICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgdGhpcy5zaG93UHJvamVjdCgnSW5ib3gnKVxuICAgIH1cbiAgfVxuXG4gIG5ld1Byb2plY3QoKSB7XG4gICAgdGhpcy5vcGVuTmV3UHJvamVjdEZvcm0oKS5iaW5kKHRoaXMpXG4gIH1cblxuICBvcGVuTmV3UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0cy1jb250YWluZXJcIilcblxuICAgIGlmICghbmV3UHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCB8fFxuICAgICAgbmV3UHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xuICAgICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2pOYW1lXCIgbmFtZT1cInByb2plY3QtbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9ucy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1idXR0b25zIHN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1idXR0b25zIGNsb3NlXCIgdmFsdWU9XCJDbG9zZVwiPlxuICAgICAgPC9kaXY+YFxuXG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdEZvcm0pXG5cbiAgICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0UHJvamVjdEZvcm0uYmluZCh0aGlzKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVByb2plY3RGb3JtKVxuICB9XG5cbiAgc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qTmFtZScpLnZhbHVlXG5cbiAgICBjb25zdCBpc0dvb2RJbnB1dCA9IHRoaXMuY2hlY2tQcm9qSW5wdXQocHJvaklucHV0KVxuXG4gICAgaWYoaXNHb29kSW5wdXQpIHtcbiAgICAgIHRoaXMudG9kb0xpc3QuYWRkUHJvamVjdChwcm9qSW5wdXQpXG4gICAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgICB0aGlzLnNob3dQcm9qZWN0KHByb2pJbnB1dClcbiAgICB9XG4gIH1cblxuICBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKVxuXG4gICAgcHJvakZvcm0ucmVtb3ZlKClcbiAgfVxuXG4gIGNoZWNrUHJvaklucHV0KGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09PSAnJykge1xuICAgICAgY29uc29sZS5sb2coJ0VudGVyIGEgcHJvamVjdCBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnRvZG9MaXN0LmdldFByb2plY3ROYW1lcygpLmluY2x1ZGVzKGlucHV0KSkge1xuICAgICAgY29uc29sZS5sb2coJ0VudGVyIGEgdW5pcXVlIHByb2plY3QgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFuZGxlUHJvamVjdEJ1dHRvbnMoZSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50XG5cbiAgICB0aGlzLnNob3dQcm9qZWN0KHByb2plY3ROYW1lKVxuICB9XG5cbiAgLy8gUHJvamVjdCBWaWV3IEZ1bmN0aW9uc1xuICAgIFxuICBzaG93UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKVxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza3MtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7cHJvamVjdE5hbWV9PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ldy10YXNrXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgTmV3IFRhc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0YXNrcy1jb250YWluZXJcIj48L2Rpdj5cbiAgICBgXG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICdUb2RheScpIHtcbiAgICAgIHRoaXMuc2hvd1RvZGF5c1Rhc2tzKClcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lID09PSAnVG9tb3Jyb3cnKSB7XG4gICAgICB0aGlzLnNob3dUb21vcnJvd3NUYXNrcygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFRhc2tzKHByb2plY3QpXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgIHRoaXMuaW5pdE5ld1Rhc2tCdXR0b24ocHJvamVjdE5hbWUpXG4gIH1cblxuICBpbml0TmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJylcblxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5OZXdUYXNrRm9ybS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb3Blbk5ld1Rhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIilcblxuICAgIGlmICghdGFza3NDb250YWluZXIuZmlyc3RDaGlsZCB8fCB0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZm9ybScpXG4gICAgICBuZXdUYXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFzay1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiBpZD1cImNsb3NlLXRhc2stZm9ybS1idXR0b25cIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLnByZXBlbmQobmV3VGFza0Zvcm0pXG5cbiAgICAgIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnN1Ym1pdFRhc2tGb3JtLmJpbmQodGhpcykpXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLWZvcm0tYnV0dG9uJylcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVRhc2tGb3JtKVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdFRhc2tGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlXG4gICAgY29uc29sZS5sb2codGFza05hbWUpXG5cbiAgICBjb25zdCBpc0dvb2ROYW1lID0gdGhpcy5jaGVja1Rhc2tJbnB1dCh0YXNrTmFtZSlcblxuICAgIGlmIChpc0dvb2ROYW1lKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSlcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFza05hbWUpXG4gICAgICB0aGlzLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgIHRoaXMuaW5pdFRhc2tCdXR0b25zKGN1cnJlbnRQcm9qZWN0KVxuICAgIH1cbiAgfSBcblxuICBjaGVja1Rhc2tJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIFRhc2sgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKS5nZXRUYXNrTmFtZXMoKS5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBhIHVuaXF1ZSB0YXNrIG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgdGFza3NDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgfVxuXG4gIHNob3dUb2RheXNUYXNrcygpIHtcbiAgICBcbiAgfVxuXG4gIHNob3dUb21vcnJvd3NUYXNrcygpIHtcblxuICB9XG5cbiAgbG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJylcblxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZCh0YXNrLCB0YXNrc0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5pbml0VGFza0J1dHRvbnMoY3VycmVudFByb2plY3QpXG4gIH1cblxuICBpbml0VGFza0J1dHRvbnMoY3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlt0eXBlPSdjaGVja2JveCddXCIpXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kYXRlLWNvbnRhaW5lclwiKVxuICAgIGNvbnN0IG5ld0RhdGVGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kYXRlLWlucHV0XCIpXG5cbiAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldFRhc2tEb25lLmJpbmQodGhpcywgY3VycmVudFByb2plY3QpKVxuICAgIH0pXG5cbiAgICBkdWVEYXRlLmZvckVhY2goZGF0ZUJ1dHRvbiA9PiB7XG4gICAgICBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RWRpdERhdGVGb3JtLmJpbmQodGhpcywgY3VycmVudFByb2plY3QpKVxuICAgIH0pXG5cbiAgICBuZXdEYXRlRm9ybXMuZm9yRWFjaChuZXdEYXRlRm9ybSA9PiB7XG4gICAgICBuZXdEYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmVkaXREdWVEYXRlLmJpbmQodGhpcywgY3VycmVudFByb2plY3QpKVxuICAgIH0pXG4gIH1cblxuICBzaG93RWRpdERhdGVGb3JtKGN1cnJlbnRQcm9qZWN0LCBlKSB7XG4gICAgY29uc3QgdGFza1RhcmdldCA9IGUuY3VycmVudFRhcmdldFxuICAgIGNvbnN0IHRhc2tEYXRlRm9ybSA9IHRhc2tUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZS1pbnB1dFwiKVxuXG4gICAgdGFza1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGFza0RhdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgfVxuXG4gIGVkaXREdWVEYXRlKGN1cnJlbnRQcm9qZWN0LCBlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudGV4dENvbnRlbnRcbiAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSlcbiAgICBjb25zdCB0YXNrID0gY3VycmVudFByb2plY3QuZ2V0VGFzayh0YXNrTmFtZSlcbiAgICBjb25zdCBuZXdEYXRlID0gZS50YXJnZXQudmFsdWVcblxuICAgIHRhc2suc2V0RHVlRGF0ZShuZXdEYXRlKVxuXG4gICAgdGhpcy5sb2FkVGFza3MoY3VycmVudFByb2plY3QpXG4gIH1cblxuICBzZXRUYXNrRG9uZShjdXJyZW50UHJvamVjdCwgZSkge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWVcbiAgICBjb25zdCB0YXNrRG9uZSA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkXG5cbiAgICBjb25zdCBjbGlja2VkVGFzayA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2sodGFza05hbWUpXG5cbiAgICBjbGlja2VkVGFzay5zZXREb25lU3RhdHVzKHRhc2tEb25lKVxuICB9XG5cbiAgcmVuZGVyVGFza0NhcmQodGFzaywgdGFza3NDb250YWluZXIpIHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpXG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGFza0RhdGUgPT0gXCJObyBEYXRlXCIgPyBcIlwiIDogdGFza0RhdGVcblxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stY2FyZFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFza0RvbmVcIiBuYW1lPVwiJHt0YXNrLmdldE5hbWUoKX1cIiAke3Rhc2suZ2V0RG9uZVN0YXR1cygpID8gJ2NoZWNrZWQnIDogXCJcIn0+XG4gICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay5nZXROYW1lKCl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgPHA+RHVlIERhdGU8L3A+XG4gICAgICAgIDxwPiR7dGFza0RhdGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlLWlucHV0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGUtaW5wdXRcIiB2YWx1ZT1cIiR7aW5wdXRWYWx1ZX1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==