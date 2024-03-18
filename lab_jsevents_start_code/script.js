const enter = document.querySelector("#todo-form")
const list = document.querySelector("#list");
const selectButton = document.querySelector("#show-date")
const header = document.querySelector(".header")



enter.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = document.createElement("li");
    const newButton = document.createElement("button", );
    newItem.innerText = event.target["new-todo"].value;
    newButton.innerText = "delete " + event.target["new-todo"].value;
    list.appendChild(newItem);
    list.appendChild(newButton);
    newButton.addEventListener("click", (event) => {
        list.removeChild(newItem);
        list.removeChild(newButton);
    });
})

selectButton.addEventListener("click", () => {
    const dateTag = document.querySelector("#date")
    dateTag.innerText = Date();

})
