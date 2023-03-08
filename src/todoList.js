import project from './project.js'
import task from './task.js'

export default class todoList {
  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

  getList() {
    return this.projects
  }
}