const enter = document.querySelector("#todo-form")
const list = document.querySelector("#list");
const selectButton = document.querySelector("#show-date")

enter.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    newItem.innerText = event.target["new-todo"].value;
    deleteButton.innerText = "delete " + event.target["new-todo"].value;
    list.appendChild(newItem);
    list.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
        list.removeChild(deleteButton);
    });
})

selectButton.addEventListener("click", () => {
    const dateTag = document.querySelector("#date")
    dateTag.innerText = Date();
})


