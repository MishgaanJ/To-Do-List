const taskInput = document.getElementById('task-input');
const tasksList = document.getElementById('taskList');

function addTask(){
    if(taskInput.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=taskInput.value;
        tasksList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    taskInput.value="";
    saveData();
}

tasksList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem("data", tasksList.innerHTML);
}

function getData(){
    tasksList.innerHTML = localStorage.getItem("data");
}

getData();