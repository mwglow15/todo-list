import Project from './project.js'
import Task from './task.js'
import TodoList from './todoList.js'
import Storage from './storage.js'
import task from './task.js'

export default class UI {
  constructor(todoList) {
    this.todoList = todoList
    this.currentProjectName = 'Inbox'
  }

  loadAssets() {

    this.loadProjects()
    this.initProjectButtons()
    this.showProject(this.currentProjectName)
  }

  //Side Bar Function //

  //Loads projects in Todo List into nav bar
  loadProjects() {
    const projectContainer = document.querySelector('.new-projects-container')
    const projectTags = document.querySelectorAll('.project')

    while (projectContainer.firstChild) {
      projectContainer.firstChild.remove()
    }

    const defaultProjects = ['Inbox', 'Today', 'Tomorrow']
    const projects = this.todoList.getProjects()

    projects.forEach((project) => {
      const projectName = project.getName()
      
      if (!defaultProjects.includes(projectName)) {
        projectContainer.innerHTML += `
        <div class="project custom-project ${project.getName()}">
          <i class="fa-sharp fa-solid fa-list-ul"></i>
          <p>${project.getName()}</p>
          <i class="fa-solid fa-xmark"></i>
        </div>`
      }
    })

    projectTags.forEach((proj) => {
      proj.innerHTML += `
    `
    })

    this.initUserProjectButtons()
  }

  // Project Event Listeners
  initProjectButtons() {
    const projects = document.querySelectorAll('.project')
    const inbox = document.querySelector('.project.inbox')
    const today = document.querySelector('.project.today')
    const tomorrow = document.querySelector('.project.tomorrow')
    const addProjectButton = document.querySelector('#new-project')
    
    today.addEventListener('click', this.handleProjectButtons.bind(this))
    inbox.addEventListener('click', this.handleProjectButtons.bind(this))
    tomorrow.addEventListener('click', this.handleProjectButtons.bind(this))

    addProjectButton.addEventListener('click', this.openNewProjectForm.bind(this))
  }

  showDeleteButton(e) {
    const deleteButton = e.currentTarget.querySelector('.fa-xmark')
    deleteButton.style.display = "inline"
  }

  hideDeleteButton(e) {
    const deleteButton = e.currentTarget.querySelector('.fa-xmark')
    deleteButton.style.display = "none"
  }

  initUserProjectButtons() {
    const customProjects = document.querySelectorAll('.project.custom-project')
    const deleteButtons = document.querySelectorAll('.fa-xmark')

    deleteButtons.forEach(button => {
      button.removeEventListener('click', this.handleDeleteProjButton)
      button.addEventListener('click', this.handleDeleteProjButton.bind(this), {once: true})
    })

    customProjects.forEach(project => {
      project.removeEventListener('click', this.handleProjectButtons.bind(this))
      project.removeEventListener('mouseover', this.showDeleteButton.bind(this))
      project.removeEventListener('mouseout', this.hideDeleteButton.bind(this))

      project.addEventListener('click', this.handleProjectButtons.bind(this))
      project.addEventListener('mouseover', this.showDeleteButton.bind(this))
      project.addEventListener('mouseout', this.hideDeleteButton.bind(this))
    })
  }

  handleDeleteProjButton(e) {
    e.stopPropagation()
    const projectName = e.currentTarget.parentElement.querySelector('p').innerHTML
    const project = this.todoList.getProject(projectName)

    this.todoList.deleteProject(project)

    this.loadProjects()
    if (this.currentProjectName == projectName) {
      this.showProject('Inbox')
    }
  }

  newProject() {
    this.openNewProjectForm().bind(this)
  }

  openNewProjectForm() {
    const newProjectsContainer = document.querySelector(".new-projects-container")

    if (!newProjectsContainer.firstChild ||
      newProjectsContainer.firstChild.tagName !== "FORM") {
      const newProjectForm = document.createElement('form')
      newProjectForm.classList.add('new-project-form')
      newProjectForm.innerHTML = `
      <label for="task-name">Project Name</label>
      <input type="text" id="projName" name="project-name" required>
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="submit" value="Submit">
        <input type="button" class="form-buttons close" value="Close">
      </div>`

      newProjectsContainer.append(newProjectForm)

      newProjectForm.addEventListener('submit', this.submitProjectForm.bind(this))
      }
      
      
      const submitButton = document.querySelector('.submit')
      const closeButton = document.querySelector('.close')
      closeButton.addEventListener('click', this.closeProjectForm)
  }

  submitProjectForm(e) {
    e.preventDefault()
    const projInput = document.getElementById('projName').value

    const isGoodInput = this.checkProjInput(projInput)

    if(isGoodInput) {
      this.todoList.addProject(projInput)
      this.loadProjects()
      this.showProject(projInput)
    }
  }

  closeProjectForm() {
    const projForm = document.querySelector('.new-project-form')

    projForm.remove()
  }

  checkProjInput(input) {
    if (input === '') {
      console.log('Enter a project name')
      return false
    }

    if (this.todoList.getProjectNames().includes(input)) {
      console.log('Enter a unique project name')
      return false
    }

    return true
  }

  handleProjectButtons(e) {
    const projectName = e.currentTarget.children[1].textContent

    this.showProject(projectName)
  }

  // Project View Functions
    
  showProject(projectName) {
    const projectContainer = document.querySelector('#project-container')
    const project = this.todoList.getProject(projectName)

    projectContainer.innerHTML = `
    <div class="tasks-header">
      <div class="project-title">${projectName}</div>
      <button type="button" class="new-task">
        <i class="fa-sharp fa-solid fa-plus"></i>
        New Task
      </button>
    </div>
    <div id="tasks-container"></div>
    `

    if (projectName === 'Today') {
      this.showTodaysTasks()
    } else if (projectName === 'Tomorrow') {
      this.showTomorrowsTasks()
    } else {
      this.loadTasks(project)
    }

    this.currentProjectName = projectName
    this.initNewTaskButton(projectName)
  }

  initNewTaskButton() {
    const newTask = document.querySelector('.new-task')

    newTask.addEventListener('click', this.openNewTaskForm.bind(this))
  }

  openNewTaskForm() {
    const tasksContainer = document.querySelector("#tasks-container")

    if (!tasksContainer.firstChild || tasksContainer.firstChild.tagName !== "FORM") {
      const newTaskForm = document.createElement('form')
      newTaskForm.classList.add('new-task-form')
      newTaskForm.innerHTML = `
      <label for="task-name">Task Name</label>
      <input type="text" id="taskName" name="task-name">
      <div class="form-buttons-div">
        <input class="form-buttons submit" type="button" value="Submit">
        <input type="button" class="form-buttons close" id="close-task-form-button" value="Close">
      </div>`

      tasksContainer.prepend(newTaskForm)

      newTaskForm.addEventListener('click',this.submitTaskForm.bind(this))
      const closeButton = document.querySelector('#close-task-form-button')
      closeButton.addEventListener('click', this.closeTaskForm)
    }
  }

  submitTaskForm(e) {
    e.preventDefault()
    const taskName = document.getElementById('taskName').value
    console.log(taskName)

    const isGoodName = this.checkTaskInput(taskName)

    if (isGoodName) {
      const currentProject = this.todoList.getProject(this.currentProjectName)
      currentProject.addTask(taskName)
      this.loadTasks(currentProject)
      this.initTaskButtons(currentProject)
    }
  } 

  checkTaskInput(input) {
    if (input === '') {
      console.log('Enter a Task name')
      return false
    }

    if (this.todoList.getProject(this.currentProjectName).getTaskNames().includes(input)) {
      console.log('Enter a unique task name')
      return false
    }

    return true
  }

  closeTaskForm() {
    const tasksContainer = document.querySelector("#tasks-container")

    tasksContainer.firstElementChild.remove()
  }

  showTodaysTasks() {
    
  }

  showTomorrowsTasks() {

  }

  loadTasks(currentProject) {
    const projectTasks = currentProject.getTasks()

    const tasksContainer = document.querySelector('#tasks-container')

    tasksContainer.innerHTML = ''

    projectTasks.forEach((task) => {
      this.renderTaskCard(task, tasksContainer)
    })

    this.initTaskButtons(currentProject)
  }

  initTaskButtons(currentProject) {
    const checkboxes = document.querySelectorAll("[type='checkbox']")
    const dueDates = document.querySelectorAll(".task-date-container")
    const newDateForms = document.querySelectorAll(".task-date-input")
    const taskNames = document.querySelectorAll(".task-name")

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', this.setTaskDone.bind(this, currentProject))
    })

    taskNames.forEach(taskName => {
      taskName.addEventListener('click', showEditTaskNameForm.bind(this))
    })

    dueDates.forEach(dueDate => {
      dueDate.addEventListener('click', this.showEditDateForm.bind(this))
    })

    newDateForms.forEach(newDateForm => {
      newDateForm.addEventListener('change', this.editDueDate.bind(this, currentProject))
    })
  }

  showEditTaskNameForm(e) {

  }

  showEditDateForm(e) {
    const taskTarget = e.currentTarget
    const taskDateForm = taskTarget.parentElement.querySelector(".task-date-input")

    taskTarget.style.display = 'none'
    taskDateForm.style.display = 'flex'
  }

  editDueDate(currentProject, e) {
    console.log(e)
    const taskName = e.target.parentElement.parentElement.querySelector('.task-name').textContent
    console.log(taskName)
    const task = currentProject.getTask(taskName)
    const newDate = e.target.value

    task.setDueDate(newDate)

    this.loadTasks(currentProject)
  }

  setTaskDone(currentProject, e) {
    const taskName = e.currentTarget.name
    const taskDone = e.currentTarget.checked

    const clickedTask = currentProject.getTask(taskName)

    clickedTask.setDoneStatus(taskDone)
  }

  renderTaskCard(task, tasksContainer) {
    const taskDate = task.getDueDate()
    const taskName = task.getName()

    const inputValue = taskDate == "No Date" ? "" : taskDate

    tasksContainer.innerHTML += `
    <div class="task-card">
      <input type="checkbox" id="taskDone" name="${taskName}" ${task.getDoneStatus() ? 'checked' : ""}>
      <div class="task-name-container">
        <p class="task-name">${taskName}</p>
        <input type="text" id="name-input" value="${taskName}">
      </div>
      <div class="task-date-container">
        <p>Due Date</p>
        <p>${taskDate}</p>
      </div>
      <div class="task-date-input">
        <label for="date-input">Due Date</label>
        <input type="date" id="date-input" value="${inputValue}">
      </div>
    </div>`
  }
}