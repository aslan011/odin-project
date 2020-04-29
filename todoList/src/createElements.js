import {tasks} from "./newTodo"

const list = document.querySelector("#list")
const popupBox = document.querySelector("#popupBox")

function appendTask(){
    const task = document.createElement("li")
    const text = document.getElementById("text").value
    task.textContent = text;
    task.id = text;
    task.className = "tasks";
    list.appendChild(task);
    document.getElementById("text").value = "";
}

function popupBoxAppear(task){
    popupBox.style.visibility = "visible";
    popupBox.querySelector("#p").textContent= task;
    const taskArray = tasks.find(item => item.title ==  task)
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

export {appendTask}
export {popupBoxAppear}
export {resetPopupBox}