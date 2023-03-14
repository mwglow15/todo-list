import Project from './project.js'
import Task from './task.js'
import TodoList from './todoList.js'

export default class UI {

  static init() {
    const todoList = new TodoList()

    todoList.addProject(new Project('Inbox'))
    todoList.addProject(new Project('Today'))
    todoList.addProject(new Project('Tomorrow'))

    UI.initProjectButtons()
  }

  // Project Event Listeners
  static initProjectButtons() {
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const customProjects = document.querySelectorAll('.project.custom-project')
    const addProjectButton = document.querySelector('#new-project')
    
    inbox.addEventListener('click', this.showProject)
    today.addEventListener('click', this.showProject)
    tomorrow.addEventListener('click', this.showProject)
    customProjects.forEach(project => {
      project.addEventListener('click', this.showProject)
    })

    addProjectButton.addEventListener('click', this.newProject())
  }

  static newProject() {
    this.openNewProjectForm()
  }

  static showProject(e) {
    console.log(e.target.parentNode.children[1].textContent)
    const project = e.target.parentNode.children[1].textContent
    
    const tasksContainer = document.querySelector('#project-container')

    tasksContainer.innerHTML = `
    <div id="project-title">${project}</div>
    <div id="tasks-container"></div>
    `
  }
}