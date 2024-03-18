const enter = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const selectButton = document.querySelector("#show-date");
const completedList = document.querySelector("#completed-list");

enter.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = document.createElement("li");
    const deleteButton = document.createElement("button")
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    newItem.innerText = event.target["new-todo"].value;
    deleteButton.innerText = "delete " + event.target["new-todo"].value;
    list.appendChild(checkbox);
    list.appendChild(newItem);
    list.appendChild(deleteButton);
    checkbox.addEventListener("click", () =>{
        if (checkbox.checked){
            console.log("checked")
            newItem.style.color = "grey"
        } else {
            newItem.style.color = "black"
        }
        console.log(checkbox)
    })
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
        list.removeChild(deleteButton);
    });
})

selectButton.addEventListener("click", () => {
    const dateTag = document.querySelector("#date")
    dateTag.innerText = Date();
})


