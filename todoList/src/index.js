import {newTask, tasks, projects, deleteTask} from "./newTodo";
import {newProject} from "./newTodo";
import {appendTask, popupBoxAppear, resetPopupBox, appendProject, selectGeneral} from "./createElements";
import {addMoreDetails} from "./addMoreDetails";
import {projectPage} from "./projectPage";
import {deleteProject} from "./newTodo"

new newTask("CHECK", "that", "27/5/4", "who", "General");
new newTask("this is in general 2 capssss", "that", "what", "who", "General");
new newTask("this is in general 3", "that", "what", "who", "general");
new newTask("this is in general 4", "that", "what", "who", "general");
new newTask("this is in test", "that", "what", "who", "test");
new newTask("this is in test", "that", "what", "who", "test");
new newTask("this is in test", "that", "what", "who", "test");

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

