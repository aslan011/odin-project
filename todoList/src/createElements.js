import {tasks, projects, deleteProject} from "./newTodo"

const list = document.querySelector("#list")
const projectList = document.querySelector("#projectList")
const popupBox = document.querySelector("#popupBox")
const projectTitle = document.querySelector("#projectTitle")
const deleteButton = document.querySelector("#deleteProject")

function appendTask(){
    if (projectTitle.textContent == "General"){
        deleteButton.style.visibility = "hidden";}
    else {deleteButton.style.visibility = "visible"}
    list.innerHTML = "";
    tasks.forEach(object => {
        if (object.project === projectTitle.textContent){
            const task = document.createElement("div");
            const text = object.title;
            task.textContent = text;
            const date = document.createElement("div");
            date.textContent = object.date;
            task.id = text;
            task.className = "tasks";
            date.className = "dates"
            if (object.priority == "High"){task.style.backgroundColor = "rgba(250, 64, 64, 0.699)"}
            else if (object.priority == "Medium") {task.style.backgroundColor = "rgba(253, 179, 40, 0.726)"}
            list.appendChild(task);
            task.appendChild(date)
        }
    }) 
    document.getElementById("text").value = "";
    
}

function appendProject(){
    projectList.innerHTML = "";
    projects.forEach(object => {
        const project = document.createElement("div")
        const projectName = object.project;
        project.textContent = projectName;
        project.id = projectName;
        project.className = "projects";
        projectList.appendChild(project);
        document.getElementById("projectName").value = "";
    })
}

function popupBoxAppear(task){
    popupBox.style.visibility = "visible";
    popupBox.querySelector("#p").textContent = task;
    const project = document.querySelector("#projectTitle").textContent;
    const taskArray = tasks.find(item => item.title ==  task && item.project == project)
    const description = taskArray.description;
    const date = taskArray.date;
    const priority = taskArray.priority;
    popupBox.querySelector("#date").value = date;
    popupBox.querySelector("#priority").value = priority;
    popupBox.querySelector("#textArea").value = description;

    
}

function resetPopupBox(){
    popupBox.style.visibility = "hidden";
}

function selectGeneral (){
    projectTitle.textContent = "General";
}

export {appendTask}
export {popupBoxAppear}
export {resetPopupBox}
export {appendProject}
export {selectGeneral}