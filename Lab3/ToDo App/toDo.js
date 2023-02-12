document.querySelector('#add-button').onclick = function(){
    if(document.querySelector('#main-input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#toDo-list-block').innerHTML += `
            <div class="toDo-task"> 
                <input type="checkbox" name="" id=""> 
                ${document.querySelector('#main-input').value}
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
    }
}