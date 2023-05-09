const body = document.body;

const newProjectDialog = document.querySelector("#new-project-dialog");
const showDialogButton = document.querySelector("#new-project-button");
const closeDialog = newProjectDialog.querySelector("#close");

const formHTML = document.querySelector(".filter-section form");

formHTML.hidden = true;
newProjectDialog.hidden = false;
showDialogButton.hidden = false;

showDialogButton.addEventListener("click", () => {
    newProjectDialog.showModal();
});

closeDialog.addEventListener("click", () => {
    newProjectDialog.close();
})