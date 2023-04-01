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

  addTask(taskName, dueDate, done) {
    this.tasks.push(new Task(taskName, dueDate, done))
  }

  getTasks() {
    return this.tasks
  }

  getTask(taskName) {
    let foundTask = this.tasks.find((task) => task.getName() === taskName)
    
    return foundTask
  }

  getTaskNames() {
    let taskNames = []
    this.tasks.forEach(task => {
      taskNames.push(task.getName())
    })

    return taskNames
  }
}