import Project from './project'
import Task from './task'
import ToDoList from './todoList'

export default class storage {
  constructor() {
    this.todoList = new ToDoList()
  }

  static getTodoList() {
    return todoList
  }
}