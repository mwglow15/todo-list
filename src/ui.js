import Project from './project.js'
import Task from './task.js'
import TodoList from './todoList.js'
import Storage from './storage.js'

export default class UI {
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
    const projectContainer = document.querySelector('#project-container')
    const project = this.todoList.getProject(projectName)
    console.log(project)
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

    this.initTaskButtons(projectName)
  }

  initTaskButtons(project) {
    const newTask = document.querySelector('.new-task')
    console.log('initTaskButtons')
    console.log(this)
    newTask.addEventListener('click', this.newTaskForm())
  }

  newTaskForm() {

  }

  showTodaysTasks() {
    
  }

  showTomorrowsTasks() {

  }

  loadTasks(project) {
    console.log("task card")
    console.log(project)
    const projectTasks = project.getTasks()

    const tasksContainer = document.querySelector('#tasks-container')

    tasksContainer.innerHTML = ''

    projectTasks.forEach((task) => {
      this.renderTaskCard(task, tasksContainer)
    })
  }

  renderTaskCard(task, tasksContainer) {
    console.log(task)
    

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