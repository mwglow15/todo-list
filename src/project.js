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

  addTask(task) {
    this.tasks.push(task)
  }

  getTasks() {
    return this.tasks
  }
}