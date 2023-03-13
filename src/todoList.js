
import task from './task.js'

export default class todoList {
  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

  getProjects() {
    return this.projects
  }
}