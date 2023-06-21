const tasks = document.getElementById("tasks");
const list = document.getElementById("List-container");
const add= document.getElementById("addTasks");
const counter = document.getElementById("counter");
function addTasks(event){
    if (tasks.value==='') {
        alert('you must write something!!!!!!');
    }else{
    let li = document.createElement("li");
    li.innerHTML=tasks.value;
    list.appendChild(li);
    // créer l'icon delete
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    // incrémenter le compter
    counter.textContent=parseInt(counter.textContent)+1;
    }
    tasks.value='';
}
// Ajouter avec entrer
tasks.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTasks(event);
    }
  });
list.addEventListener("click",function(e){
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName==="SPAN"){
        counter.textContent=parseInt(counter.textContent)-1;
        e.target.parentElement.remove();
    }
},false);
// Save to-do-list
function saveTasks() {
    const listeItem = document.querySelectorAll("#List-container li");
    const tasks = [];
    listeItem.forEach(function(item) {
        tasks.push(item.textContent);
    });
    localStorage.setItem("tasksList", JSON.stringify(tasks));
    alert("To-Do-List tasks succesfully");
}
function clearTasks() {
    counter.textContent=0;
    list.innerHTML='';
}