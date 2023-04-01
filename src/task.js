export default class task {
  constructor(name, dueDate = 'No Date', done = false) {
    this.name = name
    this.date = dueDate
    this.done = done
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDueDate(date) {
    this.date = date
  }

  getDueDate() {
    return this.date
  }

  getDoneStatus() {
    return this.done
  }

  setDoneStatus(isDone) {
    this.done = isDone
  }
}