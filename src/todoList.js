
import task from './task.js'
import Project from './project.js'

export default class todoList {
  constructor() {
    this.projects = []

    this.projects.push(new Project('Inbox'))
    this.projects.push(new Project('Today'))
    this.projects.push(new Project('Tomorrow'))

  }

  addProject(project) {
    this.projects.push(project)
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName) {
    console.log('test test')
    let foundProject = this.projects.find((project) => project.getName() === projectName)
    
    return foundProject
  }
}