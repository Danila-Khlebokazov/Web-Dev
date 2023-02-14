let toDoItems = []; // Array of tasks to do

function addToDo(text){
    const todo = {
        text,
        done: false,
        id: Date.now()
    }

    toDoItems.push(todo);
    console.log(toDoItems);
    render(todo);
}

const addButton = document.querySelector("#add-button");

addButton.onclick = function() {
    const input = document.querySelector("#main-input");

    const text = input.value.trim();
    if(text != ''){
        addToDo(text);
        input.value = '';
    }
}

function render(todo){
    const list = document.querySelector("#toDo-list-block");
    const prevItem = document.querySelector(`[data-key='${todo.id}']`);

    const isChecked = todo.done ? 'done': '';

    const node = document.createElement("div");

    node.setAttribute('class', `toDo-task ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
            <input type="checkbox" id="${todo.id}" class="checkbox-task" ${todo.done ? "checked" : ""}> 
            <span id="">
            ${todo.text}
            </span>
            <button class="delete-button">Delete</button>
        `

    if(prevItem){
        list.replaceChild(node, prevItem)
    }else{
        list.append(node);
    }
}

const list = document.querySelector("#toDo-list-block");
list.addEventListener("click", event => {
    if (event.target.classList.contains("checkbox-task")){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
})

function toggleDone(key) {
    const index = toDoItems.findIndex(item => item.id === Number(key));
    toDoItems[index].done = !toDoItems[index].done;
    render(toDoItems[index]);
}
