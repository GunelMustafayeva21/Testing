let addTaskBtn = document.getElementById("add-task");
let taskInput = document.querySelector("input.task-title");
let taskPriority = document.querySelector("input.task-priority");
let taskWrapper = document.querySelector(".tasks .list-group");
let addedTask= document.querySelector(".group-item");
let removeBtn= document.querySelector("span button.remove-task") 
let editBtn= document.querySelector("span button.edit-task") 

if (localStorage.getItem("tasks") == null) {
  localStorage.setItem("tasks", "[]")
} 
else {
  let tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
  if (tasksFromStorage.length > 0) {
    for (const item of tasksFromStorage) {
      let newTaskElem =
      "<li class='group-item' id='item.id'>"+ 

      "<div class='d-flex justify-content-between align-items-center'>"+ item.text + 
      "<span>" + "<button class='bi bi-pencil edit-task'>"+ "</button>"  + "<button class=' bi bi-trash3 remove-task' onclick=checkFields() >" +"</button>"+"</span>"
      +"</div>" 
      + "<div class='PriorityDiv'>"+item.priority
      + "</div>"
      + "</li>";
      taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
    }
  }
}

addTaskBtn.addEventListener("click", saveTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    saveTask();
  }
});
 
let Id=0;
function saveTask() {
  
  if (taskInput.value.trim() !== "" && taskPriority.value.trim() !== "") {
    
    let newTaskElem =
    "<li class='group-item ' id='Id'>" + 

    "<div class='d-flex justify-content-between align-items-center'>"+ taskInput.value + 
    "<span>"  + "<button class='bi bi-pencil edit-task'>"+ "</button>"  + "<button class='bi bi-trash3 remove-task' onclick=checkFields()>"+"</button>"
    +"</span>"+"</div>" 
     + "<div class='PriorityDiv'>"+taskPriority.value + "</div>"+

    "</li>";
    taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;

    let task = {
      
      id:Id,
      text: taskInput.value,
      priority: taskPriority.value
    };

    let tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
    tasksFromStorage.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    taskInput.value = "";
    taskPriority.value="";
    Id++;
  }
  else {
    alert("You can't add an empty task!");
  }
}

removeBtn.addEventListener('click', (e)=>{
const taskId = e.target.closest['li'].id;
removeTask(taskId);
})

editBtn.addEventListener('click', (e)=>{
  const taskId = e.target.closest['li'].id;
  removeTask(taskId);
  tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
  let task= tasksFromStorage.find((task)=> task.id != parseInt(taskId));
  taskInput.value=task.text;
  taskPriority.value=task.priority;
  })

function removeTask(taskId){
  tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
  tasksFromStorage.filter((task)=> task.id != parseInt(taskId))
  localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
  document.getElementById(taskId).remove();
}



  
  







