
import task from './task.js'
import Project from './project.js'

export default class todoList {
  constructor() {
    this.projects = []

    this.projects.push(new Project('Inbox'))
    this.projects.push(new Project('Today'))
    this.projects.push(new Project('Tomorrow'))

    this.projects[0].addTask("test")
    this.projects[0].addTask("test2")
  }

  addProject(projectName) {
    this.projects.push(new Project(projectName))
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