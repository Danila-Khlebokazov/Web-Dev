var todos = [];
document.querySelector('#add-button').onclick = function(){
    if(document.querySelector('#main-input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        todos.append(document.querySelector('#main-input').value);
        document.querySelector('#toDo-list-block').innerHTML += `
            <div class="toDo-task"> 
                <input type="checkbox" id="check" class="checkbox-task"> 
                <span id="${todos.indexOf(todos.append(document.querySelector('#main-input').value))}">
                ${document.querySelector('#main-input').value}
                </span>
                <button class="delete-button">Delete</button>
            </div>
        `;
        document.getElementById("main-input").value = "";
        var current_tasks = document.querySelectorAll(".delete-button");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        let done_tasks = document.querySelectorAll(".toDo-task");
        console.log(done_tasks)
        for(var i = 0; i < done_tasks.length; i++){
            let isChecked = false;
            done_tasks[i].querySelector(".checkbox-task").onclick = function(){
                console.log(this.checked)
                isChecked = this.checked;
                
            };
            console.log("isChecked" + isChecked);
            if(isChecked){
                done_tasks[i].querySelector("span").style.textDecoration = "line-through";
            }
            else{
                done_tasks[i].querySelector("span").style.textDecoration = "none";
            }
        }
    }

}