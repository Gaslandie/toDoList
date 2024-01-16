//nos variables
const addTask = document.getElementById('add-task');
const input = document.getElementById('task-input');
const taskContainer = document.getElementById('task-container');

//notre bouton + au clic
addTask.addEventListener('click',function(){
    //creation d'une div pour mettre nos taches à linterieur et nos boutton check et delete
    let task = document.createElement('div');
    task.classList.add('task');

    //li pour les taches à ajouter à notre div
    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    task.appendChild(li);

    //le check bouton
    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    //le delete bouton
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTrash');
    task.appendChild(deleteButton);

    //si on appuie sur notre + 
    if(input.value === ""){
        alert("please Enter a task");
    }else{
        taskContainer.appendChild(task);
    }

    //valider la tache au click du bouton check
    checkButton.addEventListener('click',function(){
        checkButton.style.display='none';
    })

    //supprimer la tache au click du bouton delete
    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})