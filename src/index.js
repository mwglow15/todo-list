import UI from './ui.js'
import TodoList from './todoList.js'

const todoList = new TodoList()
const ui = new UI(todoList)

document.addEventListener('DOMContentLoaded', ui.loadAssets())