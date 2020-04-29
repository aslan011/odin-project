import {newTask} from "./newTodo"
import {appendTask, popupBoxAppear, resetPopupBox} from "./createElements"
import {addMoreDetails} from "./addMoreDetails"

document.getElementById("newTask").addEventListener("click", () => {new newTask(document.getElementById("text").value, "", "",""); appendTask();

});

const parent = document.getElementById("mainContent")
    parent.addEventListener("click", event => {
        if (event.target.className === "tasks") {
            popupBoxAppear(event.target.textContent)
        }})

document.getElementById("addDetails").addEventListener("click", () => {addMoreDetails(), resetPopupBox()}) 

