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
    const dueDates = document.querySelectorAll(".task-date-container")
    const newDateForms = document.querySelectorAll(".task-date-input")
    const taskNames = document.querySelectorAll(".task-name")

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', this.setTaskDone.bind(this, currentProject))
    })

    taskNames.forEach(taskName => {
      taskName.addEventListener('click', showEditTaskNameForm.bind(this))
    })

    dueDates.forEach(dueDate => {
      dueDate.addEventListener('click', this.showEditDateForm.bind(this))
    })

    newDateForms.forEach(newDateForm => {
      newDateForm.addEventListener('change', this.editDueDate.bind(this, currentProject))
    })
  }

  showEditTaskNameForm(e) {

  }

  showEditDateForm(e) {
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
    const taskName = task.getName()

    const inputValue = taskDate == "No Date" ? "" : taskDate

    tasksContainer.innerHTML += `
    <div class="task-card">
      <input type="checkbox" id="taskDone" name="${taskName}" ${task.getDoneStatus() ? 'checked' : ""}>
      <div class="task-name-container">
        <p class="task-name">${taskName}</p>
        <input type="text" id="name-input" value="${taskName}">
      </div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZOztBQUVwQyxxQkFBcUIsb0RBQVE7QUFDN0IsZUFBZSw4Q0FBRTs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QytCO0FBQ047QUFDUTs7QUFFbEI7QUFDZjtBQUNBLHdCQUF3QixpREFBUTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjRCO0FBQ007O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQSwyQkFBMkIsbURBQU87QUFDbEMsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0M7QUFDTjtBQUNRO0FBQ0Y7QUFDTjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGLFdBQVc7QUFDM0YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVMsSUFBSSxzQ0FBc0M7QUFDdEc7QUFDQSwrQkFBK0IsU0FBUztBQUN4QyxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFdBQVc7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUkgZnJvbSAnLi91aS5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG5jb25zdCB1aSA9IG5ldyBVSSh0b2RvTGlzdClcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpLmxvYWRBc3NldHMoKSkiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudGFza3MgPSBbXVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCBkb25lKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCBkb25lKSlcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgbGV0IGZvdW5kVGFzayA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKVxuICAgIFxuICAgIHJldHVybiBmb3VuZFRhc2tcbiAgfVxuXG4gIGdldFRhc2tOYW1lcygpIHtcbiAgICBsZXQgdGFza05hbWVzID0gW11cbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICB0YXNrTmFtZXMucHVzaCh0YXNrLmdldE5hbWUoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tOYW1lc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb0xpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KClcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICByZXR1cm4gdG9kb0xpc3RcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gJ05vIERhdGUnLCBkb25lID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlXG4gIH1cblxuICBnZXREb25lU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbmVcbiAgfVxuXG4gIHNldERvbmVTdGF0dXMoaXNEb25lKSB7XG4gICAgdGhpcy5kb25lID0gaXNEb25lXG4gIH1cbn0iLCJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb21vcnJvdycpKVxuXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdFwiLCAnMjAxOC0wNy0yMicpXG4gICAgdGhpcy5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGVzdDJcIiwnTm8gRGF0ZScsIHRydWUpXG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSlcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgbGV0IGZvdW5kUHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKVxuICAgIFxuICAgIHJldHVybiBmb3VuZFByb2plY3RcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSlcbiAgfVxuXG4gIGdldFByb2plY3ROYW1lcygpIHtcbiAgICBsZXQgcHJvak5hbWVzID0gW11cbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICBwcm9qTmFtZXMucHVzaChwcm9qLmdldE5hbWUoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2pOYW1lc1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb0xpc3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gdG9kb0xpc3RcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9ICdJbmJveCdcbiAgfVxuXG4gIGxvYWRBc3NldHMoKSB7XG5cbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgdGhpcy5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgIHRoaXMuc2hvd1Byb2plY3QodGhpcy5jdXJyZW50UHJvamVjdE5hbWUpXG4gIH1cblxuICAvL1NpZGUgQmFyIEZ1bmN0aW9uIC8vXG5cbiAgLy9Mb2FkcyBwcm9qZWN0cyBpbiBUb2RvIExpc3QgaW50byBuYXYgYmFyXG4gIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1jb250YWluZXInKVxuICAgIGNvbnN0IHByb2plY3RUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuXG4gICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gWydJbmJveCcsICdUb2RheScsICdUb21vcnJvdyddXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3RzKClcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKClcbiAgICAgIFxuICAgICAgaWYgKCFkZWZhdWx0UHJvamVjdHMuaW5jbHVkZXMocHJvamVjdE5hbWUpKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QgY3VzdG9tLXByb2plY3QgJHtwcm9qZWN0LmdldE5hbWUoKX1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLWxpc3QtdWxcIj48L2k+XG4gICAgICAgICAgPHA+JHtwcm9qZWN0LmdldE5hbWUoKX08L3A+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9qZWN0VGFncy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBwcm9qLmlubmVySFRNTCArPSBgXG4gICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRVc2VyUHJvamVjdEJ1dHRvbnMoKVxuICB9XG5cbiAgLy8gUHJvamVjdCBFdmVudCBMaXN0ZW5lcnNcbiAgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuaW5ib3gnKVxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9kYXknKVxuICAgIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QudG9tb3Jyb3cnKVxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKVxuICAgIFxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgIHRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5ld1Byb2plY3RGb3JtLmJpbmQodGhpcykpXG4gIH1cblxuICBzaG93RGVsZXRlQnV0dG9uKGUpIHtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmZhLXhtYXJrJylcbiAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgfVxuXG4gIGhpZGVEZWxldGVCdXR0b24oZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZmEteG1hcmsnKVxuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxuXG4gIGluaXRVc2VyUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgY3VzdG9tUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC5jdXN0b20tcHJvamVjdCcpXG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS14bWFyaycpXG5cbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRGVsZXRlUHJvakJ1dHRvbilcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRGVsZXRlUHJvakJ1dHRvbi5iaW5kKHRoaXMpLCB7b25jZTogdHJ1ZX0pXG4gICAgfSlcblxuICAgIGN1c3RvbVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQcm9qZWN0QnV0dG9ucy5iaW5kKHRoaXMpKVxuICAgICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNob3dEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcbiAgICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhpZGVEZWxldGVCdXR0b24uYmluZCh0aGlzKSlcblxuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUHJvamVjdEJ1dHRvbnMuYmluZCh0aGlzKSlcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5zaG93RGVsZXRlQnV0dG9uLmJpbmQodGhpcykpXG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5oaWRlRGVsZXRlQnV0dG9uLmJpbmQodGhpcykpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZVByb2pCdXR0b24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUxcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG4gICAgdGhpcy50b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpXG5cbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpXG4gICAgaWYgKHRoaXMuY3VycmVudFByb2plY3ROYW1lID09IHByb2plY3ROYW1lKSB7XG4gICAgICB0aGlzLnNob3dQcm9qZWN0KCdJbmJveCcpXG4gICAgfVxuICB9XG5cbiAgbmV3UHJvamVjdCgpIHtcbiAgICB0aGlzLm9wZW5OZXdQcm9qZWN0Rm9ybSgpLmJpbmQodGhpcylcbiAgfVxuXG4gIG9wZW5OZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkIHx8XG4gICAgICBuZXdQcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkLnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpXG4gICAgICBuZXdQcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvak5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWJ1dHRvbnMgY2xvc2VcIiB2YWx1ZT1cIkNsb3NlXCI+XG4gICAgICA8L2Rpdj5gXG5cbiAgICAgIG5ld1Byb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Rm9ybSlcblxuICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRQcm9qZWN0Rm9ybS5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvamVjdEZvcm0pXG4gIH1cblxuICBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pOYW1lJykudmFsdWVcblxuICAgIGNvbnN0IGlzR29vZElucHV0ID0gdGhpcy5jaGVja1Byb2pJbnB1dChwcm9qSW5wdXQpXG5cbiAgICBpZihpc0dvb2RJbnB1dCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pJbnB1dClcbiAgICAgIHRoaXMubG9hZFByb2plY3RzKClcbiAgICAgIHRoaXMuc2hvd1Byb2plY3QocHJvaklucHV0KVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpXG5cbiAgICBwcm9qRm9ybS5yZW1vdmUoKVxuICB9XG5cbiAgY2hlY2tQcm9qSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSBwcm9qZWN0IG5hbWUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdE5hbWVzKCkuaW5jbHVkZXMoaW5wdXQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRW50ZXIgYSB1bmlxdWUgcHJvamVjdCBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBoYW5kbGVQcm9qZWN0QnV0dG9ucyhlKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcblxuICAgIHRoaXMuc2hvd1Byb2plY3QocHJvamVjdE5hbWUpXG4gIH1cblxuICAvLyBQcm9qZWN0IFZpZXcgRnVuY3Rpb25zXG4gICAgXG4gIHNob3dQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMudG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcblxuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHtwcm9qZWN0TmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmV3LXRhc2tcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPlxuICAgICAgICBOZXcgVGFza1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGBcblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ1RvZGF5Jykge1xuICAgICAgdGhpcy5zaG93VG9kYXlzVGFza3MoKVxuICAgIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09ICdUb21vcnJvdycpIHtcbiAgICAgIHRoaXMuc2hvd1RvbW9ycm93c1Rhc2tzKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkVGFza3MocHJvamVjdClcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXG4gICAgdGhpcy5pbml0TmV3VGFza0J1dHRvbihwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGluaXROZXdUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKVxuXG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5ld1Rhc2tGb3JtLmJpbmQodGhpcykpXG4gIH1cblxuICBvcGVuTmV3VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKVxuXG4gICAgaWYgKCF0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkIHx8IHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQudGFnTmFtZSAhPT0gXCJGT1JNXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJylcbiAgICAgIG5ld1Rhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj5UYXNrIE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrLW5hbWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtZGl2XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tYnV0dG9ucyBzdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tYnV0dG9ucyBjbG9zZVwiIGlkPVwiY2xvc2UtdGFzay1mb3JtLWJ1dHRvblwiIHZhbHVlPVwiQ2xvc2VcIj5cbiAgICAgIDwvZGl2PmBcblxuICAgICAgdGFza3NDb250YWluZXIucHJlcGVuZChuZXdUYXNrRm9ybSlcblxuICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMuc3VibWl0VGFza0Zvcm0uYmluZCh0aGlzKSlcbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stZm9ybS1idXR0b24nKVxuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlVGFza0Zvcm0pXG4gICAgfVxuICB9XG5cbiAgc3VibWl0VGFza0Zvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWVcbiAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSlcblxuICAgIGNvbnN0IGlzR29vZE5hbWUgPSB0aGlzLmNoZWNrVGFza0lucHV0KHRhc2tOYW1lKVxuXG4gICAgaWYgKGlzR29vZE5hbWUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy50b2RvTGlzdC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3ROYW1lKVxuICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayh0YXNrTmFtZSlcbiAgICAgIHRoaXMubG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgdGhpcy5pbml0VGFza0J1dHRvbnMoY3VycmVudFByb2plY3QpXG4gICAgfVxuICB9IFxuXG4gIGNoZWNrVGFza0lucHV0KGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09PSAnJykge1xuICAgICAgY29uc29sZS5sb2coJ0VudGVyIGEgVGFzayBuYW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnRvZG9MaXN0LmdldFByb2plY3QodGhpcy5jdXJyZW50UHJvamVjdE5hbWUpLmdldFRhc2tOYW1lcygpLmluY2x1ZGVzKGlucHV0KSkge1xuICAgICAgY29uc29sZS5sb2coJ0VudGVyIGEgdW5pcXVlIHRhc2sgbmFtZScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpXG5cbiAgICB0YXNrc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKVxuICB9XG5cbiAgc2hvd1RvZGF5c1Rhc2tzKCkge1xuICAgIFxuICB9XG5cbiAgc2hvd1RvbW9ycm93c1Rhc2tzKCkge1xuXG4gIH1cblxuICBsb2FkVGFza3MoY3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpXG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1jb250YWluZXInKVxuXG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRhc2tDYXJkKHRhc2ssIHRhc2tzQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRUYXNrQnV0dG9ucyhjdXJyZW50UHJvamVjdClcbiAgfVxuXG4gIGluaXRUYXNrQnV0dG9ucyhjdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3R5cGU9J2NoZWNrYm94J11cIilcbiAgICBjb25zdCBkdWVEYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kYXRlLWNvbnRhaW5lclwiKVxuICAgIGNvbnN0IG5ld0RhdGVGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kYXRlLWlucHV0XCIpXG4gICAgY29uc3QgdGFza05hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLW5hbWVcIilcblxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0VGFza0RvbmUuYmluZCh0aGlzLCBjdXJyZW50UHJvamVjdCkpXG4gICAgfSlcblxuICAgIHRhc2tOYW1lcy5mb3JFYWNoKHRhc2tOYW1lID0+IHtcbiAgICAgIHRhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0VkaXRUYXNrTmFtZUZvcm0uYmluZCh0aGlzKSlcbiAgICB9KVxuXG4gICAgZHVlRGF0ZXMuZm9yRWFjaChkdWVEYXRlID0+IHtcbiAgICAgIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dFZGl0RGF0ZUZvcm0uYmluZCh0aGlzKSlcbiAgICB9KVxuXG4gICAgbmV3RGF0ZUZvcm1zLmZvckVhY2gobmV3RGF0ZUZvcm0gPT4ge1xuICAgICAgbmV3RGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5lZGl0RHVlRGF0ZS5iaW5kKHRoaXMsIGN1cnJlbnRQcm9qZWN0KSlcbiAgICB9KVxuICB9XG5cbiAgc2hvd0VkaXRUYXNrTmFtZUZvcm0oZSkge1xuXG4gIH1cblxuICBzaG93RWRpdERhdGVGb3JtKGUpIHtcbiAgICBjb25zdCB0YXNrVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgY29uc3QgdGFza0RhdGVGb3JtID0gdGFza1RhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlLWlucHV0XCIpXG5cbiAgICB0YXNrVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0YXNrRGF0ZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICB9XG5cbiAgZWRpdER1ZURhdGUoY3VycmVudFByb2plY3QsIGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS50ZXh0Q29udGVudFxuICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lKVxuICAgIGNvbnN0IHRhc2sgPSBjdXJyZW50UHJvamVjdC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBlLnRhcmdldC52YWx1ZVxuXG4gICAgdGFzay5zZXREdWVEYXRlKG5ld0RhdGUpXG5cbiAgICB0aGlzLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgfVxuXG4gIHNldFRhc2tEb25lKGN1cnJlbnRQcm9qZWN0LCBlKSB7XG4gICAgY29uc3QgdGFza05hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZVxuICAgIGNvbnN0IHRhc2tEb25lID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcblxuICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gY3VycmVudFByb2plY3QuZ2V0VGFzayh0YXNrTmFtZSlcblxuICAgIGNsaWNrZWRUYXNrLnNldERvbmVTdGF0dXModGFza0RvbmUpXG4gIH1cblxuICByZW5kZXJUYXNrQ2FyZCh0YXNrLCB0YXNrc0NvbnRhaW5lcikge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gdGFzay5nZXREdWVEYXRlKClcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2suZ2V0TmFtZSgpXG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGFza0RhdGUgPT0gXCJObyBEYXRlXCIgPyBcIlwiIDogdGFza0RhdGVcblxuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stY2FyZFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFza0RvbmVcIiBuYW1lPVwiJHt0YXNrTmFtZX1cIiAke3Rhc2suZ2V0RG9uZVN0YXR1cygpID8gJ2NoZWNrZWQnIDogXCJcIn0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFza05hbWV9PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWUtaW5wdXRcIiB2YWx1ZT1cIiR7dGFza05hbWV9XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxwPkR1ZSBEYXRlPC9wPlxuICAgICAgICA8cD4ke3Rhc2tEYXRlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZS1pbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZS1pbnB1dFwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlLWlucHV0XCIgdmFsdWU9XCIke2lucHV0VmFsdWV9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=