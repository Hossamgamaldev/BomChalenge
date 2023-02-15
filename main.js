
//نعمل تخزين البيانات علشان نرجعها ونعرضها تاني


document.getElementById("btnTask").onclick = function addTask ()
{

// the variables
            var task = document.getElementById("newTask").value;
        var pTask = document.createTextNode(task);
    var taskName = document.createElement("p");
    var btn = document.createElement("button")
        btn.innerHTML = "Done";
        btn.className = "doneBtn";
    var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "deleteBtn";
    var div = document.createElement("div");
    div.className = "divStyle";
    var completed = document.getElementById("completedTask");


    // check The data
    if (task) {
    taskName.appendChild(pTask);
    div.appendChild(taskName);
    div.appendChild(btn);
    document.getElementById("theTasks").appendChild(div);

    document.getElementById("newTask").value = "";
    document.getElementById("newTask").placeholder = "Please inter the task";
    } else {
    document.getElementById("newTask").focus();
    document.getElementById("newTask").placeholder =
        "You must inter the task";
    }
btn.onclick = function doneTask() {
var completedTask = this.parentNode;
    completedTask.remove();
    completed.appendChild(completedTask);
    btn.style.cssText = "display: none;";
    completedTask.appendChild(deleteBtn);
};
deleteBtn.onclick = function deleteTask() {
var completedTask = this.parentNode;
completedTask.remove();
};

}

