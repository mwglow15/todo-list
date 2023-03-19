import Task from './task.js'

export default class project {
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

  addTask(taskName,dueDate) {
    this.tasks.push(new Task(taskName, dueDate))
  }

  getTasks() {
    return this.tasks
  }
}