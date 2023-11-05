function todoAdd(){
    const taskName = document.getElementById('task').value;

    if (taskName === '') {
        alert('Please enter your task.');
        return;
    }
    
    document.querySelector('#todoList').innerHTML +=`<li id="li_id">${taskName}
    <button onclick="deleteFunc()" id="deleteBtn">Delete</button>
    <button id="editBtn">Edit</button>
    <hr></li>`;
    document.getElementById('task').value='';
    
}

function deleteFunc(){
    console.log("Task deleted");
}