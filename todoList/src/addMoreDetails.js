import {tasks} from "./newTodo"

const popupBox = document.querySelector("#popupBox")

function addMoreDetails(){
    const title = popupBox.querySelector("#p").textContent;
    const project = document.querySelector("#projectTitle").textContent;
    const task = tasks.find(item => item.title == title && item.project == project)
    console.log(task);
    const date = popupBox.querySelector("#date").value;
    const priority = popupBox.querySelector("#priority").value;
    const text = popupBox.querySelector("#textArea").value;
    task.description = text;
    task.date = date;
    task.priority = priority;
    console.log(project)
}


export {addMoreDetails}