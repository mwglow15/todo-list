import Project from './project.js'
import Task from './task.js'
import TodoList from './todoList.js'
import Storage from './storage.js'

export default class UI {
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