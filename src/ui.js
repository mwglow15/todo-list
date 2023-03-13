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
    
    inbox.addEventListener('click', this.addProjectButtons)
    today.addEventListener('click', this.addProjectButtons)
    tomorrow.addEventListener('click', this.addProjectButtons)
    customProjects.forEach(project => {
      project.addEventListener('click', this.addProjectButtons)
    })

    addProjectButton.addEventListener('click', this.newProject())
  }

  static newProject() {

  }

  static showProject(e) {
    project = this.children[1].textContent

  }
}