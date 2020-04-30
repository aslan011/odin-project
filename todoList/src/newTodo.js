let tasks = [];
let projects = [{project:"General"}];
const projectTitle = document.querySelector("#projectTitle")
const taskTitle = document.querySelector("#p")

const newTask = function(title, description, date, priority, project="General") {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;

    tasks.push(this);

}

const newProject = function(project) {
    this.project = project;
    projects.push(this);
}

function deleteProject(){
    projects = projects.filter(project => project.project !== projectTitle.textContent)
    tasks = tasks.filter(task => task.project !== projectTitle.textContent)

}

function deleteTask(){
    tasks = tasks.filter(task => task.title !== taskTitle.textContent)

}

export {newTask}
export {newProject}
export {tasks, projects}
export {deleteProject}
export {deleteTask}