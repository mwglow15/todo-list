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
    console.log('thisthisthis')
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

  // Functions to switch active project

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
    const tasksContainer = document.querySelector('#project-container')
    const project = this.todoList.getProject(projectName)

    tasksContainer.innerHTML = `
    <div class="tasks-header">
      <div id="project-title">${projectName}</div>
      <button type="button" id="new-task">
        <i class="fa-sharp fa-solid fa-plus"></i>
        New Task
      </button>
    </div>
    <div id="tasks-container"></div>
    `

    if (projectName === 'Today') {
      console.log(this)
      this.showTodaysTasks()
    } else if (projectName === 'Tomorrow') {
      this.showTomorrowsTasks()
    } else {
      this.renderTaskCards(project)
    }

    this.initTaskButtons()
  }

  initTaskButtons() {

  }

  showTodaysTasks() {
    
  }

  showTomorrowsTasks() {

  }

  renderTaskCards(project) {

  }
}