import {newTask, tasks, projects, deleteTask} from "./newTodo";
import {newProject} from "./newTodo";
import {appendTask, popupBoxAppear, resetPopupBox, appendProject, selectGeneral} from "./createElements";
import {addMoreDetails} from "./addMoreDetails";
import {projectPage} from "./projectPage";
import {deleteProject} from "./newTodo"

new newTask("Just an example of High priority", "", "", "High", "General");
new newTask("Another example with medium priority", "", "", "Medium", "General");
new newTask("Med with a date", "", "01/01/2021", "Medium", "General");
new newTask("Low priority", "", "", "Low", "General");
new newTask("No priority set, same as Low", "", "", "", "General");



appendTask();
appendProject();

document.getElementById("newTask").addEventListener("click", () => {
    if (document.getElementById("text").value == "") {return}

    else if (tasks.some(task => task.title == document.getElementById("text").value && task.project == document.getElementById("projectTitle").textContent)) {alert("Task already exists")}

    else {
    new newTask(document.getElementById("text").value, "", "","",document.getElementById("projectTitle").textContent); appendTask();
}});

document.getElementById("newProject").addEventListener("click", () => {
    if (document.getElementById("projectName").value == "") {return}

    else if (projects.some(project => project.project == document.getElementById("projectName").value)) {alert("Project already exists")} 
    
    else {new newProject(document.getElementById("projectName").value); projectPage(document.getElementById("projectName").value); appendProject(); appendTask();
}});

const parent = document.getElementById("mainContent")
    parent.addEventListener("click", event => {
        if (event.target.className === "tasks") {
            popupBoxAppear(event.target.id)
        }})

const project = document.getElementById("leftContent")
    project.addEventListener("click", event => {
        if (event.target.className === "projects") {
            projectPage(event.target.textContent)
            appendTask();
        }
    })


document.getElementById("addDetails").addEventListener("click", () => {addMoreDetails(), appendTask(),resetPopupBox()}) 


document.getElementById("deleteProject").addEventListener("click", () => {deleteProject(), appendProject(), selectGeneral(), appendTask()})

document.getElementById("deleteTask").addEventListener("click", () => {deleteTask(), appendTask(), resetPopupBox()})

