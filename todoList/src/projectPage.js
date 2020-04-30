const mainContent = document.querySelector("#mainContent");

function projectPage(projectName) {
    const title = mainContent.querySelector("#projectTitle");
    title.textContent = projectName;
}



export {projectPage}