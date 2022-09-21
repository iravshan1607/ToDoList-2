window.addEventListener("load", () => {
  const form = document.querySelector("#new-form");
  const input = document.querySelector("#new-input");
  const elList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Iltimos maydonni to'ldiring");
      return;
    }

    const elTask = document.createElement("div");
    elTask.classList.add("task");

    const elTaskContent = document.createElement("div");
    elTaskContent.classList.add("content");

    elTask.appendChild(elTaskContent);

    // function for text

    const elTaskInput = document.createElement("input");
    elTaskInput.classList.add("text");
    elTaskInput.type = "text";
    elTaskInput.value = task;
    elTaskInput.setAttribute("readonly", "readonly");

    elTaskContent.appendChild(elTaskInput);

    const elTaskAction = document.createElement("div");
    elTaskAction.classList.add("actions");

    const elTaskEdit = document.createElement("button");
    elTaskEdit.classList.add("edit");
    elTaskEdit.innerHTML = "Edit";

    const elTaskDelete = document.createElement("button");
    elTaskDelete.classList.add("delete");
    elTaskDelete.innerHTML = "Delete";

    elTaskAction.appendChild(elTaskEdit);
    elTaskAction.appendChild(elTaskDelete);

    elTask.appendChild(elTaskAction);

    elList.appendChild(elTask);

    input.value = "";

    //   EDIT BUTTON FUNCTIONS

    elTaskEdit.addEventListener("click", () => {
      if (elTaskEdit.innerText.toLowerCase() == "edit") {
        elTaskInput.removeAttribute("readonly");
        elTaskInput.focus();
        elTaskEdit.innerHTML = "Save";
      } else {
        elTaskInput.setAttribute("readonly", "readonly");
        elTaskEdit.innerText = "Edit";
      }
    });

    elTaskDelete.addEventListener("click", () => {
      elList.removeChild(elTask);
    });
  });
});
